# NTR-001 — Field-to-source matrix for FORMASACV.doc

**Source form:** DOC-006, `FORMASACV.doc`; keep original unchanged.  
**Prepared:** 2026-11-05.  
**Working copy:** DOC-008 V02 **created after checking the complete private briefs**, not approved, transmitted or durably archived. DOC-007 V01 is historical.  
**Purpose:** map every form section A–M to approved XAVA data, pending inputs and specific validation. Do not place completed personal-information fields here.

## Field statuses

- `DRAFT_FROM_BRIEF`: candidate from an internal XAVA source, not yet confirmed in notary's form.
- `NEEDS_PRIVATE_INPUT`: person-specific data must be obtained and entered privately.
- `NEEDS_DECISION`: founders have not approved a choice.
- `NOTARY_REVIEW`: legal/notarial interpretation or drafting required.
- `TO_CONFIRM`: internally mentioned but needs explicit confirmation for this field.
- `N/A_TO_CONFIRM`: appears in form; mark N/A only after verification.
- `READY`: validated for transfer to private working copy.
- `SENT` / `ACCEPTED`: only with delivery/acceptance evidence; never infer.

## Mapping

| ID | Form section/field | Candidate/source in XAVA | Status | Next step / owner |
|---|---|---|---|---|
| NTR001-A-01 | Applicant name | Majority partner completed internal brief; proposed as applicant in private DOC-008 | TO_CONFIRM | Confirm actual applicant for SE filing |
| NTR001-A-02 | Applicant address, CURP, RFC | CURP appears in original private DOC-002 and has been transcribed into private DOC-008. Applicant's personal address and RFC value still require cotejo; CSF inventoried as available | NEEDS_PRIVATE_INPUT | Verify personal address and transcribe RFC from CSF privately |
| NTR001-A-03 | Applicant phone/email | Brief inventory says contact details available, but values not in public summary | NEEDS_PRIVATE_INPUT | Transfer exact contact information privately |
| NTR001-B-01 | Denomination choice #1 | XAVA; recorded as preferred in DOC-002/DOC-004 and entered in DOC-008 | DRAFT_FROM_BRIEF | Confirm final order before submitting |
| NTR001-B-02 | Denomination choices #2–5 | XADA; FRADA; FRACXA; XAFRA; all provided in original DOC-002 and transferred into DOC-008 | DRAFT_FROM_BRIEF | Validate order and how to attach extra two names |
| NTR001-C-01 | Corporate domicile | Monterrey, Nuevo León is the social domicile; private DOC-004 also records a specific proposed fiscal address, transcribed to private DOC-008 | DRAFT_FROM_BRIEF | Notary validates fiscal proof and precise wording |
| NTR001-D-01 | Presence of foreigners | Not confirmed in public memory | TO_CONFIRM | Founders verify nationality privately |
| NTR001-E-01 | Corporate purpose | Civil works / engineering and associated services; DOC-002/DOC-004 | NOTARY_REVIEW | Notary drafts final clause |
| NTR001-F-01 | Total social capital | MXN 153,598.50; DOC-002/DOC-004 | NOTARY_REVIEW | Reconcile with shares and split |
| NTR001-F-02 | Capital paid in full? | No explicit final decision | NEEDS_DECISION | Founders + notary |
| NTR001-F-03 | If not fully paid: payment date, amount, schedule | Not defined | NEEDS_DECISION | Founders + notary |
| NTR001-F-04 | Notary-form minimum-payment wording | Source-specific, not independently verified | NOTARY_REVIEW | Notary confirms legal application |
| NTR001-G-01 | Sole administrator or board | Sole administrator; DOC-002/DOC-004 | DRAFT_FROM_BRIEF | Confirm for final form |
| NTR001-G-02 | Administrator's identity | Explicitly named in full private DOC-002/DOC-004 and transferred to private DOC-008 | DRAFT_FROM_BRIEF | Confirm appointment as administrator/representative |
| NTR001-G-03 | Board positions if alternative chosen | Not current intended structure | N/A_TO_CONFIRM | Do not fill unless structure changes |
| NTR001-H-01 | Manager appointment | No manager designated | TO_CONFIRM | Founders decide whether any appointment |
| NTR001-H-02 | Attorney(s)-in-fact appointment | No additional attorney designated | TO_CONFIRM | Founders/notary decide if needed |
| NTR001-H-03 | Pleitos y cobranzas | Intent discussed; legal scope not settled | NOTARY_REVIEW | Notary drafts, founders approve |
| NTR001-H-04 | Acts of administration | Sole administrator authorized internally for ordinary operations; individual signature intended, captured as proposal in DOC-008 | NOTARY_REVIEW | Notary drafts exact powers and limitations |
| NTR001-H-05 | Labor-administration powers | No definitive scope | NOTARY_REVIEW | Notary drafts and explains limits |
| NTR001-H-06 | Acts of dominio | **Not automatically approved** | NEEDS_DECISION | Founders request notary advice |
| NTR001-H-07 | Acts involving negotiable instruments | **Not automatically approved** | NEEDS_DECISION | Founders request notary advice |
| NTR001-H-08 | Open/close bank accounts | Majority partner expressly indicated for banking in DOC-002; separate signature proposed in private DOC-008 | NOTARY_REVIEW | Notary drafts banking powers |
| NTR001-H-09 | Authority to grant sub-powers | **Not automatically approved** | NEEDS_DECISION | Founders/notary |
| NTR001-H-10 | Jointly or separately | No joint signature requested for ordinary actions; DOC-002 | NOTARY_REVIEW | Confirm per power, not blanket approval |
| NTR001-I-01 | Comisario name | Not designated | NEEDS_DECISION | Founders select candidate; notary validates |
| NTR001-I-02 | Comisario RFC | Private identifier | NEEDS_PRIVATE_INPUT | Obtain only after candidate confirmed |
| NTR001-J-01 | Shareholders of other nationality | No confirmed answer in public memory | TO_CONFIRM | Founders verify |
| NTR001-K-01 | Nominal value per share | Not determined | NOTARY_REVIEW | Notary proposes viable allotment |
| NTR001-K-02 | Shares allocated per shareholder | 90/10 target; not reconciled to contributions | NOTARY_REVIEW | Founders/notary reconcile |
| NTR001-K-03 | Monetary value per shareholder | Individual amounts recorded in private original DOC-002 and transferred into private DOC-008 without changes | NOTARY_REVIEW | Reconcile contributions, share counts and 90/10 objective |
| NTR001-L-01 | Each shareholder: name, nationality, civil status/marital regime | Both full names present in original private DOC-002 and entered in private DOC-008; nationality and marital regime not expressly defined | NEEDS_PRIVATE_INPUT | Verify only missing personal fields |
| NTR001-L-02 | Birthplace/date, occupation and RFC | Private source; not in public memory | NEEDS_PRIVATE_INPUT | Each shareholder privately verifies |
| NTR001-L-03 | Address, ID, CURP, telephone/email | Both CURPs and identification availability documented in original private DOC-002; CURPs entered into private DOC-008. Individual addresses and contact values not captured in source text | NEEDS_PRIVATE_INPUT | Verify precise addresses, ID numbers, contact values privately |
| NTR001-L-04 | Spouse's name if married | Private; conditional | NEEDS_PRIVATE_INPUT | Confirm applicability and fill privately |
| NTR001-M-01 | ID both sides for both shareholders | Official IDs marked AVAILABLE in internal DOC-002 inventory | TO_CONFIRM | Check scan front/back, validity and secure attachment |
| NTR001-M-02 | Current tax-status certificates for shareholders and comisario | Founder RFC/CSF marked AVAILABLE in DOC-002; comisario not yet designated | NEEDS_PRIVATE_INPUT | Confirm updated founder PDF and later obtain comisario certificate |
| NTR001-M-03 | Updated marriage certificates where applicable | Private attachments | NEEDS_PRIVATE_INPUT | Gather securely if applicable |
| NTR001-M-04 | Spouse ID where applicable | Private attachments | NEEDS_PRIVATE_INPUT | Gather securely if applicable |
| NTR001-M-05 | Completed notary format | DOC-008 private V02 exists with brief-based values transferred; still not complete/approved/sent | NEEDS_PRIVATE_INPUT | Cotejo of truly missing personal fields; validate powers/shares/comisario before sending |

## Cross-document controls

- **Original form:** DOC-006; never rewrite its contents in-place.
- **Current internal brief:** DOC-004; notary instructions V2.
- **Corporate source:** DOC-002; constitution brief V2.
- **Authoritative legal choices:** not yet notary-validated.
- **Costs and advances:** source conflict; refer to `SOURCE_REVIEW.md` and ACT-016; not part of a finalized form field.
- **Fiscal domicile:** keep social domicile, proposed fiscal address and SAT-proof requirements distinct.

## Gate to create the first completed private Word draft

Before producing a document described as 'completed', resolve:

1. applicant/identity in private copy;
2. nationality and marital details for each shareholder;
3. approved comisario and eligibility;
4. capital/share/payment mechanics and intended powers;
5. missing evidentiary attachments.

The original full brief was revisited and **DOC-008 V02 is now the current private working draft**. Known personal identifiers already available in DOC-002 were transferred privately (not exposed here). Genuine unknowns remain subject to documentary/legal verification. V01 (DOC-007) is superseded, not sent. V02 remains `DRAFT / NOT_APPROVED / NOT_SENT`.
