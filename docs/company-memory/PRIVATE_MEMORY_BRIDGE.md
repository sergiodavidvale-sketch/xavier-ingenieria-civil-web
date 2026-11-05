# XAVA — Public/private corporate memory bridge

**Documented:** 2026-11-05  
**Status:** `PLANNED / PRIVATE REPO NOT YET CREATED`

## Two-repository decision

Founders approved two distinct persistence surfaces:

1. **Public** `sergiodavidvale-sketch/xavier-ingenieria-civil-web` remains the source of truth for the digital product and public-safe corporate workflow status.
2. **Private (planned)** `sergiodavidvale-sketch/xava-corporate-memory` is intended to hold extracted, field-level shareholder identity and tax data in Markdown, with source provenance and dated snapshots.

**Important:** As of this checkpoint, the GitHub private repository has not been verified as created or populated. A local starter package with Markdown files was generated separately. Do not claim this GitHub link exists or its content can be fetched until verified through authenticated GitHub repository metadata.

## What is stored where?

| Domain | Public repo | Private repo, once established |
|---|---|---|
| React/Vite site, deployment, visual roadmap | Canonical | Not duplicated |
| Corporate milestones, non-sensitive decisions, tasks | Sanitized canonical summary | Cross-reference as needed |
| Person-level RFC, CURP, INE credential data | **Never** | Source-grounded Markdown only, private and access-controlled |
| Personal domiciles and historic SAT contact/status | **Never** | Dated source snapshots; never assume current |
| Named shareholder records and sensitive notary-form entries | Role-level metadata only | Private files, referenced by document/field IDs |
| Original INE, CURP, CSF PDF, completed Word forms | Not stored | **Not stored by default**; separate controlled private archive needed |
| Source index | Public-safe DOC IDs | DOC IDs plus actual extracted values and provenance |

## Synchronization contract

- Reuse stable source IDs `DOC-###`, dossier `NTR-001` and open-item IDs `ACT-###`.
- The public repo may record receipt, verification, draft/approval/sent status and blockers **without exposing personal values**.
- Do **not** automatically mirror private Markdown into the public repo. There is no one-way sync or Git submodule configured.
- The private repo is authoritative for exact extracted *personal* values **subject to source date**, while a later genuine official document can supersede historical records.
- Public corporate plans remain internally approved intentions until notary/authority confirmation.

## Recovery steps

1. Read this document and the public company-memory `CURRENT_STATE.md` / `DOCUMENT_REGISTER.md`.
2. If exact person-level values are needed, use the **authorized connected GitHub client** to locate `sergiodavidvale-sketch/xava-corporate-memory`.
3. Verify `visibility: private` and authorized read access before opening any private files; otherwise stop and ask the owner to establish or authorize the private repository.
4. If available, read its `AGENTS.md`, `README.md`, `CURRENT_STATE.md`, `sources/SOURCE_REGISTER.md` and relevant shareholder files.
5. Extract only requested fields; preserve status and issue date. Do not copy private values into this public repository, its issues/PRs, logs or website.
6. Never suggest that a Markdown value replaces an original government PDF for a formal notarial submission.

## Creation/import checkpoint

- GitHub connection currently supports file editing on **existing** repositories but not creating repositories.
- The owner must create a **private** repository with the target name, or connect an already-created authorized private repo.
- The prepared local Markdown starter package can then be imported. Confirm the resulting repository's privacy **before the first commit/push**.
- Once created and verified, update this document from `PLANNED` to `CONNECTED`, and add an import commit reference, without exposing private data.
