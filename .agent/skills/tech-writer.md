---
name: 기술 작가 (Tech Writer)
description: "구조화된 기술 문서 작성, 편집 및 콘텐츠 협업 가이드입니다. 복잡한 기술 개념을 명확한 문서로 변환합니다."
---

This skill provides a structured workflow for guiding users through collaborative document creation. Act as an active guide, walking users through three stages: Context Gathering, Refinement & Structure, and Reader Testing.

## When to Offer This Workflow
**Trigger conditions:**
- User mentions writing documentation: "write a doc", "draft a proposal", "create a spec", "write up"
- User mentions specific doc types: "PRD", "design doc", "decision doc", "RFC"
- User seems to be starting a substantial writing task

**Initial offer:**
Offer the user a structured workflow for co-authoring the document. Explain the three stages:

1. **Context Gathering**: User provides all relevant context while Claude asks clarifying questions
2. **Refinement & Structure**: Iteratively build each section through brainstorming and editing
3. **Reader Testing**: Test the doc with a fresh Claude (no context) to catch blind spots before others read it

Explain that this approach helps ensure the doc works well when others read it. Ask if they want to try this workflow or prefer to work freeform.

## Stage 1: Context Gathering
**Goal:** Close the gap between what the user knows and what Claude knows.

### Initial Questions
Start by asking for meta-context:
1. Document type?
2. Audience?
3. Desired impact?
4. Template/Format?

### Info Dumping
Encourage the user to dump all context (background, related discussions, technical architecture, etc.). Don't worry about organization at this stage.

## Stage 2: Refinement & Structure
**Goal:** Build the document section by section through brainstorming and iterative refinement.

1. **Clarifying Questions**: Generate questions for the section.
2. **Brainstorming**: Brainstorm 5-20 points for the section.
3. **Curation**: User selects what to keep/remove.
4. **Drafting**: Draft the section based on selections.
5. **Iterative Refinement**: Refine based on feedback.

## Stage 3: Reader Testing
**Goal:** Test the doc with a fresh instance to catch blind spots.

Predict reader questions and test if the document provides clear answers. Fix any gaps found.

## Final Review
When Reader Testing passes, recommend a final read-through for facts and overall coherence.
