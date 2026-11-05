# XAVA — Public/private corporate memory bridge

**Updated:** 2026-11-05  
**Status:** `CONNECTED / VERIFIED PRIVATE REPOSITORY`

## Two-repository architecture

1. **PUBLIC:** `sergiodavidvale-sketch/xavier-ingenieria-civil-web` — XAVA digital product and sanitized corporate/formalization status, decisions and document IDs.
2. **PRIVATE:** `sergiodavidvale-sketch/xava-corporate-memory` — exact, extracted shareholder identity/fiscal fields in Markdown, with source IDs and issue dates.

**Verification checkpoint:** On 2026-11-05 the connected GitHub client confirmed `visibility: private` and write/read access, then re-fetched **13 expected files** from `main` after import. Revalidate permission and privacy in future sessions.

## Division of authority

| Category | Public | Private |
|---|---|---|
| Website, deploy, product roadmap | Canonical | Not duplicated |
| Public-safe formalization status | Sanitized | Cross-referenced |
| RFC, CURP, INE/voter ID fields | **Never** | Structured Markdown with dated source |
| Historical SAT records / personal domiciles | **Never** | Dated snapshots, not current assertions |
| Notary form field mapping | Redacted A–M outline | Individual values + source mapping |
| Original images, certificates, signed forms | No | **Not uploaded by default**; separate approved private storage needed |

## Shared identifiers and synchronization

- Maintain consistent IDs `DOC-###`, `NTR-001` and `ACT-###`.
- No automatic replication, Git submodule, source embed, or sync from private into public.
- Never copy private person-level values into this public repo, its issues/PRs/workflows, website or telemetry.
- Public business arrangements are internally proposed until notary/authority evidence.
- Private Markdown reflects **values from documents at their issuance dates**, not perpetual currency or legal validation.

## Recovery protocol for future sessions

1. Read the public `AGENTS.md`, `docs/company-memory/CURRENT_STATE.md`, `DOCUMENT_REGISTER.md` and this bridge.
2. For person-level fields, use the authorized GitHub connection to access `sergiodavidvale-sketch/xava-corporate-memory`.
3. **Check `visibility: private` and permissions** before reading/writing. If not accessible or visibility changes, stop. Do not use public search as a substitute.
4. Read private `AGENTS.md`, `SECURITY.md`, `CURRENT_STATE.md`, `sources/SOURCE_REGISTER.md`, and only the shareholder profile required for the current task.
5. Preserve original source ID, issue/observation date and verification status. If a later official document supersedes a historical snapshot, do not silently erase older provenance.
6. Update only sanitized milestones back in the public repo. Keep privately sourced values out of logs, PR descriptions and public documents.
7. A Markdown transcription does **not** replace original INE, CURP or SAT documents when a notary or authority requests them.

## Verified import and outstanding storage gap

The private repo **is active** and contains 13 imported Markdown/config files, including two personal shareholder profiles and source/capital/notary records.

**Outstanding:** Original PDFs, photos and completed Word forms still need a separate, access-controlled long-term archive. GitHub stores extracted values, not certified government documents. The latest notary working form remains a private draft, not a legal filing.
