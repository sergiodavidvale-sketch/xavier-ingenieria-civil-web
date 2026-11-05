# XAVA — Company Memory

## Purpose

This directory is the persistent, public-safe corporate memory for XAVA Ingeniería Civil.

It exists to preserve continuity across future work sessions without depending on chat history. It does **not** replace signed legal documents, official authority records, tax records, banking records, or professional legal/accounting advice.

The repository remains primarily the digital-product repository. This directory is a separate documentation layer for corporate formation and formalization context.

## Scope

Track, in sanitized form:

- current corporate-formation status;
- approved internal decisions;
- open questions and blockers;
- formalization milestones;
- existence and status of external briefs/documents;
- summaries of current working briefs;
- links between corporate decisions and the digital product.

Do not store personal identifiers, signatures, credentials, banking data, full signed deeds, or other sensitive originals in this public repository.

## Recovery protocol

Before working on any task related to corporate formation, partners/shareholders, capital, notary work, SAT, bank onboarding, IMSS, SIROC, public procurement, legal identity, or corporate data:

1. Read `CURRENT_STATE.md`.
2. Read `CORPORATE_PROFILE.md`.
3. Read `DECISIONS.md`.
4. Read `DOCUMENT_REGISTER.md`.
5. Read `OPEN_ITEMS.md`.
6. Consult `FORMALIZATION_LOG.md` for chronology.
7. Consult the relevant summary under `briefs/`.
8. Apply `SOURCE_PRECEDENCE.md` if two sources conflict.
9. Apply `DATA_CLASSIFICATION.md` before adding or exposing information.

Do not assume chat context is the current source of truth.

## Status vocabulary

Use these states consistently:

- `PROPOSED` — under discussion.
- `INTERNALLY_APPROVED` — agreed by the founders but not yet externally validated.
- `ADVISOR_VALIDATED` — reviewed/confirmed by the relevant professional.
- `EXECUTED` — formally signed or carried out.
- `OFFICIAL` — evidenced by an authority/fedatario-issued record.
- `SUPERSEDED` — replaced by a newer source.
- `PENDING` — awaiting action or decision.

## Document classes

- **Official source:** authority/fedatario-issued evidence.
- **Approved internal source:** current founder-approved brief or instruction set.
- **Working source:** draft, proposal, or analysis.
- **Historical source:** superseded material kept only for traceability.

See `SOURCE_PRECEDENCE.md` for conflict resolution.

## Public-repository rule

This repository is public. Only public-safe, sanitized corporate context may be committed here.

Sensitive originals remain outside this repository and are referenced only through sanitized metadata in `DOCUMENT_REGISTER.md`.
