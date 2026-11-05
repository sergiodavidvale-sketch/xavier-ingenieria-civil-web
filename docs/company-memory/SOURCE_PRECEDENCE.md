# XAVA — Source Precedence

Use this hierarchy whenever two sources disagree.

## 1. Official / executed sources

Highest precedence.

Examples:

- signed notarial deed;
- official denomination authorization;
- Public Registry evidence;
- SAT-issued corporate records;
- authority-issued registration evidence.

Status should normally be `EXECUTED` or `OFFICIAL`.

## 2. Advisor-validated current sources

Professional advice or drafts explicitly validated by the relevant notary, accountant, labor advisor, or other competent professional.

Use only within the advisor's scope.

## 3. Founder-approved current internal sources

Examples:

- current constitution brief;
- current notary instruction brief;
- documented founder decisions.

Status: `INTERNALLY_APPROVED`.

## 4. Repository summaries

Markdown summaries in `docs/company-memory/`.

These exist for continuity and retrieval. They should mirror higher-precedence sources and must be updated when those sources change.

## 5. Working notes / chat context / drafts

Lowest precedence.

Useful for exploration but not authoritative.

## Conflict protocol

When a conflict appears:

1. Do not silently reconcile it.
2. Identify the competing sources.
3. Apply this precedence hierarchy.
4. If neither source clearly prevails, mark the item `PENDING`.
5. Record the unresolved issue in `OPEN_ITEMS.md`.
6. Update `CURRENT_STATE.md` only after the conflict is resolved.
7. Never overwrite an official fact with a chat-derived assumption.

## Supersession rule

When a new source replaces an older one:

- keep the historical record;
- mark the old entry `SUPERSEDED` in `DOCUMENT_REGISTER.md`;
- identify the replacement;
- update affected summaries and decisions.
