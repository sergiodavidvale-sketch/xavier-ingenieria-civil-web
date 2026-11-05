# AGENTS.md — xavier-ingenieria-civil-web

Sigue el flujo obligatorio de `/home/sergio/AGENTS.md`.

- Lee `/home/sergio/AI-PROJECT-PLAYBOOK.md` antes de planear, programar o depurar.
- Revisa este README y el estado de Git antes de modificar el proyecto.
- Mantén este proyecto como una landing estática, sin backend ni servicios innecesarios.
- Trata los datos comerciales, legales, de contacto y de portafolio como provisionales hasta su validación.
- Ejecuta `npm run check` y `git diff --check` antes de cada checkpoint.

## Corporate memory recovery

For any task related to corporate formation, shareholders, capital, notary work, SAT, banking, IMSS, SIROC, public procurement, legal identity, corporate contact data, or formalization status:

1. Read `docs/company-memory/README.md`.
2. Read `docs/company-memory/CURRENT_STATE.md`.
3. Read `docs/company-memory/CORPORATE_PROFILE.md`.
4. Read `docs/company-memory/DECISIONS.md`.
5. Read `docs/company-memory/DOCUMENT_REGISTER.md`.
6. Read `docs/company-memory/OPEN_ITEMS.md`.
7. Use `SOURCE_PRECEDENCE.md` when sources conflict.
8. Apply `DATA_CLASSIFICATION.md` before committing or exposing corporate data.

Do not assume chat history reflects the current corporate state. Keep sensitive originals outside this public repository.

### Private identity-data memory

For requests needing exact shareholder RFC, CURP, INE or dated SAT details, read `docs/company-memory/PRIVATE_MEMORY_BRIDGE.md`. The proposed private repository is `sergiodavidvale-sketch/xava-corporate-memory`, **not yet created/verified** at the time of this checkpoint. Do not assume it exists. When access is available, verify private visibility and fetch field-level values from its source-grounded Markdown. Never copy private values into this public repo, its PRs, logs or website.

### Notary forms and external documents

For any request about a received notary form, quotation, requirements, pre-filling or submission, read `docs/company-memory/notary/NTR-001/README.md`, `SOURCE_REVIEW.md`, and `FORM_FIELD_MATRIX.md` before drafting or editing.

- The current executive brief is **DOC-004 (V2)**; DOC-003 is superseded.
- `REQUISITOS SOCIEDAD.doc` (DOC-005) and `FORMASACV.doc` (DOC-006) are external source documents, not government-verified legal rules.
- Original binary files are **not held in GitHub**. Confirm a private source location or request re-upload before producing an exact edited form.
- Do not copy personal identifiers, private address, bank numbers, payment instructions, or unredacted form answers into GitHub, logs, issues, pull requests, or review comments.
- Preserve original questionnaires unchanged, and create separately versioned, private working copies.
- Record intake, approval, sending, and notary acceptance as distinct events; do not infer progress from the existence of documents.
- Keep the digital-product frontend unchanged unless expressly requested.

