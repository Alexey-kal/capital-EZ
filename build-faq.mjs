/**
 * Builds FAQ HTML + i18n replacements from exact bilingual source content.
 * Run: node scripts/build-faq.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const faq = {
  en: {
    title: "Frequently Asked Questions",
    tabs: {
      financing: "EZ Financing",
      payments: "EZ Payments",
      outbound: "EZ Outbound",
    },
    financing: {
      intro:
        "Business financing arranged through independent partners — explore fixed-term financing, revolving credit, and sales-based advances for established Canadian businesses. Approval and every final term are determined by the applicable financing partner and written agreement.",
      cta: "Explore your financing options",
      items: [
        [
          "FIN-01",
          "What is EZ Financing?",
          "EZ Financing is a commercial-financing brokerage service. We organize the request, review the initial file for completeness, help clarify the financing objective, coordinate with independent financing partners, and present available options and key terms in writing.",
        ],
        [
          "FIN-02",
          "Is EZ Financing a direct lender?",
          "No. EZ Financing is a commercial-financing brokerage service and is not a direct lender. Any financing is offered and provided by an independent third-party partner under that partner's own underwriting, approval, documentation, funding, servicing, and collection processes.",
        ],
        [
          "FIN-03",
          "What financing structures may be available?",
          "Depending on the business and partner approval, options may include fixed-term business financing, a revolving business line of credit, or a sales-based advance, sometimes called a merchant cash advance or an advance against future business receivables. Each structure has a different cost, repayment method, duration, and use case.",
        ],
        [
          "FIN-04",
          "What types of businesses can apply?",
          "EZ Financing is designed for established Canadian businesses seeking capital for a business purpose. Businesses in many industries may request a review, but eligibility varies by partner, province, time in business, revenue and cash flow, banking activity, industry, existing obligations, credit profile, ownership, and intended use of funds. Startups and restricted industries may have fewer or no available options.",
        ],
        [
          "FIN-05",
          "How much financing may be available?",
          "Financing may be available from CAD $5,000 to more than CAD $1,000,000, depending on the file, structure, and financing partner. Current indicative ranges are CAD $5,000 to $1,000,000 for fixed-term financing, CAD $7,500 to $500,000 for a revolving line of credit, and CAD $5,000 to $300,000 for a sales-based advance. Some partners can consider higher secured amounts. Unsecured financing is capped at CAD $800,000; financing above CAD $800,000 requires a secured structure and remains subject to collateral, underwriting, and partner approval.",
        ],
        [
          "FIN-06",
          "What documents are normally required to begin?",
          "Normally, we need a completed and signed EZ Financing application, complete business bank statements for the six most recent completed months, and the current-month statement or transaction history from the first of the month through today. Depending on the file, a partner may also request processing statements, financial statements, receivables aging, tax information, existing financing statements, balance confirmations, or payout letters.",
        ],
        [
          "FIN-07",
          "Does EZ Financing charge an application fee?",
          "No. EZ Financing does not charge an application fee or a separate fee to review the request and present available options. Submitting a request does not obligate you to accept an option.",
        ],
        [
          "FIN-08",
          "Will checking my options affect my credit score?",
          "No. The initial options review uses a soft credit inquiry and does not affect the credit score.",
        ],
        [
          "FIN-09",
          "How do financing partners evaluate a request?",
          "Each partner applies its own underwriting criteria. The review may consider revenue and cash flow, account conduct, time in business, industry, credit history, ownership, existing financing, tax or legal issues, collateral, the amount and purpose requested, and the completeness and accuracy of the documents. One factor alone does not determine every decision, and EZ Financing cannot direct a partner to approve a file.",
        ],
        [
          "FIN-10",
          "Can I ask for a review if my credit is not perfect?",
          "Yes. You may ask EZ Financing to review potential options even if an owner or the business has less-than-perfect credit. Credit is only one part of the file, but it can affect eligibility, amount, pricing, security, and conditions. A review does not guarantee that a suitable option will be available.",
        ],
        [
          "FIN-11",
          "Are approval and funding guaranteed, and how long can funding take?",
          "No approval, amount, or funding date is guaranteed. Digital review can move quickly, and in some cases funds may be transferred within 24 hours after the final agreement is accepted and every condition is satisfied. Timing depends on the complete file, verifications, banking, security requirements, and the provider.",
        ],
        [
          "FIN-12",
          "Are secured and unsecured options available?",
          "Secured and unsecured structures may be available. Security, collateral, registrations, guarantees, and additional approvals depend on the applicant, amount, and partner. Higher requests — especially amounts above CAD $500,000 — may require collateral and additional review. Only the written offer and final agreement establish the actual security requirements.",
        ],
        [
          "FIN-13",
          "How does repayment work?",
          "Fixed-term financing generally uses scheduled automatic weekly payments over a stated term. A revolving line of credit lets the business draw what it needs, repay, and reuse restored availability, with charges applying to the amount drawn; weekly payments may be fixed or variable. A sales-based advance uses an agreed percentage of sales, so the dollar payment generally rises or falls with sales and the duration is estimated rather than fixed.",
        ],
        [
          "FIN-14",
          "Can financing be combined or used to refinance an existing obligation?",
          "Subject to approval, a fixed-term solution or a sales-based advance may sometimes be paired with a revolving line of credit. Fixed-term financing and a sales-based advance are not combined with each other in the same dual structure described in the current overview. A partner may also consider paying out or refinancing an existing business obligation, but it may require current statements, a balance confirmation, or a payout letter and is never guaranteed.",
        ],
        [
          "FIN-15",
          "What should I compare before accepting an offer?",
          "Review the net amount delivered and every deduction; the rate, fixed financing cost, or total purchased amount; payment amount and frequency or sales percentage; stated term or estimated duration; security and guarantees; all fees and conditions; and any prepayment, reconciliation, or adjustment provisions. Compare the complete written economics, not only the approved amount or speed. The final agreement controls.",
        ],
        [
          "FIN-16",
          "How is my information handled, and how should I send documents?",
          "Information may be shared with authorized independent financing and service partners for evaluation, verification, underwriting, processing, funding, servicing, and administration as described in the signed application and applicable privacy notices. Send bank-generated PDF documents whenever possible. Never email online-banking usernames, passwords, one-time codes, or security answers.",
        ],
        [
          "FIN-17",
          "How do I get started, and am I committed once I apply?",
          "Complete and sign the EZ Financing Business Funding Application and send the requested bank-generated documents. EZ Financing will check the file, clarify the objective, and coordinate the review. Applying does not guarantee approval and does not require you to accept an option. You are committed only if you choose to sign the applicable partner's final agreement.",
        ],
      ],
    },
    payments: {
      intro:
        "Merchant services and payment-processing options — understand how payment-acceptance needs are assessed and how independent providers approve, price, activate, and support merchant accounts. The selected provider's written agreement controls all processing services.",
      cta: "Review payment solutions",
      items: [
        [
          "PAY-01",
          "What is EZ Payments?",
          "EZ Payments helps businesses assess their payment-acceptance needs and explore solutions offered by independent payment-processing partners, based on industry, sales channels, transaction profile, current setup, and partner eligibility. We coordinate the assessment and introduction; the selected provider supplies any approved services under its own agreement.",
        ],
        [
          "PAY-02",
          "Does EZ Payments process payments directly?",
          "No. EZ Payments arranges payment-processing solutions through independent partners. EZ Payments is not a merchant acquirer or payment processor and does not itself authorize transactions, settle card payments, hold merchant transaction funds, or issue final account approvals. Those functions are performed by the selected provider, acquirer, payment networks, and participating financial institutions.",
        ],
        [
          "PAY-03",
          "What payment methods and solutions may be available?",
          "Depending on partner availability and approval, solutions may support in-person, online, mobile, mail or telephone-order, and recurring payments. Options may include countertop, wireless or mobile terminals, virtual terminals, e-commerce gateways, payment links, and selected point-of-sale integrations, as well as credit, debit, contactless, and mobile-wallet acceptance. Available brands, currencies, features, and service areas must be confirmed in the written proposal.",
        ],
        [
          "PAY-04",
          "What types of businesses can request a review?",
          "Legally operating businesses may request a review, but not every industry, product, service, sales method, or business model is eligible. The processing partner may assess the business and its owners, sales channels, volume, average ticket, delivery practices, processing history, refunds and chargebacks, banking, website, and other risk factors. Approval is not guaranteed, and transaction limits, reserves, delayed deposits, or extra documents may be required.",
        ],
        [
          "PAY-05",
          "What information is normally required?",
          "A provider will typically request the legal name, registration information, address, ownership and contact details, bank-deposit information, products or services sold, website, sales channels, monthly processing volume, average transaction value, and current processing statements, if available. Identification, a void cheque or bank confirmation, financial information, licences, and refund, cancellation, or delivery policies may also be required. The exact checklist and any identity or credit checks depend on the provider.",
        ],
        [
          "PAY-06",
          "How does EZ Payments compare options?",
          "We review the business's current setup, transaction channels, processing statements, card and transaction mix, equipment, software needs, service requirements, and contract priorities. A useful comparison considers the estimated total monthly cost, pricing model, deposit timing, hardware and integrations, support, contract term, cancellation, and risk conditions — not only a single advertised rate. Any estimate depends on the accuracy of the information supplied.",
        ],
        [
          "PAY-07",
          "How are payment-processing costs calculated?",
          "The total cost may include interchange or wholesale rates, network assessments, the provider's markup, per-transaction charges, monthly or account fees, terminal or software costs, gateway and authorization fees, PCI-related or non-compliance fees, refund or chargeback fees, and applicable taxes. Costs vary by card type, transaction method, volume, average ticket, industry, risk, and pricing model. A single rate does not necessarily represent every transaction or the complete cost.",
        ],
        [
          "PAY-08",
          "What does interchange-plus pricing mean?",
          "Interchange-plus separates underlying card-network and issuer costs from the processor's stated markup. It can make pricing easier to analyze, but the complete cost can still include network assessments, per-transaction charges, monthly fees, equipment, gateways, and other services. Review the full disclosure and a realistic estimate based on your own card mix and volume.",
        ],
        [
          "PAY-09",
          "Does EZ Payments guarantee lower rates or savings?",
          "No. A proposal may compare estimated costs using the statements and information provided by the business, but actual costs depend on card mix, volume, transaction method, refunds, chargebacks, optional services, and future fee changes. Any comparison should state its assumptions. EZ Payments does not guarantee savings, the lowest available rate, or a specific future processing cost.",
        ],
        [
          "PAY-10",
          "What should I receive and review before signing?",
          "Review the provider's complete cost-per-transaction and fee disclosures, pricing assumptions, contract term, renewal and cancellation rules, equipment and gateway agreements, deposit schedule, reserves or holds, chargeback process, PCI responsibilities, support, and data practices. Canadian merchant protections may create additional disclosure and cancellation rights in certain circumstances. The provider's final written agreement governs the service.",
        ],
        [
          "PAY-11",
          "How quickly will sales be deposited into my bank account?",
          "Deposit timing depends on the provider and acquirer, batch-closing time, transaction type, merchant bank, weekends and holidays, underwriting or risk review, and the written agreement. Refunds, chargebacks, suspected fraud, reserves, account changes, or compliance issues may delay or reduce a deposit. Only the approved agreement can confirm the expected schedule and cut-off times; EZ Payments does not guarantee same-day or next-day deposits.",
        ],
        [
          "PAY-12",
          "How long do approval, setup, and activation take?",
          "Timing depends on a complete and accurate application, the partner's underwriting and verification, the business's risk profile, equipment availability and shipping, configuration, and technical integration. EZ Payments cannot guarantee an approval or activation date. Keep the current payment solution active until the new account has final written approval and the new setup has been installed and tested.",
        ],
        [
          "PAY-13",
          "Can I use my existing terminals, point-of-sale system, or software?",
          "Possibly, but compatibility must be verified before the agreement or equipment order is finalized. Confirm connectivity, supported software, hardware ownership, rental, purchase or lease terms, installation, warranty, replacement, accessories, cancellation, and equipment-return obligations in writing. Some devices are locked or certified only for a particular provider and cannot be reused.",
        ],
        [
          "PAY-14",
          "Are contracts month-to-month, and can I switch providers?",
          "Contract terms are not universal. Month-to-month options may be available, but you must review the fixed term, automatic renewal, notice deadlines, termination charges, and any separate terminal, gateway, or equipment agreement. Canadian merchants may have additional cancellation rights under the current Code of Conduct in certain fee-change or notice situations. Coordinate the changeover, equipment return, and written cancellation confirmation to avoid interruption or duplicate fees.",
        ],
        [
          "PAY-15",
          "What is PCI DSS, and who is responsible for compliance?",
          "PCI DSS is the Payment Card Industry Data Security Standard, a baseline of technical and operational requirements for protecting payment account data. Merchants remain responsible for the validation and security steps assigned by their provider or acquirer, even when using a validated terminal or hosted solution. Requirements may include an applicable self-assessment questionnaire, scans, access controls, updates, and staff procedures. Follow the provider's current instructions and never treat a device alone as proof of complete compliance.",
        ],
        [
          "PAY-16",
          "How are business and payment data protected?",
          "Information may be shared with EZ Payments, the selected provider or acquirer, payment networks, financial institutions, and authorized service providers when needed to assess, open, support, and operate the account. Each organization's agreement and privacy notice governs its handling. Review collection purposes, access, retention, service providers, cross-border processing, and incident contacts. Never send EZ Payments full card numbers, security codes, passwords, or sensitive authentication data by ordinary email.",
        ],
        [
          "PAY-17",
          "What is a chargeback, and who decides the outcome?",
          "A chargeback begins when a cardholder disputes a transaction through the card issuer. The amount may be reversed or debited and fees may apply while the provider or acquirer administers the dispute under network rules. An authorization does not guarantee final payment. Respond through the provider within the stated deadline using complete records, such as invoices, communications, policies, and proof of delivery or service. EZ Payments cannot decide or guarantee the outcome.",
        ],
        [
          "PAY-18",
          "Can I add a card surcharge or offer a payment-method discount?",
          "Rules vary by province, card network, transaction, and business type. In Quebec, a merchant generally cannot add a fee to the advertised price because a consumer pays by debit or credit card. Different rules and network conditions may apply elsewhere, while payment-method discounts may be permitted. Obtain written confirmation from the processor and verify the current provincial and network rules before applying any fee, convenience charge, or discount.",
        ],
        [
          "PAY-19",
          "Who handles support, and how do I get started?",
          "EZ Payments can coordinate the initial review and help direct onboarding questions, but transaction authorizations, deposits, terminals, PCI validation, chargebacks, technical support, and account decisions are handled by the selected provider or acquirer. To begin, share your business profile, payment channels, expected volume and average ticket, current statements if available, equipment or integration needs, and contract priorities. Review and approve the provider's complete written proposal before changing systems.",
        ],
      ],
    },
    outbound: {
      intro:
        "Managed B2B and B2C prospecting and appointment setting — See how a dedicated B2B, B2C, or mixed outbound campaign is prepared, executed, and reported. The fixed monthly fee purchases assigned service capacity and work performed — not a guaranteed number of appointments, attendance, enrollments, sales, contracts, or revenue.",
      cta: "Plan your outbound campaign",
      items: [
        [
          "OUT-01",
          "What is EZ Outbound?",
          "EZ Outbound provides managed B2B and B2C prospecting, qualification, and appointment-setting services for eligible campaigns in Canada and the United States. We prepare the campaign, conduct structured live-agent outreach, qualify business contacts or individual consumers against client-approved criteria, confirm appointments, and deliver the appointment context directly to the client. A campaign may be B2B, B2C, or mixed, subject to campaign acceptance and compliance review.",
        ],
        [
          "OUT-02",
          "What is included in the managed service?",
          "The service includes campaign planning and B2B/B2C segmentation; targeting, territories, and operating parameters; prospect-list sourcing or preparation, deduplication, suppression, and exclusions; scripts, required disclosures, qualification or eligibility questions, and booking flow; dedicated-agent preparation, management, coaching, and live outreach; appointment confirmation; delivery through the authenticated client portal; email notifications, notes, reporting, quality review, and recordings only where lawful, enabled, and supported by the required notice or consent. The exact scope is confirmed in writing before launch.",
        ],
        [
          "OUT-03",
          "Is the outbound agent dedicated to my campaign?",
          "Yes. Each selected agent represents dedicated service capacity assigned to the client's approved campaign and managed by EZ Outbound. The agent is not an employee of the client, cannot bind the client, and is prepared, coached, and supervised by EZ Outbound. The client communicates approvals, feedback, and campaign changes through one designated EZ Outbound point of contact rather than recruiting or supervising the agent directly.",
        ],
        [
          "OUT-04",
          "What do seven active calling hours and unlimited dials mean?",
          "The standard capacity is one dedicated managed agent with seven active calling hours per day, Monday through Friday, five business days per week, scheduled within the approved local calling windows. Unlimited dials means continuous calling with no contractual per-dial cap or preset dial package for that agent. Actual activity still depends on the data, connect rates, dialing method, technical limits, qualification depth, required notes and follow-up, and campaign controls. It does not guarantee a specific number of attempts, contacts, conversations, or appointments.",
        ],
        [
          "OUT-05",
          "How much does EZ Outbound cost?",
          "The current Canadian price is CAD $3,000 per agent per month, plus applicable taxes. The current United States price is USD $2,100 per agent per month, plus applicable taxes. Fees are invoiced in advance and cover the assigned service capacity, campaign setup, execution, agent management, reporting, and optimization described in the written scope. Additional capacity, data, territories, channels, or services require written approval and pricing. The signed agreement and invoice control the applicable price and billing terms.",
        ],
        [
          "OUT-06",
          "Is there a long-term contract?",
          "No. The service is month-to-month with no minimum term, fixed-term commitment, or early-termination fee. It renews monthly. Either party may cancel in writing before the next billing date, with cancellation effective at the end of the current paid period. Once work for a monthly period begins, that period's fee is earned and non-refundable except where law requires otherwise or EZ Outbound ends the service without client default. The signed service agreement controls.",
        ],
        [
          "OUT-07",
          "Can EZ Outbound manage B2B, B2C, or mixed campaigns?",
          "Yes, subject to campaign acceptance and compliance review. A B2B campaign reaches organizations and the owners, executives, decision-makers, or relevant representatives authorized to evaluate a business offer. A B2C campaign reaches individual consumers or households within an approved audience, territory, and eligibility profile. A mixed campaign contains both journeys, which are segmented before launch. A strong fit has a clear offer, supportable claims, defined targeting and criteria, an appropriate and lawfully usable audience, sufficient meeting availability, and a client team ready to conduct meetings and follow up promptly.",
        ],
        [
          "OUT-08",
          "Can campaigns target Canada or the United States, and in which languages?",
          "B2B, B2C, or mixed campaigns may target Canada, the United States, or both, and the campaign language is confirmed during onboarding. Before launch, the written scope identifies the country, province or state, language, time zone, audience, communication channel, dialing method, data source, and applicable operating requirements. A new territory, audience, or channel may require different data, permissions, disclosures, registrations, suppression, scripts, or recording practices. EZ Outbound may pause or decline a campaign whose parameters are incomplete or unsupported.",
        ],
        [
          "OUT-09",
          "What is required before the campaign can launch?",
          "The client provides a completed and signed EZ Outbound Service Application; accurate business, offer, and campaign information; a B2B, B2C, or mixed designation; approved audience, territories, objectives, qualification or eligibility criteria, exclusions, claims, and disclosures; a validated data source and lawful-use basis; permission or consent records where required; suppression instructions; meeting availability, booking method, time zones, recording approach, escalation contacts, and required system access. The written campaign scope, script, questions, calling windows, agent capacity, delivery workflow, and responsibilities must be approved before outreach begins.",
        ],
        [
          "OUT-10",
          "Who provides the prospect list?",
          "EZ Outbound can source or prepare a prospect list, remove duplicates, and apply approved exclusions and suppression instructions as part of the managed service. If the client supplies data, the client must be authorized to provide and use it and must disclose the source, audience, number types, restrictions, permissions or consents, and current internal suppression records where required. B2C data receives additional review because consumer calling can depend on do-not-call status, consent, calling method, territory, and sector. No list source guarantees that every record is complete, current, reachable, eligible, or legally usable.",
        ],
        [
          "OUT-11",
          "Who approves the script and qualification criteria?",
          "The client approves the campaign type, offer, pricing and claims, target audience and territories, script, required disclosures, qualification or eligibility questions, exclusions, booking flow, and definition of a qualified appointment. EZ Outbound helps structure consumer-appropriate or business-appropriate messaging, prepares the agent, and may recommend changes based on quality review and results. EZ Outbound may refuse or pause instructions or campaigns that appear unlawful, misleading, discriminatory, abusive, unsupported, incomplete, non-compliant, or outside the written scope.",
        ],
        [
          "OUT-12",
          "What counts as a Qualified Lead – Confirmed Appointment?",
          "This is the universal client-facing status for accepted B2B and B2C appointments. The prospect must match the approved targeting and qualification criteria. In B2B, the contact must be the agreed decision-maker or relevant representative; in B2C, the contact must be the intended individual and meet the approved eligibility rules. The prospect must understand the company and meeting purpose, show relevant interest, and explicitly agree to a specific date and time. The time zone and required contact details must be confirmed, the appointment cannot be a duplicate, the prospect must not appear on an applicable exclusion or suppression list, and the notes must support the qualification and context. No agreed date and time means no delivered appointment.",
        ],
        [
          "OUT-13",
          "How many appointments should I expect, and are results guaranteed?",
          "After campaign preparation and ramp-up, the internal operating objective is at least two Qualified Leads – Confirmed Appointments per business day worked, per agent. This is a performance objective, not a guaranteed minimum, and B2B and B2C performance can differ. EZ Outbound does not guarantee attempts, contacts, conversations, appointment volume, qualification, attendance, sales, contracts, enrollments, revenue, conversion rate, or return on investment. Results depend on the campaign type, offer, price, market, demand, data quality and provenance, consent status, connect rates, criteria, seasonality, compliance constraints, meeting availability, and the client's sales process and follow-up.",
        ],
        [
          "OUT-14",
          "What happens if a prospect cancels or does not attend?",
          "Prospect attendance is not guaranteed. EZ Outbound confirms the date, time, time zone, contact, and meeting purpose at booking, but a B2B or B2C prospect may later reschedule, cancel, or fail to attend for reasons outside EZ Outbound's control. The client should review each delivery promptly, send calendar invitations or reminders as agreed, attend on time, and provide specific feedback. Any re-contact or replacement approach must be stated in the written campaign scope; it should not be assumed.",
        ],
        [
          "OUT-15",
          "Does EZ Outbound conduct the meeting, complete an enrollment, collect payment, or close the sale?",
          "No. EZ Outbound performs prospecting, live qualification, and confirmed appointment setting only. The client remains responsible for the meeting, presentation, technical or commercial questions, follow-up, proposals, negotiation, enrollment, contracting, payment collection, final purchasing decisions, fulfillment, cancellations, refunds, and ongoing service. EZ Outbound does not request or retain prospect card or banking information, process transactions, promise a sale, or bind the client to any terms. Any sale, enrollment, agreement, payment, cancellation, or refund is handled directly between the client and the prospect through client-controlled channels.",
        ],
        [
          "OUT-16",
          "What is delivered with each confirmed appointment?",
          "The standard delivery includes the campaign type; only the business, contact, or consumer information required for the approved purpose; qualification notes; the confirmed meeting purpose, date, time, and applicable time zone; the assigned-agent name; and the delivery timestamp. The appointment is added to the authenticated client portal and an email notification is sent. An MP3 is included only when recording is lawful, enabled for the campaign, and the notice and consent required in the applicable jurisdiction have been obtained. Notes remain available whether or not recording is enabled.",
        ],
        [
          "OUT-17",
          "Can EZ Outbound work with my CRM or calendar?",
          "The standard workflow uses the access-controlled EZ Outbound client portal and a confirmed booking method. Calendar or CRM access may be used when approved and technically supported. Direct integrations are not automatic and must be confirmed during onboarding, including user permissions, fields, ownership, security, testing, and any added cost. The client must maintain accurate availability and restrict access to authorized users.",
        ],
        [
          "OUT-18",
          "Does the standard service include email, text messages, robocalls, or AI-generated calls?",
          "No. The standard service is managed live-agent B2B and B2C outbound calling. Email campaigns, text messaging, prerecorded calls, automated marketing, and artificial or AI-generated voice calls are not included by default. Any additional channel or dialing method requires separate written approval, a confirmed scope and price where applicable, and verification of the consent, identification, disclosure, unsubscribe, suppression, and recordkeeping requirements that apply to the audience and territory. Automated, prerecorded, artificial-voice, or promotional-text activity is used only when the required documented consent and other conditions are satisfied.",
        ],
        [
          "OUT-19",
          "How does EZ Outbound handle outreach compliance, call recording, and data?",
          "Each party must follow the requirements applicable to its role, audience, territory, channel, number type, sector, and dialing method. The client supplies lawfully usable data, accurate and supportable claims, required permissions or consents, restrictions, and suppression records. EZ Outbound manages the registrations, caller identification, permitted local calling windows, screening, do-not-call requests, escalation, agent procedures, and campaign records assigned to its role. B2C campaigns require enhanced review of list provenance, consent status, suppression, disclosures, dialing practices, recording, and jurisdiction-specific rules. A B2B purpose is not a blanket exemption from telemarketing, privacy, recording, or electronic-message requirements. Calls are recorded only when lawful, enabled for the campaign, and supported by the required notice or consent.",
        ],
        [
          "OUT-20",
          "How are campaign information and prospect data protected after service ends?",
          "Business-contact and consumer information is delivered through the authenticated client portal for the approved campaign purpose. Access is limited to authorized personnel, authorized client users, and safeguarded service providers involved in delivery. Portal credentials, personal information, notes, and recordings must not be shared with unauthorized users. At the end of service, EZ Outbound returns or securely deletes personal information as the client directs unless retention is required by law. If the client gives no direction, the current service agreement provides for secure deletion within 30 days, subject to legally required retention.",
        ],
        [
          "OUT-21",
          "How do I get started?",
          "Complete and sign the EZ Outbound Service Application, then provide the approved B2B, B2C, or mixed campaign type; offer; audience; territories; objectives; claims and disclosures; qualification or eligibility criteria; data source and lawful-use basis; required permission or consent records; exclusions and suppression instructions; availability; booking workflow; time zones; recording parameters; escalation process; and point of contact. EZ Outbound will prepare the written campaign scope, list, adapted script, portal, and dedicated agent. Launch timing depends on campaign acceptance and completion of the required approvals, data, payment, access, and compliance controls.",
        ],
      ],
    },
    disclaimer:
      "EZ Capital arranges business financing and payment-processing solutions through independent partners. It is not a direct lender, merchant acquirer, or payment processor. EZ Outbound provides managed B2B and B2C prospecting and appointment-setting services. Approvals, terms, and campaign results vary.",
  },
  fr: {
    title: "Foire aux questions",
    tabs: {
      financing: "EZ Financing",
      payments: "EZ Payments",
      outbound: "EZ Outbound",
    },
    financing: {
      intro:
        "Financement d'entreprise facilité auprès de partenaires indépendants — explorez le financement à terme, le crédit renouvelable et les avances sur ventes futures pour les entreprises canadiennes établies. L'approbation et toutes les modalités finales sont déterminées par le partenaire financier concerné et son entente écrite.",
      cta: "Explorer vos options de financement",
      items: [
        [
          "FIN-01",
          "Qu'est-ce qu'EZ Financing?",
          "EZ Financing est un service de courtage en financement commercial. Nous organisons la demande, vérifions si le dossier initial est complet, aidons à préciser l'objectif de financement, coordonnons l'analyse auprès de partenaires financiers indépendants et présentons par écrit les options disponibles et leurs principales modalités.",
        ],
        [
          "FIN-02",
          "EZ Financing est-elle un prêteur direct?",
          "Non. EZ Financing agit comme service de courtage en financement commercial et n'est pas un prêteur direct. Tout financement est offert et fourni par un partenaire tiers indépendant selon ses propres processus d'analyse, d'approbation, de documentation, de décaissement, d'administration et de recouvrement.",
        ],
        [
          "FIN-03",
          "Quelles structures de financement peuvent être offertes?",
          "Selon l'entreprise et l'approbation du partenaire, les options peuvent comprendre un financement d'entreprise à terme, une marge de crédit d'entreprise renouvelable ou une avance sur ventes futures, parfois appelée avance de fonds aux commerçants ou avance sur les créances commerciales futures. Chaque structure comporte un coût, un mode de versement, une durée et une utilisation qui lui sont propres.",
        ],
        [
          "FIN-04",
          "Quelles entreprises peuvent présenter une demande?",
          "EZ Financing s'adresse aux entreprises canadiennes établies qui recherchent des fonds à des fins commerciales. Des entreprises de nombreux secteurs peuvent demander une analyse, mais l'admissibilité varie selon le partenaire, la province, les années d'activité, les revenus et les flux de trésorerie, l'activité bancaire, le secteur, les obligations existantes, le profil de crédit, l'actionnariat et l'utilisation prévue. Les entreprises en démarrage et certains secteurs restreints peuvent avoir peu ou pas d'options.",
        ],
        [
          "FIN-05",
          "Quels montants de financement peuvent être offerts?",
          "Le financement peut aller de 5 000 $ CA à plus de 1 000 000 $ CA, selon le dossier, la structure et le partenaire financier. Les fourchettes indicatives actuelles sont de 5 000 $ CA à 1 000 000 $ CA pour le financement à terme, de 7 500 $ CA à 500 000 $ CA pour la marge de crédit renouvelable et de 5 000 $ CA à 300 000 $ CA pour l'avance sur ventes futures. Certains partenaires peuvent considérer des montants plus élevés dans le cadre d'une structure garantie. Le financement non garanti est plafonné à 800 000 $ CA; tout financement supérieur à 800 000 $ CA exige une structure garantie et demeure assujetti aux garanties disponibles, à l'analyse et à l'approbation du partenaire.",
        ],
        [
          "FIN-06",
          "Quels documents sont normalement requis pour commencer?",
          "Nous demandons normalement la demande EZ Financing remplie et signée, les relevés bancaires d'entreprise complets des six derniers mois terminés ainsi que le relevé du mois courant ou l'historique des transactions du premier du mois à aujourd'hui. Selon le dossier, un partenaire peut aussi demander des relevés de traitement, des états financiers, une balance âgée des comptes clients, des renseignements fiscaux, des relevés de financement existant, une confirmation de solde ou une lettre de remboursement.",
        ],
        [
          "FIN-07",
          "EZ Financing facture-t-elle des frais de demande?",
          "Non. EZ Financing ne facture aucun frais de demande ni frais distinct pour analyser la demande et présenter les options disponibles. Le dépôt d'une demande ne vous oblige pas à accepter une option.",
        ],
        [
          "FIN-08",
          "La vérification de mes options aura-t-elle une incidence sur ma cote de crédit?",
          "Non. L'analyse initiale des options utilise une vérification de crédit sans incidence et n'affecte pas la cote de crédit.",
        ],
        [
          "FIN-09",
          "Comment les partenaires financiers évaluent-ils une demande?",
          "Chaque partenaire applique ses propres critères d'analyse. Il peut examiner les revenus et les flux de trésorerie, la tenue du compte, les années d'activité, le secteur, les antécédents de crédit, l'actionnariat, le financement existant, les enjeux fiscaux ou juridiques, les garanties, le montant et l'utilisation demandés ainsi que l'exactitude des documents. Un seul facteur ne détermine pas toutes les décisions, et EZ Financing ne peut imposer une approbation au partenaire.",
        ],
        [
          "FIN-10",
          "Puis-je demander une analyse si mon crédit n'est pas parfait?",
          "Oui. Vous pouvez demander à EZ Financing d'examiner les options potentielles même si le crédit du propriétaire ou de l'entreprise est imparfait. Le crédit n'est qu'un élément du dossier, mais il peut avoir une incidence sur l'admissibilité, le montant, la tarification, les garanties et les conditions. L'analyse ne garantit pas qu'une option appropriée sera disponible.",
        ],
        [
          "FIN-11",
          "L'approbation et le décaissement sont-ils garantis, et quel est le délai?",
          "Aucune approbation, aucun montant et aucune date de décaissement ne sont garantis. L'analyse numérique peut être rapide et, dans certains cas, les fonds peuvent être transférés dans les 24 heures suivant l'acceptation de l'entente finale et le respect de toutes les conditions. Le délai dépend du dossier complet, des vérifications, des services bancaires, des garanties et du fournisseur.",
        ],
        [
          "FIN-12",
          "Des options garanties et non garanties sont-elles offertes?",
          "Des structures garanties et non garanties peuvent être offertes. Les sûretés, garanties, inscriptions, cautionnements et approbations additionnelles dépendent du demandeur, du montant et du partenaire. Les demandes plus élevées — particulièrement au-delà de 500 000 $ CA — peuvent exiger des garanties et une analyse supplémentaire. Seules l'offre écrite et l'entente finale établissent les exigences réelles.",
        ],
        [
          "FIN-13",
          "Comment fonctionnent les versements?",
          "Le financement à terme prévoit généralement des versements automatiques hebdomadaires sur une durée établie. La marge de crédit renouvelable permet de retirer le montant requis, de le rembourser et de réutiliser la disponibilité rétablie; les frais s'appliquent au montant utilisé et les versements hebdomadaires peuvent être fixes ou variables. L'avance sur ventes futures utilise un pourcentage convenu des ventes; le montant versé varie donc avec les ventes et la durée est estimative plutôt que fixe.",
        ],
        [
          "FIN-14",
          "Peut-on combiner des solutions ou refinancer une obligation existante?",
          "Sous réserve d'approbation, un financement à terme ou une avance sur ventes futures peut parfois être jumelé à une marge de crédit renouvelable. Le financement à terme et l'avance sur ventes futures ne sont pas jumelés entre eux dans la même structure double décrite dans la présentation actuelle. Un partenaire peut aussi envisager de rembourser ou de refinancer une obligation d'entreprise existante, mais il peut exiger des relevés, une confirmation de solde ou une lettre de remboursement, et aucune approbation n'est garantie.",
        ],
        [
          "FIN-15",
          "Que dois-je comparer avant d'accepter une offre?",
          "Examinez le montant net versé et chaque déduction; le taux, le coût fixe ou le montant total acheté; le montant et la fréquence des versements ou le pourcentage des ventes; la durée prévue ou estimative; les sûretés et cautionnements; tous les frais et toutes les conditions; ainsi que les dispositions de remboursement anticipé, de rapprochement ou d'ajustement. Comparez l'ensemble des modalités écrites, et non seulement le montant approuvé ou la rapidité. L'entente finale prévaut.",
        ],
        [
          "FIN-16",
          "Comment mes renseignements sont-ils traités et comment dois-je transmettre mes documents?",
          "Les renseignements peuvent être communiqués aux partenaires financiers et fournisseurs de services indépendants autorisés aux fins d'évaluation, de vérification, d'analyse, de traitement, de financement, d'administration et de gestion, comme le prévoient la demande signée et les avis de confidentialité applicables. Transmettez des documents PDF générés par la banque lorsque possible. N'envoyez jamais par courriel vos identifiants bancaires, mots de passe, codes à usage unique ou réponses de sécurité.",
        ],
        [
          "FIN-17",
          "Comment puis-je commencer, et suis-je engagé dès le dépôt de la demande?",
          "Remplissez et signez la demande de financement d'entreprise EZ Financing, puis transmettez les documents bancaires demandés. EZ Financing vérifiera le dossier, précisera l'objectif et coordonnera l'analyse. Le dépôt d'une demande ne garantit pas une approbation et ne vous oblige pas à accepter une option. Vous êtes engagé uniquement si vous choisissez de signer l'entente finale du partenaire concerné.",
        ],
      ],
    },
    payments: {
      intro:
        "Services aux commerçants et solutions de traitement des paiements — comprenez comment les besoins d'acceptation des paiements sont analysés et comment les fournisseurs indépendants approuvent, tarifient, activent et soutiennent les comptes commerçants. L'entente écrite du fournisseur retenu régit tous les services de traitement.",
      cta: "Examiner les solutions de paiement",
      items: [
        [
          "PAY-01",
          "Qu'est-ce qu'EZ Payments?",
          "EZ Payments aide les entreprises à analyser leurs besoins en matière d'acceptation des paiements et à explorer les solutions de partenaires indépendants selon le secteur, les canaux de vente, le profil transactionnel, la configuration actuelle et les critères du partenaire. Nous coordonnons l'évaluation et la mise en relation; le fournisseur retenu fournit les services approuvés conformément à sa propre entente.",
        ],
        [
          "PAY-02",
          "EZ Payments traite-t-elle directement les paiements?",
          "Non. EZ Payments facilite l'accès à des solutions de traitement des paiements par l'intermédiaire de partenaires indépendants. EZ Payments n'est ni un acquéreur ni un processeur de paiements et n'autorise pas elle-même les transactions, ne règle pas les paiements par carte, ne détient pas les fonds transactionnels du commerçant et ne rend pas les décisions finales d'approbation. Ces fonctions relèvent du fournisseur retenu, de l'acquéreur, des réseaux de paiement et des institutions financières participantes.",
        ],
        [
          "PAY-03",
          "Quels modes de paiement et quelles solutions peuvent être offerts?",
          "Selon les solutions du partenaire et l'approbation obtenue, il peut être possible d'accepter les paiements en personne, en ligne, sur appareil mobile, par courrier ou téléphone ainsi que les paiements récurrents. Les options peuvent comprendre des terminaux fixes, sans fil ou mobiles, un terminal virtuel, une passerelle de commerce électronique, des liens de paiement et certaines intégrations de point de vente, ainsi que les paiements par crédit, débit, sans contact et portefeuille mobile. Les marques, devises, fonctionnalités et territoires doivent être confirmés dans la proposition écrite.",
        ],
        [
          "PAY-04",
          "Quelles entreprises peuvent demander une analyse?",
          "Toute entreprise exploitée légalement peut demander une analyse, mais certains secteurs, produits, services, modes de vente ou modèles d'affaires peuvent ne pas être admissibles. Le partenaire peut examiner l'entreprise et ses propriétaires, ses canaux, ses volumes, le montant moyen, la livraison, l'historique de traitement, les remboursements et rétrofacturations, les renseignements bancaires, le site Web et d'autres facteurs de risque. L'approbation n'est pas garantie; des limites, une réserve, un délai de dépôt ou des documents supplémentaires peuvent s'appliquer.",
        ],
        [
          "PAY-05",
          "Quels renseignements sont habituellement requis?",
          "Le fournisseur demande généralement la dénomination sociale, les renseignements d'immatriculation, l'adresse, les coordonnées des propriétaires, les renseignements bancaires pour les dépôts, les produits ou services vendus, le site Web, les canaux de vente, le volume mensuel, le montant moyen et les relevés du processeur actuel, s'ils sont disponibles. Une pièce d'identité, un spécimen de chèque ou une confirmation bancaire, des renseignements financiers, des permis et les politiques de remboursement, d'annulation ou de livraison peuvent aussi être exigés. La liste exacte et toute vérification d'identité ou de crédit dépendent du fournisseur.",
        ],
        [
          "PAY-06",
          "Comment EZ Payments compare-t-elle les options?",
          "Nous examinons la configuration actuelle, les canaux de transaction, les relevés de traitement, la composition des cartes et transactions, le matériel, les logiciels, le service requis et les priorités contractuelles. Une comparaison utile tient compte du coût mensuel total estimatif, du modèle tarifaire, du délai de dépôt, du matériel et des intégrations, du soutien, de la durée, de l'annulation et des conditions de risque — pas seulement d'un taux publicitaire. Toute estimation dépend de l'exactitude des renseignements fournis.",
        ],
        [
          "PAY-07",
          "Comment les coûts de traitement des paiements sont-ils calculés?",
          "Le coût global peut comprendre les taux d'interchange ou de gros, les frais des réseaux, la marge du fournisseur, les frais par transaction, les frais mensuels ou de compte, le terminal ou le logiciel, la passerelle et l'autorisation, les frais liés à PCI DSS ou à la non-conformité, les remboursements ou rétrofacturations et les taxes applicables. Les coûts varient selon le type de carte, le mode de transaction, le volume, le montant moyen, le secteur, le risque et le modèle tarifaire. Un seul taux ne représente pas nécessairement toutes les transactions ni le coût complet.",
        ],
        [
          "PAY-08",
          "Que signifie la tarification coût d'interchange plus marge?",
          "Cette tarification sépare les coûts sous-jacents des émetteurs et réseaux de cartes de la marge déclarée du processeur. Elle peut faciliter l'analyse, mais le coût complet peut quand même comprendre des frais de réseau, des frais par transaction, des frais mensuels, le matériel, les passerelles et d'autres services. Examinez la divulgation complète et une estimation réaliste fondée sur votre propre composition de cartes et votre volume.",
        ],
        [
          "PAY-09",
          "EZ Payments garantit-elle une réduction des taux ou des économies?",
          "Non. Une proposition peut comparer des coûts estimatifs à partir des relevés et renseignements fournis par l'entreprise, mais les coûts réels dépendent de la composition des cartes, du volume, du mode de transaction, des remboursements, des rétrofacturations, des services optionnels et des modifications futures de frais. Toute comparaison doit préciser ses hypothèses. EZ Payments ne garantit ni des économies, ni le taux le plus bas, ni un coût futur précis.",
        ],
        [
          "PAY-10",
          "Quels renseignements dois-je recevoir et examiner avant de signer?",
          "Examinez les divulgations complètes du coût par transaction et des frais, les hypothèses de tarification, la durée, le renouvellement et l'annulation, les ententes relatives au matériel et à la passerelle, le calendrier des dépôts, les réserves ou retenues, les rétrofacturations, les responsabilités PCI, le soutien et les pratiques de gestion des données. Les protections canadiennes peuvent créer des droits additionnels de divulgation et d'annulation dans certaines situations. L'entente écrite finale du fournisseur régit le service.",
        ],
        [
          "PAY-11",
          "Dans quel délai les ventes seront-elles déposées dans mon compte bancaire?",
          "Le délai dépend du fournisseur et de l'acquéreur, de l'heure de fermeture du lot, du type de transaction, de l'institution financière du commerçant, des fins de semaine et jours fériés, des vérifications de risque et de l'entente écrite. Les remboursements, rétrofacturations, soupçons de fraude, réserves, changements au compte ou problèmes de conformité peuvent retarder ou réduire un dépôt. Seule l'entente approuvée peut confirmer le calendrier et les heures limites; EZ Payments ne garantit pas un dépôt le jour même ou le jour ouvrable suivant.",
        ],
        [
          "PAY-12",
          "Combien de temps faut-il pour l'approbation, la configuration et l'activation?",
          "Le délai dépend d'une demande complète et exacte, de l'analyse et des vérifications du partenaire, du profil de risque, de la disponibilité et de la livraison du matériel, de la configuration et des intégrations techniques. EZ Payments ne peut garantir une date d'approbation ou d'activation. Conservez votre solution actuelle jusqu'à l'approbation finale écrite, puis jusqu'à l'installation et à la vérification du nouveau système.",
        ],
        [
          "PAY-13",
          "Puis-je conserver mes terminaux, mon système de point de vente ou mes logiciels actuels?",
          "Possiblement, mais la compatibilité doit être vérifiée avant de conclure l'entente ou de commander le matériel. Confirmez par écrit la connectivité, les logiciels pris en charge, la propriété du matériel, la location, l'achat ou le financement, l'installation, la garantie, le remplacement, les accessoires, l'annulation et le retour du matériel. Certains appareils sont verrouillés ou certifiés uniquement pour un fournisseur et ne peuvent être réutilisés.",
        ],
        [
          "PAY-14",
          "Les ententes sont-elles mensuelles et puis-je changer de fournisseur?",
          "Les modalités ne sont pas uniformes. Des options mensuelles peuvent être offertes, mais il faut vérifier la durée fixe, le renouvellement automatique, les délais de préavis, les frais de résiliation et toute entente distincte relative au terminal, à la passerelle ou au matériel. Les commerçants canadiens peuvent bénéficier de droits additionnels d'annulation en vertu du Code actuel dans certaines situations liées aux frais ou aux avis. Coordonnez la transition, le retour du matériel et la confirmation écrite afin d'éviter une interruption ou une double facturation.",
        ],
        [
          "PAY-15",
          "Qu'est-ce que la norme PCI DSS et qui est responsable de la conformité?",
          "La norme PCI DSS établit des exigences techniques et opérationnelles de base pour protéger les données de paiement. Le commerçant demeure responsable des validations et mesures de sécurité attribuées par son fournisseur ou son acquéreur, même lorsqu'il utilise un terminal validé ou une solution hébergée. Les exigences peuvent comprendre un questionnaire d'autoévaluation, des analyses, des contrôles d'accès, des mises à jour et des procédures pour le personnel. Suivez les directives actuelles du fournisseur et ne considérez jamais un appareil comme une preuve de conformité complète.",
        ],
        [
          "PAY-16",
          "Comment les renseignements de l'entreprise et les données de paiement sont-ils protégés?",
          "Les renseignements peuvent être communiqués à EZ Payments, au fournisseur ou à l'acquéreur retenu, aux réseaux de paiement, aux institutions financières et aux prestataires autorisés lorsque cela est nécessaire pour évaluer, ouvrir, soutenir et exploiter le compte. L'entente et l'avis de confidentialité de chaque organisation régissent sa gestion. Examinez les fins, l'accès, la conservation, les fournisseurs, les traitements hors territoire et les contacts en cas d'incident. Ne transmettez jamais à EZ Payments un numéro de carte complet, un code de sécurité, un mot de passe ou une donnée d'authentification sensible par courriel ordinaire.",
        ],
        [
          "PAY-17",
          "Qu'est-ce qu'une rétrofacturation et qui prend la décision?",
          "Une rétrofacturation commence lorsqu'un titulaire conteste une transaction auprès de l'émetteur de sa carte. Le montant peut être annulé ou débité et des frais peuvent s'appliquer pendant que le fournisseur ou l'acquéreur traite le différend selon les règles du réseau. Une autorisation ne garantit pas le paiement final. Répondez par l'intermédiaire du fournisseur dans le délai indiqué avec des dossiers complets, notamment les factures, communications, politiques et preuves de livraison ou de service. EZ Payments ne peut rendre ni garantir la décision.",
        ],
        [
          "PAY-18",
          "Puis-je ajouter des frais de carte ou offrir un rabais selon le mode de paiement?",
          "Les règles varient selon la province, le réseau, la transaction et le type d'entreprise. Au Québec, un commerçant ne peut généralement pas ajouter de frais au prix annoncé parce qu'un consommateur paie par carte de débit ou de crédit. Des règles et conditions différentes peuvent s'appliquer ailleurs, tandis que des rabais selon le mode de paiement peuvent être permis. Obtenez une confirmation écrite du processeur et vérifiez les règles provinciales et de réseau en vigueur avant d'appliquer des frais, frais de commodité ou rabais.",
        ],
        [
          "PAY-19",
          "Qui offre le soutien et comment puis-je commencer?",
          "EZ Payments peut coordonner l'analyse initiale et orienter les questions d'intégration, mais les autorisations, dépôts, terminaux, validations PCI, rétrofacturations, questions techniques et décisions relatives au compte relèvent du fournisseur ou de l'acquéreur retenu. Pour commencer, transmettez votre profil d'entreprise, vos canaux de paiement, le volume et le montant moyen prévus, vos relevés actuels s'ils sont disponibles, vos besoins de matériel ou d'intégration et vos priorités contractuelles. Examinez et approuvez la proposition écrite complète avant de changer de système.",
        ],
      ],
    },
    outbound: {
      intro:
        "Prospection B2B et B2C gérée et prise de rendez-vous — Découvrez comment une campagne de prospection B2B, B2C ou mixte, attitrée et gérée, est préparée, exécutée et suivie. Les honoraires mensuels fixes rémunèrent la capacité de service attitrée et les travaux réalisés — et non un nombre garanti de rendez-vous, de présences, d'inscriptions, de ventes, de contrats ou de revenus.",
      cta: "Planifier votre campagne de prospection",
      items: [
        [
          "OUT-01",
          "Qu'est-ce qu'EZ Outbound?",
          "EZ Outbound fournit des services gérés de prospection B2B et B2C, de qualification et de prise de rendez-vous pour les campagnes admissibles au Canada et aux États-Unis. Nous préparons la campagne, effectuons des appels structurés par un agent en direct, qualifions des contacts d'entreprise ou des consommateurs selon les critères approuvés par le client, confirmons les rendez-vous et transmettons directement leur contexte au client. Une campagne peut être B2B, B2C ou mixte, sous réserve de son acceptation et de l'analyse de conformité.",
        ],
        [
          "OUT-02",
          "Qu'est-ce qui est inclus dans le service géré?",
          "Le service comprend la planification et la segmentation B2B/B2C; le ciblage, les territoires et les paramètres d'exploitation; la recherche ou la préparation des listes, la déduplication, les suppressions et les exclusions; le script, les mentions requises, les questions de qualification ou d'admissibilité et la réservation; la préparation, la gestion, l'encadrement et les appels de l'agent attitré; la confirmation des rendez-vous; la livraison dans le portail client authentifié; les avis par courriel, les notes, les rapports, le contrôle de la qualité et les enregistrements seulement lorsqu'ils sont permis, activés et accompagnés de l'avis ou du consentement requis. La portée exacte est confirmée par écrit avant le lancement.",
        ],
        [
          "OUT-03",
          "L'agent de prospection est-il attitré à ma campagne?",
          "Oui. Chaque agent choisi représente une capacité de service attitrée à la campagne approuvée du client et gérée par EZ Outbound. L'agent n'est pas un employé du client, ne peut engager le client et est préparé, encadré et supervisé par EZ Outbound. Le client transmet les approbations, la rétroaction et les modifications par l'intermédiaire d'un interlocuteur EZ Outbound désigné, plutôt que de recruter ou de superviser l'agent directement.",
        ],
        [
          "OUT-04",
          "Que signifient les sept heures actives d'appels et les appels illimités?",
          "La capacité standard comprend un agent attitré et géré qui effectue sept heures actives d'appels par jour, du lundi au vendredi, cinq jours ouvrables par semaine, dans les plages locales approuvées de la campagne. Les appels illimités désignent des appels continus, sans tarif par appel, plafond contractuel ni forfait prédéfini pour cet agent. L'activité réelle dépend toutefois des données, de la joignabilité, de la méthode de composition, des limites techniques, de la profondeur de qualification, des notes et suivis requis ainsi que des contrôles de campagne. Aucun nombre précis de tentatives, de contacts, de conversations ou de rendez-vous n'est garanti.",
        ],
        [
          "OUT-05",
          "Combien coûte EZ Outbound?",
          "Le tarif canadien actuel est de 3 000 $ CA par agent et par mois, plus les taxes applicables. Le tarif américain actuel est de 2 100 $ US par agent et par mois, plus les taxes applicables. Les honoraires sont facturés à l'avance et couvrent la capacité de service attitrée, la configuration de la campagne, l'exécution, la gestion de l'agent, les rapports et l'optimisation prévus dans la portée écrite. Toute capacité, donnée, tout territoire, canal ou service supplémentaire exige une approbation et une tarification écrites. L'entente signée et la facture établissent le prix et les modalités applicables.",
        ],
        [
          "OUT-06",
          "Y a-t-il un contrat à long terme?",
          "Non. Le service est mensuel, sans durée minimale, sans engagement à durée déterminée et sans frais de résiliation anticipée. Il se renouvelle chaque mois. Chaque partie peut résilier par écrit avant la prochaine date de facturation, et la résiliation prend effet à la fin de la période payée. Dès que les travaux d'une période commencent, les honoraires sont acquis et non remboursables, sauf exigence légale ou fin du service par EZ Outbound sans défaut du client. L'entente signée prévaut.",
        ],
        [
          "OUT-07",
          "EZ Outbound peut-elle gérer des campagnes B2B, B2C ou mixtes?",
          "Oui, sous réserve de l'acceptation de la campagne et de l'analyse de conformité. Une campagne B2B vise des organisations ainsi que les propriétaires, dirigeants, décideurs ou représentants pertinents autorisés à évaluer une offre commerciale. Une campagne B2C vise des consommateurs ou des ménages compris dans un public, un territoire et un profil d'admissibilité approuvés. Une campagne mixte comprend les deux parcours, qui sont segmentés avant le lancement. Une campagne bien adaptée repose sur une offre claire, des déclarations justifiables, un ciblage et des critères définis, un public approprié et légalement utilisable, des disponibilités suffisantes et une équipe cliente prête à mener les rencontres et les suivis rapidement.",
        ],
        [
          "OUT-08",
          "Les campagnes peuvent-elles viser le Canada ou les États-Unis, et dans quelles langues?",
          "Les campagnes B2B, B2C ou mixtes peuvent viser le Canada, les États-Unis ou les deux, et la langue est confirmée pendant l'intégration. Avant le lancement, la portée écrite précise le pays, la province ou l'État, la langue, le fuseau horaire, le public, le canal, la méthode de composition, la provenance des données et les paramètres applicables. Un nouveau territoire, public ou canal peut exiger des données, permissions, mentions, inscriptions, suppressions, scripts ou pratiques d'enregistrement différents. EZ Outbound peut suspendre ou refuser une campagne dont les paramètres sont incomplets ou non justifiés.",
        ],
        [
          "OUT-09",
          "Que faut-il fournir avant le lancement?",
          "Le client fournit une demande de services EZ Outbound remplie et signée; des renseignements exacts sur l'entreprise, l'offre et la campagne; une désignation B2B, B2C ou mixte; le public, les territoires, les objectifs, les critères de qualification ou d'admissibilité, les exclusions, les déclarations et les mentions approuvés; la provenance des données et l'autorisation de les utiliser; les preuves de permission ou de consentement requises; les suppressions; les disponibilités, la réservation, les fuseaux horaires, l'enregistrement, les contacts d'escalade et les accès nécessaires. La portée écrite, le script, les questions, les plages d'appel, la capacité, la livraison et les responsabilités doivent être approuvés avant les appels.",
        ],
        [
          "OUT-10",
          "Qui fournit la liste de prospects?",
          "EZ Outbound peut rechercher ou préparer une liste de prospects, supprimer les doublons et appliquer les exclusions et suppressions approuvées. Si le client fournit des données, il doit être autorisé à les transmettre et à les utiliser et doit préciser leur provenance, le public, les types de numéros, les restrictions, les permissions ou consentements ainsi que les listes internes de suppression à jour lorsque requis. Les données B2C font l'objet d'une vérification accrue, car les appels aux consommateurs peuvent dépendre des listes de non-sollicitation, du consentement, de la méthode de composition, du territoire et du secteur. Aucune source ne garantit que chaque fiche demeure complète, à jour, joignable, admissible ou légalement utilisable.",
        ],
        [
          "OUT-11",
          "Qui approuve le script et les critères de qualification?",
          "Le client approuve le type de campagne, l'offre, le prix et les déclarations, le public et les territoires, le script, les mentions requises, les questions de qualification ou d'admissibilité, les exclusions, la réservation et la définition du rendez-vous qualifié. EZ Outbound aide à structurer un message adapté aux entreprises ou aux consommateurs, prépare l'agent et peut recommander des ajustements selon le contrôle de la qualité et les résultats. EZ Outbound peut refuser ou suspendre toute instruction ou campagne qui semble illégale, trompeuse, discriminatoire, abusive, non justifiée, incomplète, non conforme ou hors de la portée écrite.",
        ],
        [
          "OUT-12",
          "Qu'est-ce qu'un Prospect qualifié – rendez-vous confirmé?",
          "Il s'agit du statut universel affiché au client pour les rendez-vous B2B et B2C acceptés. Le prospect doit respecter les critères de ciblage et de qualification approuvés. En B2B, la personne doit être le décideur ou le représentant pertinent convenu; en B2C, elle doit être le consommateur visé et respecter les règles d'admissibilité approuvées. Le prospect doit comprendre l'entreprise et l'objectif de la rencontre, démontrer un intérêt pertinent et accepter explicitement une date et une heure précises. Le fuseau horaire et les coordonnées requises doivent être confirmés, le rendez-vous ne peut être un doublon, le prospect ne doit figurer sur aucune liste d'exclusion ou de suppression applicable, et les notes doivent appuyer la qualification et le contexte. Sans date et heure convenues, aucun rendez-vous n'est livré.",
        ],
        [
          "OUT-13",
          "Combien de rendez-vous puis-je attendre, et les résultats sont-ils garantis?",
          "Après la préparation et la montée en régime, l'objectif opérationnel interne est d'au moins deux Prospects qualifiés – rendez-vous confirmés par jour ouvrable travaillé et par agent. Il s'agit d'un objectif, non d'un minimum garanti, et les résultats B2B et B2C peuvent différer. EZ Outbound ne garantit ni tentatives, contacts, conversations, volume de rendez-vous, qualification, présence, ventes, contrats, inscriptions, revenus, taux de conversion ou rendement. Les résultats dépendent du type de campagne, de l'offre, du prix, du marché, de la demande, de la qualité et de la provenance des données, des consentements, de la joignabilité, des critères, de la saisonnalité, de la conformité, des disponibilités et du processus de vente et de suivi du client.",
        ],
        [
          "OUT-14",
          "Que se passe-t-il si le prospect annule ou ne se présente pas?",
          "La présence du prospect n'est pas garantie. EZ Outbound confirme la date, l'heure, le fuseau horaire, la personne et l'objet de la rencontre au moment de la réservation, mais un prospect B2B ou B2C peut ensuite reporter, annuler ou s'absenter pour des raisons indépendantes d'EZ Outbound. Le client doit examiner chaque rendez-vous rapidement, envoyer les invitations ou rappels convenus, être présent à l'heure et fournir une rétroaction précise. Toute relance ou politique de remplacement doit être prévue dans la portée écrite et ne doit pas être présumée.",
        ],
        [
          "OUT-15",
          "EZ Outbound mène-t-elle la rencontre, complète-t-elle une inscription, perçoit-elle un paiement ou conclut-elle la vente?",
          "Non. EZ Outbound effectue uniquement la prospection, la qualification en direct et la prise de rendez-vous confirmés. Le client demeure responsable de la rencontre, de la présentation, des questions techniques ou commerciales, des suivis, des propositions, de la négociation, de l'inscription, des contrats, de la perception des paiements, des décisions finales d'achat, de l'exécution, des annulations, des remboursements et du service. EZ Outbound ne demande ni ne conserve les données de carte ou les renseignements bancaires des prospects, ne traite aucune transaction, ne promet aucune vente et ne peut engager le client. Toute vente, inscription, entente, tout paiement, toute annulation ou tout remboursement est géré directement entre le client et le prospect.",
        ],
        [
          "OUT-16",
          "Qu'est-ce qui est livré avec chaque rendez-vous confirmé?",
          "La livraison standard comprend le type de campagne; uniquement les renseignements sur l'entreprise, le contact ou le consommateur nécessaires à l'objectif approuvé; les notes de qualification; l'objet confirmé; la date, l'heure et le fuseau horaire; le nom de l'agent attitré; et l'heure de transmission. Le rendez-vous est ajouté au portail client authentifié et un avis par courriel est envoyé. Un fichier MP3 est inclus uniquement lorsque l'enregistrement est légal, activé pour la campagne et que l'avis ainsi que le consentement exigés dans le territoire concerné ont été obtenus. Les notes demeurent accessibles, que l'enregistrement soit activé ou non.",
        ],
        [
          "OUT-17",
          "EZ Outbound peut-elle fonctionner avec mon CRM ou mon calendrier?",
          "Le processus standard utilise le portail client à accès contrôlé d'EZ Outbound et une méthode de réservation confirmée. Un accès au calendrier ou au CRM peut être utilisé lorsqu'il est approuvé et pris en charge. Les intégrations directes ne sont pas automatiques et doivent être confirmées pendant l'intégration, notamment les permissions, les champs, la propriété, la sécurité, les essais et les coûts additionnels. Le client doit maintenir des disponibilités exactes et limiter l'accès aux utilisateurs autorisés.",
        ],
        [
          "OUT-18",
          "Le service standard comprend-il les courriels, les textos, les appels automatisés ou les appels générés par IA?",
          "Non. Le service standard repose sur des appels sortants B2B et B2C effectués par un agent humain et gérés par EZ Outbound. Les campagnes de courriels, les textos, les appels préenregistrés, le marketing automatisé et les appels à voix artificielle ou générée par IA ne sont pas inclus par défaut. Tout canal ou mode de composition supplémentaire exige une approbation écrite distincte, une portée et un prix confirmés s'il y a lieu, ainsi que la vérification des exigences applicables au public et au territoire en matière de consentement, d'identification, de mentions, de désabonnement, de suppression et de tenue de dossiers. Les activités automatisées, préenregistrées, à voix artificielle ou par texto promotionnel ne sont utilisées que lorsque le consentement documenté requis et les autres conditions sont satisfaits.",
        ],
        [
          "OUT-19",
          "Comment EZ Outbound gère-t-elle la conformité, l'enregistrement des appels et les données?",
          "Chaque partie doit respecter les exigences applicables à son rôle, au public, au territoire, au canal, au type de numéro, au secteur et à la méthode de composition. Le client fournit des données légalement utilisables, des déclarations exactes et justifiables, les permissions ou consentements requis, les restrictions et les suppressions. EZ Outbound gère les inscriptions, l'identification de l'appelant, les plages locales permises, le filtrage, les demandes de non-sollicitation, l'escalade, les procédures des agents et les dossiers attribués à son rôle. Les campagnes B2C exigent une vérification accrue de la provenance des listes, des consentements, des suppressions, des mentions, de la composition, de l'enregistrement et des règles territoriales. Une finalité B2B ne constitue pas une exemption générale aux exigences de télémarketing, de vie privée, d'enregistrement ou de messages électroniques. Un appel est enregistré uniquement lorsque cela est légal, activé pour la campagne et accompagné de l'avis ou du consentement requis.",
        ],
        [
          "OUT-20",
          "Comment les renseignements de campagne et les données des prospects sont-ils protégés après la fin du service?",
          "Les renseignements sur les contacts d'entreprise et les consommateurs sont livrés dans le portail client authentifié uniquement pour l'objectif approuvé. L'accès est limité au personnel autorisé, aux utilisateurs autorisés du client et aux fournisseurs protégés qui participent à la livraison. Les identifiants, renseignements personnels, notes et enregistrements ne doivent pas être transmis à des personnes non autorisées. À la fin du service, EZ Outbound retourne ou détruit de façon sécuritaire les renseignements personnels selon les instructions du client, sauf conservation exigée par la loi. Sans instruction, l'entente actuelle prévoit une destruction sécuritaire dans les 30 jours, sous réserve de toute conservation obligatoire.",
        ],
        [
          "OUT-21",
          "Comment puis-je commencer?",
          "Remplissez et signez la demande de services EZ Outbound, puis fournissez le type de campagne B2B, B2C ou mixte approuvé; l'offre; le public; les territoires; les objectifs; les déclarations et mentions; les critères de qualification ou d'admissibilité; la provenance des données et l'autorisation de les utiliser; les preuves de permission ou de consentement requises; les exclusions et suppressions; les disponibilités; le processus de réservation; les fuseaux horaires; les paramètres d'enregistrement; l'escalade; et le point de contact. EZ Outbound préparera la portée écrite, la liste, le script adapté, le portail et l'agent attitré. Le lancement dépend de l'acceptation de la campagne et de l'achèvement des approbations, données, paiements, accès et contrôles de conformité requis.",
        ],
      ],
    },
    disclaimer:
      "EZ Capital facilite l'accès à des solutions de financement d'entreprise et de traitement des paiements auprès de partenaires indépendants. EZ Capital n'est ni un prêteur direct, ni un acquéreur, ni un processeur de paiements. EZ Outbound fournit des services gérés de prospection B2B et B2C et de prise de rendez-vous. Les approbations, les modalités et les résultats de campagne varient.",
  },
};

function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsString(str) {
  return JSON.stringify(str);
}

function buildPanel(groupKey, group, enGroup) {
  const panelId = `faq-panel-${groupKey}`;
  const tabId = `faq-tab-${groupKey}`;
  const items = enGroup.items
    .map(([id], index) => {
      const qId = `faq-${id}-q`;
      const aId = `faq-${id}-a`;
      const [, qEn, aEn] = enGroup.items[index];
      return `            <div class="faq-item" id="${id}">
              <h3 class="faq-item-heading">
                <button
                  type="button"
                  class="faq-question"
                  id="${qId}"
                  aria-expanded="false"
                  aria-controls="${aId}"
                >
                  <span class="faq-q-text">
                    <span class="faq-id" aria-hidden="true">${id}</span>
                    <span data-i18n="faq.${id}.q">${esc(qEn)}</span>
                  </span>
                  <span class="faq-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div
                class="faq-answer"
                id="${aId}"
                role="region"
                aria-labelledby="${qId}"
                hidden
              >
                <p data-i18n="faq.${id}.a">${esc(aEn)}</p>
              </div>
            </div>`;
    })
    .join("\n\n");

  const ctaHref =
    groupKey === "financing"
      ? "#financing"
      : groupKey === "payments"
        ? "#payments"
        : "#outbound";

  return `        <div
          class="faq-panel"
          id="${panelId}"
          role="tabpanel"
          aria-labelledby="${tabId}"
          data-faq-panel="${groupKey}"
          ${groupKey === "financing" ? "" : "hidden"}
        >
          <p class="faq-intro" data-i18n="faq.${groupKey}.intro">${esc(enGroup.intro)}</p>
          <div class="faq-list">
${items}
          </div>
          <div class="faq-group-cta">
            <a href="${ctaHref}" class="btn btn-primary" data-i18n="faq.${groupKey}.cta">${esc(enGroup.cta)}</a>
          </div>
        </div>`;
}

function buildHtml(en) {
  return `      <!-- FAQ -->
      <section class="section" id="faq">
        <div class="container">
          <header class="section-header reveal">
            <h2 data-i18n="faq.title">${esc(en.title)}</h2>
          </header>

          <div class="faq-tabs reveal" role="tablist" aria-label="FAQ divisions">
            <button
              type="button"
              class="faq-tab is-active"
              role="tab"
              id="faq-tab-financing"
              aria-selected="true"
              aria-controls="faq-panel-financing"
              data-faq-tab="financing"
            >
              <span data-i18n="faq.tab.financing">${esc(en.tabs.financing)}</span>
            </button>
            <button
              type="button"
              class="faq-tab"
              role="tab"
              id="faq-tab-payments"
              aria-selected="false"
              aria-controls="faq-panel-payments"
              data-faq-tab="payments"
              tabindex="-1"
            >
              <span data-i18n="faq.tab.payments">${esc(en.tabs.payments)}</span>
            </button>
            <button
              type="button"
              class="faq-tab"
              role="tab"
              id="faq-tab-outbound"
              aria-selected="false"
              aria-controls="faq-panel-outbound"
              data-faq-tab="outbound"
              tabindex="-1"
            >
              <span data-i18n="faq.tab.outbound">${esc(en.tabs.outbound)}</span>
            </button>
          </div>

${buildPanel("financing", en.financing, en.financing)}

${buildPanel("payments", en.payments, en.payments)}

${buildPanel("outbound", en.outbound, en.outbound)}

          <p class="faq-disclaimer compliance-note reveal" data-i18n="faq.disclaimer">
            ${esc(en.disclaimer)}
          </p>
        </div>
      </section>`;
}

function buildI18nBlock(langData) {
  const lines = [];
  lines.push(`    "faq.title": ${jsString(langData.title)},`);
  lines.push(`    "faq.tab.financing": ${jsString(langData.tabs.financing)},`);
  lines.push(`    "faq.tab.payments": ${jsString(langData.tabs.payments)},`);
  lines.push(`    "faq.tab.outbound": ${jsString(langData.tabs.outbound)},`);
  for (const group of ["financing", "payments", "outbound"]) {
    lines.push(
      `    "faq.${group}.intro": ${jsString(langData[group].intro)},`
    );
    lines.push(`    "faq.${group}.cta": ${jsString(langData[group].cta)},`);
    for (const [id, q, a] of langData[group].items) {
      lines.push(`    "faq.${id}.q": ${jsString(q)},`);
      lines.push(`    "faq.${id}.a": ${jsString(a)},`);
    }
  }
  lines.push(`    "faq.disclaimer": ${jsString(langData.disclaimer)},`);
  return lines.join("\n");
}

function replaceFaqInI18n(source, langBlock) {
  // Replace from "faq.title" through last old faq key before contact.title
  const re =
    /    "faq\.title":[\s\S]*?(?=    "contact\.title":)/;
  if (!re.test(source)) {
    throw new Error("Could not locate FAQ block in i18n.js");
  }
  return source.replace(re, `${langBlock}\n`);
}

function patchIndex(htmlSource, faqHtml) {
  const re = /      <!-- FAQ -->[\s\S]*?(?=      <!-- CONTACT -->)/;
  if (!re.test(htmlSource)) {
    throw new Error("Could not locate FAQ section in index.html");
  }
  return htmlSource.replace(re, `${faqHtml}\n\n`);
}

const en = faq.en;
const fr = faq.fr;

// Validate IDs match across languages
for (const group of ["financing", "payments", "outbound"]) {
  const enIds = en[group].items.map((i) => i[0]).join(",");
  const frIds = fr[group].items.map((i) => i[0]).join(",");
  if (enIds !== frIds) {
    throw new Error(`ID mismatch in ${group}`);
  }
}

const faqHtml = buildHtml(en);
const indexPath = path.join(root, "index.html");
const i18nPath = path.join(root, "src", "i18n.js");

let indexHtml = fs.readFileSync(indexPath, "utf8");
indexHtml = patchIndex(indexHtml, faqHtml);
fs.writeFileSync(indexPath, indexHtml);

let i18n = fs.readFileSync(i18nPath, "utf8");

// Replace EN and FR faq blocks separately by splitting on export structure
const enMarker = 'export const translations = {\n  en: {';
const frMarker = "  fr: {";
const enStart = i18n.indexOf(enMarker);
const frStart = i18n.indexOf(frMarker);
if (enStart < 0 || frStart < 0) throw new Error("i18n structure not found");

const enPart = i18n.slice(enStart, frStart);
const frPart = i18n.slice(frStart);
const head = i18n.slice(0, enStart);

const enPatched = replaceFaqInI18n(enPart, buildI18nBlock(en));
const frPatched = replaceFaqInI18n(frPart, buildI18nBlock(fr));
fs.writeFileSync(i18nPath, head + enPatched + frPatched);

console.log("FAQ HTML and i18n updated.");
console.log(
  `Counts — FIN ${en.financing.items.length}, PAY ${en.payments.items.length}, OUT ${en.outbound.items.length}`
);
