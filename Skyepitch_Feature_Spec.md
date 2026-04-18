# Skyepitch — Feature Specification
### SkyeHub Platform | Lakota Skye
#### Replacing & Surpassing Channel Rocket for the Installation Industry

---

## Overview

Skyepitch is the sales enablement module of SkyeHub — purpose-built for the installation industry. Where Channel Rocket offered static, pre-written pitch content for IT channel sales reps, Skyepitch delivers AI-generated, real-time pitch content tailored to Lakota Skye's services, installer network, and client base. It is filterable, mobile-first, data-driven, and fully owned by Lakota Skye.

---

## Part 1 — Channel Rocket Parity (What We Replicate)

These features match or directly replace everything Channel Rocket currently offers.

### 1.1 Filterable Content Library
- Filter pitch content by **industry vertical** (retail, hospitality, healthcare, construction, etc.)
- Filter by **problem / pain point** (project delays, installer availability, quality control, compliance)
- Filter by **audience / buyer persona** (owner, ops director, facilities manager, procurement)
- Filter by **service type** (installation, inspection, project management, network services)
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
- Content tone and terminology specific to the installation industry
- No generic vendor templates — every card reflects Lakota Skye's actual services
- Customizable per client vertical or region if needed

### 1.5 Content Management
- Google Sheets backend — Lakota Skye team updates content directly
- No developer required for content additions or edits
- Content versioning via sheet history — nothing is permanently lost
- Instant publishing — changes reflect in the app immediately

### 1.6 Credential & Certification Reference
- Searchable library of approved installer certifications and what they mean
- Helps sales reps speak intelligently about installer qualifications during pitches
- Ties directly into Skyenet installer profiles for live data

---

## Part 2 — Beyond Channel Rocket (What We Add)

These features have no equivalent in Channel Rocket and represent the next generation of sales enablement for the installation industry.

### 2.1 AI-Generated Pitch Content
- Sales rep selects filters (vertical + problem + audience) and AI generates a **custom pitch on demand**
- Powered by Claude API — no pre-written static cards required
- Every pitch is unique, contextual, and current — never stale
- Tone and language automatically calibrated to the selected buyer persona
- Optional: rep inputs specific client name or detail for hyper-personalized output
- Generates talking points, objection handlers, and suggested next steps simultaneously

### 2.2 Live Installer Network as Proof Points
- During a sales pitch, rep can pull up **real Skyenet data** for the prospect's region
- "We have 14 verified, credentialed installers within 50 miles of your locations"
- Installer tier, ratings, and certifications surfaced live — not hypothetical
- Geographic coverage map embeddable directly in pitch presentation
- Turns the installer network into a live, credible sales asset

### 2.3 Performance Intelligence
- Track which pitch combinations are being used most
- Tag pitches that resulted in a follow-up meeting or closed deal
- Over time the system surfaces which content combinations perform best by vertical, region, and audience
- A feedback loop Channel Rocket has never had — the platform gets smarter over time
- Dashboard view of pitch performance accessible in Skyeops

### 2.4 Real Project Data as Social Proof
- Pull completed project data from Skyecast and Skyeops into pitch cards automatically
- "We have completed 47 verified installations across 12 states in the last 90 days"
- Photo documentation from Skyefield becomes live portfolio content in pitches
- Client testimonials and satisfaction scores feed into proof point cards
- Everything is real, verified, and current — not marketing copy

### 2.5 Objection Handling Library
- Dedicated filterable library of common objections by vertical and audience
- AI generates suggested responses based on context
- Reps can contribute new objections and responses from the field
- Grows more robust over time as the sales team documents real conversations

### 2.6 Pitch Builder
- Rep selects filters, AI generates base pitch, rep customizes before a call
- Save custom pitches for recurring client types
- Share pitches across the sales team
- Export as a formatted PDF or shareable link for pre-call preparation

### 2.7 Industry-Specific Taxonomy
- Filter dimensions built specifically for the installation industry — not IT/VAR sales
- Verticals: retail, QSR, hospitality, healthcare, education, government, commercial real estate
- Problem types: installer availability, geographic coverage, quality control, compliance, speed to completion
- Audience types: regional facilities manager, national accounts director, general contractor, brand manager
- Fully customizable and expandable as Lakota Skye enters new markets

### 2.8 Skyenet Integration (Installer Discovery Layer)
- Sales reps can search and filter the national installer network from within Skyepitch
- Filter by state, region, certification, tier, rating, and availability
- Filterable US map showing verified installer coverage nationally
- Installers have full profiles — credentials, experience, job history, ratings
- Replaces the trade show and word-of-mouth model with verified data-driven discovery
- Positions Lakota Skye as the authoritative source for national installer discovery

### 2.9 Content Ownership & Control
- All content lives in Google Sheets — Lakota Skye owns it permanently
- No licensing fees, no vendor dependency, no waiting on outside updates
- Content reflects actual current services, not generic industry templates
- Protected config sheet ensures critical infrastructure is never accidentally modified

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
- AI generates differentiation talking points on demand

### 3.4 Skyepitch API
- Open API allowing third-party tools to query pitch content
- Partner companies can embed Skyepitch content in their own workflows
- Potential licensing opportunity for other installation network operators

---

## Part 4 — Technical Stack

| Component | Technology |
|---|---|
| Front End | PWA via Cloudflare Workers |
| Content Backend | Google Sheets + Apps Script |
| AI Layer | Claude API (Anthropic) |
| Map / Geography | SimpleMaps SVG + LAEA Projection |
| Hosting | skyehub.lakotasky.com |
| Auth | Token-based access (existing SkyeHub model) |
| PDF Export | Google Apps Script / DocumentApp |

---

## Part 5 — Channel Rocket vs. Skyepitch Summary

| Feature | Channel Rocket | Skyepitch |
|---|---|---|
| Content delivery | Static pre-written cards | AI-generated on demand |
| Filter dimensions | Product, problem, audience, vertical | Industry, problem, persona, service, region |
| Mobile access | Native app | PWA — no install required |
| Content updates | Vendor managed, slow | Google Sheets — instant, team managed |
| Installer discovery | Not applicable | Live Skyenet map with verified profiles |
| Performance tracking | None | Built-in, feeds back into content quality |
| Real project data | None | Live from Skyeops and Skyefield |
| Industry focus | IT / VAR channel sales | Installation industry — purpose built |
| Ownership | Licensed, ongoing fees | Fully owned by Lakota Skye |
| AI layer | None | Claude API — pitches, objections, personalization |
| Network / marketplace | None | Two-sided installer marketplace via Skyenet |
| Age of technology | 2014 | Modern PWA stack, 2025+ |

---

## Part 6 — Strategic Value

Skyepitch is not just a sales tool. It is a **competitive moat** for Lakota Skye.

- It replaces an aging third-party platform with a purpose-built owned asset
- It makes the installer network a live, credible proof point in every sales conversation
- It gets smarter over time through performance tracking and AI feedback loops
- It positions Lakota Skye as the only company in the installation industry with this level of sales infrastructure
- It is extensible — future modules (Skyelearn, Skyepay, Skyebid) build naturally on top of it
- It creates a platform licensing opportunity for other installation network operators nationally

---

*Document prepared for Lakota Skye | SkyeHub Platform Development | Version 1.0*
