# XAVA — Data Classification for This Public Repository

This repository is public. Corporate memory must be intentionally sanitized.

## PUBLIC-SAFE

May be committed when accurate and appropriate:

- commercial brand;
- general business activities;
- non-sensitive corporate status;
- sanitized ownership proportions without unnecessary identity data;
- company-level capital planning figures;
- milestone/status information;
- public website/product decisions;
- document names and sanitized metadata;
- public-safe summaries of founder-approved decisions.

## INTERNAL-SENSITIVE — DO NOT COMMIT

Do not place in this public repository:

- CURP;
- personal RFC;
- INE/passport scans or numbers;
- signatures;
- e.firma files, certificates, passwords, private keys, or access tokens;
- personal phone numbers/emails unless intentionally public business contacts;
- private home addresses;
- bank-account information;
- personal tax records;
- identity documents;
- beneficiary information;
- payroll/personnel records with identifiers;
- unredacted notarial drafts containing personal identifiers.

## OFFICIAL DOCUMENTS — REFERENCE, DO NOT STORE BY DEFAULT

Until a specific publication decision is made, do not commit full copies of:

- signed deeds;
- powers of attorney;
- SAT certificates;
- Public Registry documents;
- employer-registration evidence;
- SIROC evidence;
- bank onboarding documents;
- government credentials/authorizations containing identifiers.

Instead, record:

- document type;
- issue/execution date;
- status;
- sanitized result;
- optional checksum/reference maintained privately.

## SECRET / CREDENTIAL

Never commit:

- passwords;
- API keys;
- private keys;
- e.firma private-key material;
- tokens;
- database credentials;
- email-provider credentials.

## Redaction rule

If a source contains both useful corporate information and sensitive data:

1. keep the original outside the public repository;
2. create a sanitized Markdown summary;
3. record the source in `DOCUMENT_REGISTER.md`;
4. omit unnecessary personal identifiers;
5. never infer redacted values.

## Stop rule

If uncertain whether a value is safe to publish, do not commit it. Record a generic placeholder/status and request a deliberate classification decision.

## Notary questionnaire / source handling

- The files `REQUISITOS SOCIEDAD.doc` and `FORMASACV.doc` may contain personal, fiscal, payment-recipient or banking information, even if the document title looks generic. **Do not commit the originals**.
- A filled form, ID scan, marriage certificate, tax-status certificate, address proof, spouse information, payment receipt or screen capture of account/CLABE details is `INTERNAL-SENSITIVE` and cannot be published here.
- Public-safe summaries may include generic fees, differences between competing quote totals, list of fields, general proposed capital and corporate type. Do not include payment account details, personal IDs or precise residence data.
- Preserve external originals unchanged. Create a separately versioned private copy for pre-filling, with `BORRADOR — NO ENVIAR` until approved.
- An upload inside a chat is not automatically a verified long-term archive. Confirm private storage before asserting that a document can be recovered in future sessions.
- `.gitignore` reduces accidental inclusion but is not a security boundary: forced commits, issues, PR bodies and screenshots can leak data. Manually inspect every change before merging.
