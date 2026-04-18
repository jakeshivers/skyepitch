# Skyepitch — Feature Specification
### SkyeHub Platform | Lakota Skye
#### Nationwide Signage & Graphics Installation | Design | Project Management
#### A Native American Owned Company
#### Version 2.0 | Replacing & Surpassing Channel Rocket

---

## Overview

Skyepitch is the sales enablement module of SkyeHub — purpose-built for the sign installation and graphics industry. Where Channel Rocket offered static, pre-written pitch content for IT channel sales reps, Skyepitch delivers AI-generated, real-time pitch content tailored to Lakota Skye's full service offering: design, print management, installation, and ongoing project management.

Powered by Claude AI (Anthropic), Skyepitch gives every sales rep instant access to intelligent, personalized pitch content — calibrated to the buyer, the vertical, and the specific Lakota Skye service being sold. It is filterable, mobile-first, data-driven, and fully owned by Lakota Skye.

Lakota Skye's core value proposition — **One partner. Total alignment.** — runs through every pitch Skyepitch generates. Design through installation through management, handled by one experienced, nationally certified team.

**Built in React + TypeScript** as a PWA via Cloudflare Workers.

---

## Part 1 — Channel Rocket Parity (What We Replicate)

These features match or directly replace everything Channel Rocket currently offers.

### 1.1 Filterable Content Library
- Filter by **industry vertical**: retail, QSR, hospitality, healthcare, education, government, commercial real estate, event & tradeshow, franchise networks, multi-location brands
- Filter by **problem / pain point**: project delays, installer availability, geographic coverage, quality control, compliance, brand consistency, speed to completion
- Filter by **audience / buyer persona**: VP of Brand, Director of Retail Experience, franchise operations director, regional facilities manager, national accounts director, general contractor, brand manager, procurement
- Filter by **service type**: design services, print management, sign installation, fleet graphics, art & mural installation, ADA/wayfinding, environmental graphics, event & tradeshow installation, survey & project auditing, brand rollouts
- Multi-filter combinations surface the most relevant content instantly
- Results update dynamically as filters are selected

### 1.2 Pitch Content Cards
- Each card displays a **headline**, **key talking points**, **pain points addressed**, and **proof points**
- Cards link to supporting assets — one-pagers, case studies, photo galleries, spec sheets
- Cards are tagged by filter dimensions for accurate retrieval
- Printable and shareable format for use before or during client calls

### 1.3 Mobile-First Access
- Full PWA — works on any device, any screen size, no app store required
- Accessible offline for reps in the field without reliable connectivity
- Fast load times via Cloudflare Workers infrastructure already in place
- Optimized for one-handed use on mobile during sales conversations

### 1.4 Branded & Customizable
- Fully branded under Lakota Skye visual identity
- Content tone and terminology specific to the sign installation and graphics industry
- No generic vendor templates — every card reflects Lakota Skye's actual services
- Native American-owned status surfaced as a differentiator in relevant pitch contexts (government, enterprise DEI programs, franchise networks)
- Customizable per client vertical or region if needed

### 1.5 Content Management
- **Google Sheets backend** — Lakota Skye team updates pitch content, objections, verticals, and service descriptions directly
- No developer required for content additions or edits
- Content versioning via sheet history — nothing is permanently lost
- Instant publishing — changes reflect in the app immediately
- Google Sheets handles the content layer; Supabase handles performance tracking and live installer data (see Part 4)

### 1.6 Credential & Certification Reference
- Searchable library of approved installer certifications and what they mean
- Helps sales reps speak intelligently about installer qualifications during pitches
- Ties directly into Skyenet installer profiles for live data

---

## Part 2 — Beyond Channel Rocket (What We Add)

These features have no equivalent in Channel Rocket and represent the next generation of sales enablement for the sign installation and graphics industry.

### 2.1 AI-Generated Pitch Content (Powered by Claude AI)
- Sales rep selects filters (vertical + service + audience) and Claude AI generates a **custom pitch on demand**
- Powered by the **Claude API (Anthropic)** — no pre-written static cards required
- Every pitch is unique, contextual, and current — never stale
- Tone and language automatically calibrated to the selected buyer persona — a VP of Brand hears a different pitch than a general contractor
- The **"One partner. Total alignment."** narrative is woven into every pitch — design, print management, and installation as a single unified offering
- Optional: rep inputs specific client name or detail for hyper-personalized output
- Generates talking points, objection handlers, and suggested next steps simultaneously
- Claude AI draws from the Google Sheets content library — grounded in Lakota Skye's real services, real differentiators, and real proof points

### 2.2 Live Installer Network as Proof Points
- During a sales pitch, rep can pull up **real Skyenet data** for the prospect's region
- "We have 14 verified, credentialed installers within 50 miles of your locations"
- Installer tier, ratings, and certifications surfaced live — not hypothetical
- Geographic coverage map embeddable directly in pitch presentation — all 50 states
- Turns the installer network into a live, credible sales asset

### 2.3 Performance Intelligence
- Track which pitch combinations are being used most
- Tag pitches that resulted in a follow-up meeting or closed deal
- System surfaces which content combinations perform best by vertical, region, and audience over time
- A feedback loop Channel Rocket never had — the platform gets smarter over time
- Performance data stored in **Supabase** for reliable querying and analytics
- Dashboard view of pitch performance accessible in Skyeops

### 2.4 Real Project Data as Social Proof
- Pull completed project data from Skyecast (project management module) and Skyeops into pitch cards automatically
- "We have completed 47 verified sign installations across 12 states in the last 90 days"
- Client proof points reference recognizable enterprise brands — retail chains, hospitality groups, QSR networks, healthcare systems
- Photo documentation from Skyefield becomes live portfolio content in pitches
- Client testimonials and satisfaction scores feed into proof point cards
- Everything is real, verified, and current — not marketing copy

### 2.5 Objection Handling Library
- Dedicated filterable library of common objections by vertical and audience
- Claude AI generates suggested responses based on context and Lakota Skye's specific differentiators
- Reps can contribute new objections and responses from the field
- Grows more robust over time as the sales team documents real conversations

### 2.6 Pitch Builder
- Rep selects filters, Claude AI generates base pitch, rep customizes before a call
- Save custom pitches for recurring client types
- Share pitches across the sales team
- Export as a formatted PDF or shareable link for pre-call preparation

### 2.7 Industry-Specific Taxonomy
Filter dimensions built specifically for the sign installation and graphics industry — not IT/VAR sales.

- **Verticals**: retail, QSR, hospitality, healthcare, education, government, commercial real estate, event & tradeshow, franchise networks, multi-location brands
- **Service types**: sign installation, fleet graphics, brand rollouts, art & mural installation, ADA/wayfinding, environmental graphics, event & tradeshow, survey & auditing, design services, print management
- **Problem types**: installer availability, geographic coverage, quality control, compliance, brand consistency, speed to completion, single-source accountability
- **Audience types**: VP of Brand, Director of Retail Experience, franchise operations director, regional facilities manager, national accounts director, general contractor, brand manager, procurement
- Fully customizable and expandable as Lakota Skye enters new markets

### 2.8 Skyenet Integration (Installer Discovery Layer)
- Sales reps can search and filter the national installer network from within Skyepitch
- Filter by state, region, certification, tier, rating, and availability
- Filterable US map showing verified installer coverage nationally — all 50 states
- Installers have full profiles — credentials, experience, job history, ratings
- Installer data stored and queried via **Supabase** for fast, reliable performance
- Replaces the trade show and word-of-mouth model with verified data-driven discovery
- Positions Lakota Skye as the authoritative source for national sign installation discovery

### 2.9 Content Ownership & Control
- Pitch content and taxonomy live in Google Sheets — Lakota Skye owns it permanently
- No licensing fees, no vendor dependency, no waiting on outside updates
- Content reflects actual current services, not generic industry templates
- Protected config sheet ensures critical infrastructure is never accidentally modified
- Performance and installer data stored in Supabase — also fully owned and controlled by Lakota Skye

---

## Part 3 — Future Expansion (Skyepitch Roadmap)

These features are planned for future development phases.

### 3.1 Skyelearn Integration
- Reps earn certifications through built-in training modules
- Training completion unlocks access to advanced pitch content tiers
- Installer training and rep training share the same credentialing framework

### 3.2 CRM Sync
- Pitch activity logged automatically to connected CRM (HubSpot, Salesforce)
- Client profile data flows back into pitch personalization
- Follow-up tasks generated automatically from pitch outcomes

### 3.3 Competitor Intelligence Layer
- Filterable library of competitive positioning content
- Battle cards by competitor, updated as market evolves
- Claude AI generates differentiation talking points on demand

### 3.4 Skyepitch API
- Open API allowing third-party tools to query pitch content
- Partner companies can embed Skyepitch content in their own workflows
- Potential licensing opportunity for other installation network operators nationally

---

## Part 4 — Technical Stack

| Component | Technology | Purpose |
|---|---|---|
| Front End | React + TypeScript (PWA) | Mobile-first, no app store required |
| Hosting / Edge | Cloudflare Workers | Fast global delivery, existing SkyeHub infra |
| Content Backend | Google Sheets + Apps Script | Pitch content, taxonomy, objections — team managed |
| Performance & Installer Data | Supabase (PostgreSQL) | Analytics, installer profiles, pitch tracking |
| AI Layer | Claude API (Anthropic) | Pitch generation, objection handling, personalization |
| Map / Geography | SimpleMaps SVG + LAEA Projection | National installer coverage map |
| Domain | skyehub.lakotasky.com | Existing SkyeHub infrastructure |
| Auth | Token-based access | Existing SkyeHub model |
| PDF Export | Google Apps Script / DocumentApp | Formatted pitch export |

### 4.1 Database Architecture — Why Two Data Layers

Skyepitch uses a deliberate hybrid data approach optimized for different needs:

- **Google Sheets** handles pitch content, taxonomy, objection libraries, and service descriptions. This keeps content editable by the Lakota Skye team directly — no developer required, instant publishing, full version history.
- **Supabase (PostgreSQL)** handles everything that needs to be fast, relational, and queryable at scale: installer profiles and certifications, pitch performance tracking, usage analytics, and live project data ingested from Skyeops and Skyecast.
- **Claude AI** sits between the two — pulling relevant context from both layers to generate pitch content that is grounded in real data, not generic templates.

---

## Part 5 — Channel Rocket vs. Skyepitch Summary

| Feature | Channel Rocket | Skyepitch |
|---|---|---|
| Content delivery | Static pre-written cards | Claude AI-generated on demand |
| Filter dimensions | Product, problem, audience, vertical | Service, vertical, persona, problem, region |
| Industry focus | IT / VAR channel sales | Sign installation & graphics — purpose built |
| Mobile access | Native app | PWA — no install required |
| Content updates | Vendor managed, slow | Google Sheets — instant, team managed |
| Installer discovery | Not applicable | Live Skyenet map with verified profiles |
| Performance tracking | None | Built-in analytics via Supabase |
| Real project data | None | Live from Skyeops and Skyefield |
| AI layer | None | Claude API — pitches, objections, personalization |
| Objection handling | Static, if any | Claude AI — contextual, field-contributed, growing |
| Native-owned positioning | Not applicable | Surfaced automatically for relevant verticals |
| Ownership | Licensed, ongoing fees | Fully owned by Lakota Skye |
| Network / marketplace | None | Two-sided installer marketplace via Skyenet |
| Age of technology | 2014 | React + TypeScript PWA, 2025+ |

---

## Part 6 — Strategic Value

Skyepitch is not just a sales tool. It is a **competitive moat** for Lakota Skye.

- It replaces an aging third-party platform with a purpose-built owned asset tailored to the sign installation and graphics industry
- It makes the installer network, project history, and real client data live proof points in every sales conversation
- It turns the "One partner. Total alignment." story into something reps can demonstrate — not just say
- It surfaces Lakota Skye's Native American-owned status as a differentiator where it matters most
- It gets smarter over time through Claude AI feedback loops and performance tracking
- It positions Lakota Skye as the only company in the sign installation industry with this level of sales infrastructure
- It is extensible — future modules (Skyelearn, Skyepay, Skyebid) build naturally on top of it
- It creates a platform licensing opportunity for other installation network operators nationally

---

*Document prepared for Lakota Skye | SkyeHub Platform Development | Version 2.0*
*lakotaskye.com | Sales@lakotaskye.com | 720-793-7930 | Wheat Ridge, CO*
