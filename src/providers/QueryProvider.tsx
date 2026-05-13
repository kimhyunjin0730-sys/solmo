'use client';

import { useState, type ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from '@tanstack/react-query';

/**
 * Next.js App Router에서 안전한 QueryClient 부트스트랩.
 *
 * 서버: 요청마다 새 인스턴스
 * 클라이언트: 첫 마운트 1회만 생성해서 모듈 스코프에 캐싱
 *  (https://tanstack.com/query/v5/docs/framework/react/guides/ssr#nextjs-app-router)
 */

function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 서버에서 prefetch 시 즉시 stale 되지 않도록 약간의 staleTime
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient(): QueryClient {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

export function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => getQueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
