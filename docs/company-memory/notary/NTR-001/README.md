# NTR-001 — Notary 20 intake and S.A. de C.V. questionnaire

**Opened:** 2026-11-05  
**Status:** `RECEIVED / DRAFT_V03_CREATED / PENDING_REVIEW` (no approved or sent form and no payment confirmed)  
**Scope:** pre-incorporation intake, quotations, required documents and form preparation for XAVA.  
**Data class:** public-safe sanitized metadata. **No original binaries or completed personal-data forms in this public repository.**

## Sources

- **DOC-005** — `REQUISITOS SOCIEDAD.doc`: notary-supplied guidance on document requirements, approximate timing, fees, tax-registration instructions and payment details. **Private original not archived here.**
- **DOC-006** — `FORMASACV.doc`: notary-supplied S.A. de C.V. questionnaire, sections A–M, including shareholder/power information. **Private original not archived here.**
- **DOC-002** — internal incorporation brief V2, summarized under `../../briefs/constitution-brief-v2-summary.md`.
- **DOC-004** — current notarial executive brief V2, summarized under `../../briefs/notary-instructions-v2-summary.md`.

These original `.doc` files and private working drafts were supplied/generated in conversations on 2026-11-05. **Long-term private storage has not been configured or verified.** The repo contains sufficient descriptions for retrieval and reconstruction of the workflow, not the binary files themselves.

## Files and roles

- [SOURCE_REVIEW.md](SOURCE_REVIEW.md) — what each notary source actually says, contradictions, and questions to clarify.
- [FORM_FIELD_MATRIX.md](FORM_FIELD_MATRIX.md) — each section/field of `FORMASACV.doc`, proposed source, current status and next validation.
- [DRAFT_V03_SUMMARY.md](DRAFT_V03_SUMMARY.md) — **current** private Word working copy, checked against received CSF/CURP PDFs, not approved/sent.
- [IDENTITY_SOURCES_REGISTER.md](IDENTITY_SOURCES_REGISTER.md) — public-safe metadata for four newly received personal documents.
- [DRAFT_V02_SUMMARY.md](DRAFT_V02_SUMMARY.md) — previous private Word working copy, superseded by V03 without submission.
- [DRAFT_V01_SUMMARY.md](DRAFT_V01_SUMMARY.md) — historical DOC-007, superseded by V02 without submission.
- [Document register](../../DOCUMENT_REGISTER.md) — canonical ID, version and lifecycle.
- [OPEN_ITEMS](../../OPEN_ITEMS.md) — one canonical task list; do not duplicate to-do ownership here.
- [FORMALIZATION_LOG](../../FORMALIZATION_LOG.md) — dated record of receipt, response, delivery, acceptance, signature.

## Operational procedure

1. Recover the sources: read this file, source review, field matrix, `../../CURRENT_STATE.md`, `../../DECISIONS.md`, and `../../SOURCE_PRECEDENCE.md`.
2. Confirm the private location and integrity of the original notary files **before editing**; if unavailable, ask for re-upload. Filename alone is not a retrievable reference.
3. Preserve `FORMASACV.doc` unchanged as the received external source. Work only in a **separate** private versioned copy (current: DOC-009 V03) locally or in approved private storage.
4. Consult the **complete private** DOC-002 and DOC-004 when available, not only their sanitized GitHub summaries. Fill fields supported by an internal approved source. Enter personal identifiers, domicile, marital details, spouse data and bank/tax information **only in the private working copy**, never in GitHub.
5. For missing/uncertain fields, use a visible private placeholder and keep a corresponding matrix status; do not infer, autofill, or silently reconcile.
6. Have founders approve the completed draft; obtain professional confirmation on legal choices (comisario, shares, paid-in capital, powers and final corporate purpose).
7. Send only the approved private document through an agreed secure channel. Do not claim delivery until there is confirmation.
8. Register version, delivery date, recipient role, reply, open observations and acceptance in `DOCUMENT_REGISTER.md` / `FORMALIZATION_LOG.md`. **Do not include private addresses or contact channels in the public log.**
9. When notary responds, update the matrix and `OPEN_ITEMS.md` first, then the corporate `CURRENT_STATE.md` if the phase actually changes.
10. Do not edit the website from notary forms; corporate information remains provisional until evidenced and appropriate for public use.

## Versioning convention

- Intake source: `DOC-005` / `DOC-006` (immutable external originals).
- Working copy: **DOC-009 CREATED** — `XAVA_FORMASACV_V03_Datos_Cotejados.docx`, status `DRAFT / NOT_APPROVED / NOT_SENT`, latest private version; DOC-008 and DOC-007 superseded without submission. Original binaries not stored in GitHub.
- New correction: increment `V02`, `V03`, etc.; do not overwrite prior sent copies.
- Delivery and feedback: log separately; `DRAFT` ≠ `APPROVED` ≠ `SENT` ≠ `ACCEPTED`.

## Privacy and retention

Public GitHub records **redacted context and process metadata only**. Because `.gitignore` is not an access-control mechanism, check the diff and filenames manually before every PR. Establish an access-controlled backup and retrieval process for originals separately; no external private archive is claimed at this time.
