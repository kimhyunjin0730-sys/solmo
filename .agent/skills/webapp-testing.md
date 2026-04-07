---
name: 웹 애플리케이션 테스팅 및 품질 보증 (Webapp QA & Testing)
description: "웹 애플리케이션의 버그 조사, 기능 검증 및 자동화 테스트 작성을 지원합니다. Playwright와 같은 도구를 활용합니다."
license: Complete terms in LICENSE.txt
---

# Web Application Testing

To test local web applications, write native Python Playwright scripts.

## Decision Tree: Choosing Your Approach

1. Is it static HTML?
   - Yes: Read HTML file directly.
   - No: Dynamic webapp. Is server running?
     - No: Use `scripts/with_server.py`.
     - Yes: Reconnaissance (Navigate -> Screenshot/Inspect -> Identify selectors -> Action).

## Example: Using with_server.py

```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_automation.py
```

## Reconnaissance-Then-Action Pattern

1. **Inspect rendered DOM**:
   ```python
   page.screenshot(path='/tmp/inspect.png', full_page=True)
   content = page.content()
   ```
2. **Identify selectors** from inspection results.
3. **Execute actions** using discovered selectors.

## High-Level Guidance
- Always wait for `networkidle` for dynamic apps.
- Use descriptive selectors (text=, role=, CSS, IDs).
- Always close the browser when done.
