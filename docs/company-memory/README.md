# XAVA — Company Memory

Persistent, **public-safe** corporate context for XAVA Ingeniería Civil. This folder exists alongside the existing React/Vite digital product; it is **not** a legal filing system, a sensitive document vault, or a substitute for original notary documents or professional legal/accounting advice.

## Current focus (2026-11-05)

Notary intake received and mapped: [**NTR-001 — Notary 20, S.A. de C.V.**](notary/NTR-001/README.md).

- DOC-005: received `REQUISITOS SOCIEDAD.doc` (external requirements/quote)
- DOC-006: received `FORMASACV.doc` (A–M form)
- DOC-004: latest XAVA executive notary brief V2, current internally; not confirmed delivered
- No filled notarial form, payment or official denomination result evidenced.

## Recovery protocol

For any task involving shareholders, capital, name authorization, notary, SAT, bank, IMSS, SIROC, public procurement or XAVA's legal status:

1. Read [CURRENT_STATE.md](CURRENT_STATE.md).
2. Read [CORPORATE_PROFILE.md](CORPORATE_PROFILE.md) and [DECISIONS.md](DECISIONS.md).
3. Read [DOCUMENT_REGISTER.md](DOCUMENT_REGISTER.md) to identify actual current editions and their origin.
4. Read [OPEN_ITEMS.md](OPEN_ITEMS.md) and [FORMALIZATION_LOG.md](FORMALIZATION_LOG.md).
5. For work on Notary 20's materials, read [NTR-001/README.md](notary/NTR-001/README.md), [SOURCE_REVIEW.md](notary/NTR-001/SOURCE_REVIEW.md), then [FORM_FIELD_MATRIX.md](notary/NTR-001/FORM_FIELD_MATRIX.md).
6. Consult the matching [brief notarial V2](briefs/notary-instructions-v2-summary.md); do not mistake them for binary originals.
7. Apply [SOURCE_PRECEDENCE.md](SOURCE_PRECEDENCE.md) and [DATA_CLASSIFICATION.md](DATA_CLASSIFICATION.md) before responding or committing.

**Never assume chat context is current.** If an original is not available in approved private storage, request that it be supplied again. Filename + Markdown summary cannot recreate an exact received `.doc`.

## Private source-data architecture

The founders approved a second **private** repository for structured personal identity/fiscal data extracted into Markdown. See [PRIVATE_MEMORY_BRIDGE.md](PRIVATE_MEMORY_BRIDGE.md) for its intended scope, source precedence and secure recovery protocol. **Now active:** the private repo was created, verified `private`, and all 13 Markdown/config files were re-fetched from GitHub on 2026-11-05. Future access requires current authorization and visibility verification. Exact personal data must never be copied here.

## Status and source meaning

- `PROPOSED` — under discussion.
- `INTERNALLY_APPROVED` — founders agreed, subject to professional checks.
- `ADVISOR_VALIDATED` — relevant advisor reviewed the precise point.
- `EXECUTED` — actually signed or carried out with evidence.
- `OFFICIAL` — evidenced by authority/fedatario.
- `RECEIVED` — third-party source delivered, no acceptance of its truth implied.
- `DRAFT`, `APPROVED_FOR_SENDING`, `SENT`, `ACCEPTED`, `SUPERSEDED` — distinct document lifecycle stages.
- `PENDING` and `BLOCKED` — action states.

Notary-supplied procedural guidance is an **external source assertion**, not verified law. Later signed/official records control when they exist; see source precedence.

## Storage model

**Public GitHub:** sanitized facts, summaries, decisions, document metadata, field IDs, statuses and action references.

**Private storage (not yet established):** unchanged external files, sensitive working copies and signed documents, ideally versioned and access controlled. Record a stable private location only after verification, never a guessed path.

Original files received in conversation are **not** automatically backed up permanently by this GitHub repository.

## Working rules

- Source documents are immutable; work on separately named private drafts.
- Every new document receives a stable `DOC-###` ID; every notary form field `NTR001-A-01` etc.
- Treat legal choices and fees as unresolved until explicitly validated.
- When a private document is created/sent/replaced, record version, event, proof and supersession without exposing identifiers.
- Protect the frontend from changes driven by provisional legal information.
