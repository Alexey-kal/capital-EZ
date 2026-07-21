import fs from "node:fs";

const path = "index.html";
let html = fs.readFileSync(path, "utf8");

function replaceBetween(startMarker, endMarker, replacement) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Could not replace ${startMarker} through ${endMarker}`);
  }
  html = `${html.slice(0, start)}${replacement.trim()}\n\n      ${html.slice(end)}`;
}

replaceBetween(
  "<!-- EZ FINANCING -->",
  "<!-- EZ PAYMENTS -->",
  `<!-- EZ FINANCING -->
      <section class="section section-division" id="financing">
        <div class="container">
          <header class="section-header reveal">
            <p class="section-eyebrow">EZ Financing</p>
            <h2 data-i18n="financing.title">EZ Financing - Business Financing</h2>
          </header>

          <p class="division-lead reveal" data-i18n="financing.opening">
            Business financing, clearly explained. EZ Financing is a commercial-financing brokerage service operated by 9552-8212 Québec Inc. under The EZ Capital Brokerage Group brand. We help established Canadian businesses explore business-purpose financing through independent third-party financing partners. We organize the request, coordinate partner review, and present available options clearly. EZ Financing is not a direct lender.
          </p>

          <div class="trust-cards reveal">
            <article class="trust-card">
              <h3 data-i18n="financing.trust1Title">No application fee</h3>
              <p data-i18n="financing.trust1Desc">No. EZ Financing does not charge an application fee or a separate fee to review the request and present available options. Submitting a request does not obligate you to accept an option.</p>
            </article>
            <article class="trust-card">
              <h3 data-i18n="financing.trust2Title">Soft credit inquiry</h3>
              <p data-i18n="financing.trust2Desc">No. The initial options review uses a soft credit inquiry and does not affect the credit score.</p>
            </article>
            <article class="trust-card">
              <h3 data-i18n="financing.trust3Title">No obligation</h3>
              <p data-i18n="financing.trust3Desc">Submitting an application does not guarantee approval and does not obligate you to accept an option. Review the complete written terms before deciding.</p>
            </article>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="financing.roleTitle">Role distinction</h3>
            <div class="spec-table-wrap">
              <table class="spec-table">
                <thead>
                  <tr>
                    <th data-i18n="financing.coordinates">EZ Financing coordinates</th>
                    <th data-i18n="financing.partnerDecides">The financing partner decides</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td data-i18n="financing.role1a">Organizes the request and reviews the initial file for completeness.</td><td data-i18n="financing.role1b">Eligibility, verification and underwriting.</td></tr>
                  <tr><td data-i18n="financing.role2a">Organizes documents and clarifies the objective.</td><td data-i18n="financing.role2b">Approval or decline and approved amount.</td></tr>
                  <tr><td data-i18n="financing.role3a">Identifies potentially suitable structures.</td><td data-i18n="financing.role3b">Pricing, repayment, term and security.</td></tr>
                  <tr><td data-i18n="financing.role4a">Coordinates underwriting questions and follow-up.</td><td data-i18n="financing.role4b">Final contract, funding, servicing and collection.</td></tr>
                  <tr><td data-i18n="financing.role5a">Presents available options and key terms in writing.</td><td data-i18n="financing.role5b">Conditions required before funding.</td></tr>
                </tbody>
              </table>
            </div>
            <p class="disclosure-callout" data-i18n="financing.disclosure">EZ Financing is a commercial-financing brokerage service and is not a direct lender. Any financing is offered and provided by an independent third-party partner under that partner's own underwriting, approval, documentation, funding, servicing and collection processes.</p>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="financing.solutionsTitle">Financing solutions</h3>
            <div class="spec-table-wrap">
              <table class="spec-table solutions-table">
                <thead>
                  <tr>
                    <th data-i18n="financing.solution">Solution</th>
                    <th data-i18n="financing.range">Indicative range and structure</th>
                    <th data-i18n="financing.uses">Common uses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row" data-i18n="financing.fixed">Fixed-Term Business Financing</th><td data-i18n="financing.fixedRange">CAD $5,000-$1,000,000; full amount advanced upfront; generally scheduled automatic weekly payments over the stated term.</td><td data-i18n="financing.fixedUses">Equipment, vehicles, inventory, expansion, new locations, renovations, hiring, marketing, website, signage and planned growth.</td></tr>
                  <tr><th scope="row" data-i18n="financing.line">Revolving Business Line of Credit</th><td data-i18n="financing.lineRange">CAD $7,500-$500,000; draw only what is needed; repay and reuse; charges apply to amount drawn; weekly repayment may be fixed or variable.</td><td data-i18n="financing.lineUses">Working capital, cash-flow gaps, payroll, suppliers, repairs, unexpected expenses and recurring needs.</td></tr>
                  <tr><th scope="row" data-i18n="financing.advance">Sales-Based Advance</th><td data-i18n="financing.advanceRange">CAD $5,000-$300,000; uses an agreed percentage of sales, so the dollar payment generally rises or falls with sales and the duration is estimated rather than fixed.</td><td data-i18n="financing.advanceUses">Seasonal or variable-revenue needs, inventory, equipment, hiring, expansion or renovations.</td></tr>
                </tbody>
              </table>
            </div>
            <p data-i18n="financing.rangeQualification">All amounts are in Canadian dollars and reflect indicative partner ranges. Financing may be available from CAD $5,000 to more than CAD $1,000,000 depending on the file, structure and financing partner. Unsecured financing is capped at CAD $800,000; financing above CAD $800,000 requires a secured structure and remains subject to collateral, underwriting and partner approval. Availability, terms and approval vary, and not every applicant will qualify.</p>
            <p data-i18n="financing.security">Secured and unsecured structures may be available. Security, collateral, registrations, guarantees and additional approvals depend on the applicant, amount and partner. Higher requests - especially amounts above CAD $500,000 - may require collateral and additional review. Only the written offer and final agreement establish the actual security requirements.</p>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="financing.combiningTitle">Combining or refinancing</h3>
            <p data-i18n="financing.combining">Subject to approval, a fixed-term solution or a sales-based advance may sometimes be paired with a revolving line of credit. Fixed-term financing and a sales-based advance are not combined with each other in the same dual structure described in the current overview. A partner may also consider paying out or refinancing an existing business obligation, but it may require current statements, a balance confirmation or a payout letter and is never guaranteed.</p>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="financing.processTitle">How the process works</h3>
            <ol class="numbered-process">
              <li data-i18n="financing.process1">Send the completed and signed application and initial banking documents.</li>
              <li data-i18n="financing.process2">EZ Financing checks completeness and clarifies the request.</li>
              <li data-i18n="financing.process3">The initial options review uses a soft credit inquiry and does not affect the credit score.</li>
              <li data-i18n="financing.process4">Additional documents or explanations may be requested.</li>
              <li data-i18n="financing.process5">Available amount, cost, repayment, term, security and conditions are presented in writing.</li>
              <li data-i18n="financing.process6">The applicant decides whether to proceed. Applying does not guarantee approval and does not require the applicant to accept an option.</li>
              <li data-i18n="financing.process7">The applicant is committed only if the applicable partner's final agreement is signed. In some cases, funds may be transferred within 24 hours after the final agreement is accepted and every condition is satisfied; no approval, amount or funding date is guaranteed.</li>
            </ol>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="financing.documentsTitle">Documents and security</h3>
            <div class="compare-grid">
              <div class="compare-col">
                <h4 data-i18n="financing.usuallyRequired">Usually required to begin</h4>
                <ul class="check-list">
                  <li data-i18n="financing.docs1">Completed and signed application.</li>
                  <li data-i18n="financing.docs2">Six most recent complete business bank statements.</li>
                  <li data-i18n="financing.docs3">Current-month statement or transaction history from the first through today.</li>
                </ul>
              </div>
              <div class="compare-col">
                <h4 data-i18n="financing.mayRequested">May be requested</h4>
                <ul class="check-list">
                  <li data-i18n="financing.moreDocs1">Processing statements.</li>
                  <li data-i18n="financing.moreDocs2">Financial statements, receivables aging or tax information.</li>
                  <li data-i18n="financing.moreDocs3">Existing financing statements, balance confirmations or payout letters.</li>
                </ul>
              </div>
            </div>
            <p class="disclosure-callout" data-i18n="financing.documentSecurity">Use bank-generated PDFs whenever possible. Never request or accept online-banking usernames, passwords, one-time codes, security answers, private keys or account credentials through ordinary email or the general website form.</p>
          </div>

          <div class="division-cta-banner reveal">
            <div>
              <h3 data-i18n="financing.ready">Ready to explore your financing options?</h3>
              <p data-i18n="financing.ctaBody">Complete and sign the EZ Financing Business Funding Application, then provide the requested bank-generated PDF documents through the approved secure transfer method.</p>
            </div>
            <div class="hero-ctas">
              <a href="#contact" class="btn btn-primary" data-service="financing" data-i18n="financing.application">Request the Application</a>
              <a href="#contact" class="btn btn-outline dark" data-service="financing" data-i18n="financing.cta">Request a Consultation</a>
            </div>
          </div>
        </div>
      </section>`
);

replaceBetween(
  "<!-- EZ PAYMENTS -->",
  "<!-- EZ OUTBOUND -->",
  `<!-- EZ PAYMENTS -->
      <section class="section section-division section-payments" id="payments">
        <div class="container">
          <header class="section-header reveal">
            <p class="section-eyebrow">EZ Payments</p>
            <h2 data-i18n="payments.title">EZ Payments - Merchant Services and Payment Processing</h2>
          </header>

          <p class="division-lead reveal" data-i18n="payments.intro">EZ Payments helps businesses assess their payment-acceptance needs and explore solutions offered by independent payment-processing partners, based on industry, sales channels, transaction profile, current setup and partner eligibility. We coordinate the assessment and introduction; the selected provider supplies any approved services under its own agreement.</p>
          <p class="disclosure-callout reveal" data-i18n="payments.disclosure">EZ Payments arranges payment-processing solutions through independent partners. EZ Payments is not a merchant acquirer or payment processor and does not authorize transactions, settle card payments, hold merchant transaction funds or issue final account approvals.</p>

          <div class="spec-block reveal">
            <h3 data-i18n="payments.solutionsTitle">Solutions that may be reviewed</h3>
            <ul class="check-list check-list-full">
              <li data-i18n="payments.solution1">In-person, online, mobile, mail or telephone-order and recurring payment acceptance, subject to provider availability and approval.</li>
              <li data-i18n="payments.solution2">Countertop, wireless or mobile terminals; virtual terminals; e-commerce gateways; payment links; and selected point-of-sale integrations.</li>
              <li data-i18n="payments.solution3">Credit, debit, contactless and mobile-wallet acceptance. Brands, currencies, features and service areas must be confirmed in writing.</li>
            </ul>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="payments.howTitle">How it works</h3>
            <ol class="numbered-process">
              <li data-i18n="payments.step1">Share the business profile, payment channels, expected volume, average ticket, current statements if available, equipment or integration needs and contract priorities.</li>
              <li data-i18n="payments.step2">EZ Payments reviews the current setup, transaction mix, equipment, software, service requirements and contract priorities.</li>
              <li data-i18n="payments.step3">Independent providers determine eligibility, underwriting, pricing, hardware, deposit timing, reserves, risk controls and final approval.</li>
              <li data-i18n="payments.step4">Compare complete written proposals, including total monthly cost, pricing model, term, cancellation, hardware, deposit timing, support and data practices.</li>
              <li data-i18n="payments.step5">Keep the current solution active until final approval, installation, configuration and testing are complete.</li>
            </ol>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="payments.compareTitle">Comparison checklist</h3>
            <div class="spec-table-wrap">
              <table class="spec-table">
                <thead><tr><th data-i18n="payments.review">Review</th><th data-i18n="payments.confirm">Confirm in writing</th></tr></thead>
                <tbody>
                  <tr><th scope="row" data-i18n="payments.pricing">Pricing</th><td data-i18n="payments.pricingBody">Interchange/wholesale costs, network assessments, markup, per-transaction and monthly fees, gateways, PCI, refunds, chargebacks and taxes.</td></tr>
                  <tr><th scope="row" data-i18n="payments.contract">Contract</th><td data-i18n="payments.contractBody">Term, automatic renewal, cancellation notice, termination charges and separate equipment agreements.</td></tr>
                  <tr><th scope="row" data-i18n="payments.operations">Operations</th><td data-i18n="payments.operationsBody">Deposit schedule, batch cutoff, reserves/holds, refunds, chargebacks and support contacts.</td></tr>
                  <tr><th scope="row" data-i18n="payments.technology">Technology</th><td data-i18n="payments.technologyBody">Terminal/POS compatibility, ownership/rental/lease, installation, warranty, replacement, integration and return obligations.</td></tr>
                  <tr><th scope="row" data-i18n="payments.security">Security</th><td data-i18n="payments.securityBody">PCI responsibilities, access controls, provider privacy terms, cross-border processing and incident contacts.</td></tr>
                </tbody>
              </table>
            </div>
            <h4 data-i18n="payments.noGuaranteeTitle">No savings or timing guarantee</h4>
            <p class="disclosure-callout" data-i18n="payments.noGuarantee">EZ Payments does not guarantee the lowest rate, savings, approval, activation date, same-day deposit or next-day deposit. The selected provider's complete written agreement governs.</p>
          </div>

          <div class="division-cta-banner reveal">
            <div>
              <h3 data-i18n="payments.ctaTitle">Review payment solutions</h3>
              <p data-i18n="payments.ctaBody">Tell us about your business, payment channels, monthly volume, average ticket, current equipment or software and contract priorities.</p>
            </div>
            <a href="#contact" class="btn btn-primary" data-service="payments" data-i18n="payments.cta">Request a Payment Consultation</a>
          </div>
        </div>
      </section>`
);

replaceBetween(
  "<!-- EZ OUTBOUND -->",
  "<!-- HOW IT WORKS -->",
  `<!-- EZ OUTBOUND -->
      <section class="section section-outbound" id="outbound">
        <div class="container">
          <header class="section-header section-header-wide reveal">
            <p class="section-eyebrow">EZ Outbound</p>
            <h2 data-i18n="outbound.title">Managed B2B and B2C outbound, clearly explained.</h2>
            <p data-i18n="outbound.hero">Managed live-agent prospecting, qualification, and confirmed appointment setting for businesses serving organizations or individual consumers. One dedicated agent. One managed campaign. Qualified, confirmed appointments delivered directly to your business. B2B + B2C | Canada + United States.</p>
          </header>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.turnkeyTitle">One monthly fee. Focus on your business. We manage the prospecting.</h3>
            <p data-i18n="outbound.turnkey">We adapt the prospect list and campaign messaging, manage and coach the agent, monitor performance against the daily objective, maintain continuous calling, qualify prospects, and deliver confirmed appointments directly to your business.</p>
          </div>

          <div class="trust-cards reveal">
            <article class="trust-card"><h3 data-i18n="outbound.trust1Title">Dedicated managed agent</h3><p data-i18n="outbound.trust1Desc">Assigned to the approved campaign, prepared, managed and coached by EZ Outbound.</p></article>
            <article class="trust-card"><h3 data-i18n="outbound.trust2Title">Continuous, unlimited calls</h3><p data-i18n="outbound.trust2Desc">No contractual per-dial cap or preset dial package. The agent calls during seven active calling hours within approved local windows. This does not guarantee an exact attempt or contact volume.</p></article>
            <article class="trust-card"><h3 data-i18n="outbound.trust3Title">Seven active hours per day</h3><p data-i18n="outbound.trust3Desc">Monday-Friday, five business days per week, within the campaign's approved local calling windows.</p></article>
          </div>

          <p class="division-lead reveal" data-i18n="outbound.who">EZ Outbound is a managed B2B and B2C prospecting and appointment-setting division operated by 9552-8212 Québec Inc. under The EZ Capital Brokerage Group brand. It prepares eligible campaigns, performs live outreach, qualifies business contacts or consumers against client-approved criteria and confirms appointments in Canada and the United States.</p>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.responsibilityTitle">Responsibility split</h3>
            <div class="spec-table-wrap"><table class="spec-table"><thead><tr><th data-i18n="outbound.manages">EZ Outbound manages</th><th data-i18n="outbound.clientControls">The client controls</th></tr></thead><tbody>
              <tr><td data-i18n="outbound.manage1">Campaign planning, B2B/B2C segmentation, targeting and operating parameters.</td><td data-i18n="outbound.control1">Offer, claims, pricing, campaign type, audience, territories and objectives.</td></tr>
              <tr><td data-i18n="outbound.manage2">List sourcing/preparation, deduplication, suppression and exclusions.</td><td data-i18n="outbound.control2">Approval of messaging, criteria, disclosures and exclusions.</td></tr>
              <tr><td data-i18n="outbound.manage3">Scripts, qualification, required disclosures and booking flow.</td><td data-i18n="outbound.control3">Lawful data use, permissions/consents and client suppression records.</td></tr>
              <tr><td data-i18n="outbound.manage4">Agent preparation, management, coaching, live outreach, quality review and agreed secure delivery.</td><td data-i18n="outbound.control4">Sales meetings, follow-up, proposals, negotiation, enrollment, payment collection, closing, fulfillment and service.</td></tr>
            </tbody></table></div>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.modelsTitle">Two campaign models</h3>
            <div class="compare-grid">
              <article class="compare-col"><h4 data-i18n="outbound.b2b">B2B Prospecting</h4><ul class="check-list"><li data-i18n="outbound.b2b1">Businesses, owners, executives, decision-makers and relevant representatives.</li><li data-i18n="outbound.b2b2">Target by sector, size, geography, role or approved campaign criteria.</li><li data-i18n="outbound.b2b3">Qualify fit, authority, need, interest and meeting availability.</li><li data-i18n="outbound.b2b4">Deliver the business, contact, role, notes and confirmed meeting details.</li></ul></article>
              <article class="compare-col"><h4 data-i18n="outbound.b2c">B2C Prospecting</h4><ul class="check-list"><li data-i18n="outbound.b2c1">Individual consumers or households within the approved profile and territory.</li><li data-i18n="outbound.b2c2">Qualify identity, eligibility, need, interest, understanding and availability.</li><li data-i18n="outbound.b2c3">Use consumer-appropriate language, disclosures and a clearly defined next step.</li><li data-i18n="outbound.b2c4">Deliver only contact details, notes and confirmed appointment information needed for the approved purpose.</li></ul></article>
            </div>
            <p class="disclosure-callout" data-i18n="outbound.mixed">A mixed campaign must be segmented before launch so targeting, list provenance, consent, suppression, disclosures, calling windows, recording rules, qualification and booking match the B2B or B2C audience.</p>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.stagesTitle">Managed service - three stages</h3>
            <ol class="stage-grid">
              <li><span>01</span><h4 data-i18n="outbound.stage1Title">Campaign Foundation</h4><p data-i18n="outbound.stage1">Confirm client, offer, B2B/B2C/mixed type, territories, languages, time zones, audience, criteria, list, suppressions, script, disclosures and booking flow.</p></li>
              <li><span>02</span><h4 data-i18n="outbound.stage2Title">Dedicated Live-Agent Execution</h4><p data-i18n="outbound.stage2">One prepared and managed agent, seven active calling hours per day within approved local windows, B2B or B2C outreach and do-not-call handling.</p></li>
              <li><span>03</span><h4 data-i18n="outbound.stage3Title">Confirmed Appointment Delivery</h4><p data-i18n="outbound.stage3">Exact date, time and time zone; limited necessary prospect information; qualification notes; assigned agent and timestamp; secure delivery by the method named in the written scope.</p></li>
            </ol>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.standardTitle">Appointment standard</h3>
            <p class="status-label" data-i18n="outbound.standardStatus">Only client-facing status: Qualified Lead - Confirmed Appointment</p>
            <ul class="check-list check-list-full"><li data-i18n="outbound.standard1">Prospect matches approved targeting and qualification criteria.</li><li data-i18n="outbound.standard2">For B2B, the contact is the agreed decision-maker or relevant representative. For B2C, the contact is the intended individual and meets approved eligibility rules.</li><li data-i18n="outbound.standard3">Prospect understands the company and purpose, shows relevant interest and explicitly agrees to a specific date and time.</li><li data-i18n="outbound.standard4">Time zone and necessary contact details are confirmed; appointment is not a duplicate; applicable exclusions and suppression are respected.</li><li data-i18n="outbound.standard5">Notes support the qualification and context. No agreed date and time means no delivered appointment.</li></ul>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.termsTitle">Commercial terms and performance</h3>
            <div class="terms-grid"><p data-i18n="outbound.priceCanada">Canada: CAD $3,000 per agent/month, plus applicable taxes.</p><p data-i18n="outbound.priceUS">United States: USD $2,100 per agent/month, plus applicable taxes.</p><p data-i18n="outbound.term">Term: Month-to-month; no minimum term or early-termination fee; signed agreement controls.</p><p data-i18n="outbound.capacity">Capacity: Seven active calling hours per day, Monday-Friday, five business days per week, within approved local calling windows.</p></div>
            <p data-i18n="outbound.objective">Internal objective: At least two Qualified Leads - Confirmed Appointments per business day worked, per agent, after preparation and ramp-up.</p>
            <p class="disclosure-callout" data-i18n="outbound.noGuarantee">No attempt, contact, conversation, appointment volume, qualification, attendance, sale, enrollment, contract, revenue, conversion rate or return on investment is guaranteed.</p>
          </div>

          <div class="spec-block reveal">
            <h3 data-i18n="outbound.limitsTitle">Standard-service limits</h3>
            <ul class="check-list check-list-full"><li data-i18n="outbound.limit1">Standard service is managed live-agent B2B/B2C calling. Email campaigns, texts, prerecorded calls, automated marketing and AI-generated voice calls are not included by default.</li><li data-i18n="outbound.limit2">Calls are recorded only when lawful, expressly enabled and supported by required notice or consent. MP3 portal access is not part of this launch.</li><li data-i18n="outbound.limit3">EZ Outbound does not conduct the client's sales meeting, complete enrollment, collect prospect payments or card/banking information, process transactions, bind the client or make final purchasing decisions.</li><li data-i18n="outbound.limit4">The client controls the offer, claims, pricing, meeting, follow-up, sale, enrollment, contract, payment, fulfillment, cancellation, refund and service.</li></ul>
          </div>

          <div class="division-cta-banner reveal">
            <div><h3 data-i18n="outbound.ctaTitle">Ready to build a more consistent B2B or B2C appointment pipeline?</h3><p data-i18n="outbound.ctaBody">Complete the EZ Outbound Service Application to begin campaign review, or request an Outbound Strategy Call.</p></div>
            <div class="hero-ctas"><a href="#contact" class="btn btn-primary" data-service="outbound" data-i18n="outbound.application">Complete the Application</a><a href="#contact" class="btn btn-outline dark" data-service="outbound" data-i18n="outbound.cta1">Book an Outbound Strategy Call</a><a href="#contact" class="btn btn-outline dark" data-service="outbound" data-i18n="outbound.cta2">Request an Outbound Consultation</a></div>
          </div>
        </div>
      </section>`
);

replaceBetween(
  "<!-- HOW IT WORKS -->",
  "<!-- ELIGIBILITY -->",
  `<!-- HOW IT WORKS -->
      <section class="section" id="how-it-works">
        <div class="container">
          <header class="section-header reveal"><h2 data-i18n="how.title">How It Works</h2></header>
          <div class="workflow-grid">
            <article class="workflow-card reveal"><h3 data-i18n="how.financing">EZ Financing</h3><ol><li data-i18n="how.financing1">Tell us the financing objective.</li><li data-i18n="how.financing2">Provide the signed application and starting documents.</li><li data-i18n="how.financing3">Independent partners review; available terms are presented in writing.</li><li data-i18n="how.financing4">Choose whether to proceed; no obligation.</li></ol></article>
            <article class="workflow-card reveal"><h3 data-i18n="how.payments">EZ Payments</h3><ol><li data-i18n="how.payments1">Describe channels, volume and current setup.</li><li data-i18n="how.payments2">Review needs and existing statements.</li><li data-i18n="how.payments3">Independent providers assess and issue proposals.</li><li data-i18n="how.payments4">Compare full written terms before switching.</li></ol></article>
            <article class="workflow-card reveal"><h3 data-i18n="how.outbound">EZ Outbound</h3><ol><li data-i18n="how.outbound1">Define B2B/B2C audience, offer and goals.</li><li data-i18n="how.outbound2">Approve data, criteria, script, disclosures and booking flow.</li><li data-i18n="how.outbound3">Prepare the dedicated managed agent.</li><li data-i18n="how.outbound4">Launch and deliver confirmed appointments through the agreed secure method.</li></ol></article>
          </div>
        </div>
      </section>`
);

fs.writeFileSync(path, html);
