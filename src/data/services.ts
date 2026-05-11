export interface SubTopic {
  title: string;
  intro: string;
  tags?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface ServiceData {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  tags: string[];
  featured: boolean;
  gradient: string;
  chapters: Chapter[];
}

export const services: ServiceData[] = [
  {
    slug: "agentic-ai-systems",
    icon: "🤖",
    title: "Agentic AI Systems",
    shortDescription:
      "Autonomous agent architectures that reason, plan, and execute multi-step workflows. Built on modern LLM orchestration frameworks with tool-calling, memory, and retrieval-augmented generation.",
    tags: ["LangChain", "CrewAI", "AutoGen"],
    featured: true,
    gradient: "from-tam-cyan/20 via-tam-cyan/5 to-transparent",
    chapters: [
      {
        id: "overview",
        title: "Overview",
        subtopics: [
          { title: "What are agentic AI systems?", intro: "Software agents that autonomously reason, plan, and take action across your tools and data — replacing manual multi-step workflows with intelligent automation.", tags: ["LLM", "Agents"] },
          { title: "Why agents over chatbots?", intro: "Chatbots answer questions. Agents complete tasks. They chain decisions, call APIs, query databases, and adapt their strategy in real-time.", tags: ["Autonomy", "Tool-use"] },
          { title: "Our approach", intro: "We build production-grade agent systems — not demos. Every agent ships with monitoring, fallback logic, human-in-the-loop checkpoints, and cost controls.", tags: ["Production", "Reliability"] },
        ],
      },
      {
        id: "who-this-is-for",
        title: "Who this is for",
        subtopics: [
          { title: "Founders scaling operations", intro: "You have repeatable workflows that eat 10+ hours per week. You need an AI teammate that handles them autonomously.", tags: ["Startups", "Scale"] },
          { title: "Teams drowning in manual processes", intro: "Lead qualification, content pipelines, customer onboarding — any multi-step process with clear logic is a candidate for an agent.", tags: ["Operations"] },
          { title: "Companies exploring AI seriously", intro: "You've played with ChatGPT. Now you want AI embedded into your actual business processes with real ROI.", tags: ["Enterprise"] },
        ],
      },
      {
        id: "use-cases",
        title: "Example use cases",
        subtopics: [
          { title: "Autonomous lead researcher", intro: "Agent scrapes LinkedIn, enriches with company data, scores fit, drafts personalized outreach, and queues in your CRM.", tags: ["Sales", "CRM"] },
          { title: "Multi-step content pipeline", intro: "From topic research to SEO-optimized draft to image generation to platform formatting — one trigger, full pipeline.", tags: ["Content", "Marketing"] },
          { title: "Customer support triage", intro: "Classifies tickets, pulls relevant docs, drafts responses, escalates edge cases to humans with full context attached.", tags: ["Support", "RAG"] },
          { title: "Data analysis agent", intro: "Connects to your database, answers natural language questions with charts, identifies anomalies, and emails weekly summaries.", tags: ["Analytics", "SQL"] },
        ],
      },
      {
        id: "deliverables",
        title: "What's included",
        subtopics: [
          { title: "Agent architecture design", intro: "System diagram, tool definitions, memory strategy, and orchestration flow — mapped before any code is written." },
          { title: "Production agent codebase", intro: "Clean, typed, tested code with LangChain/CrewAI, deployed to your infrastructure with CI/CD." },
          { title: "Monitoring dashboard", intro: "Track agent runs, token usage, success rates, and edge cases in real-time." },
          { title: "Documentation & handoff", intro: "Full technical docs, prompt templates, and a recorded walkthrough so your team can maintain and extend the system." },
        ],
      },
      {
        id: "stack",
        title: "Implementation & stack",
        subtopics: [
          { title: "LangChain / LangGraph", intro: "For complex multi-step agent orchestration with state machines, conditional branching, and tool routing.", tags: ["LangChain", "Python"] },
          { title: "CrewAI / AutoGen", intro: "For multi-agent collaboration — specialist agents that delegate, review each other's work, and converge on results.", tags: ["CrewAI", "AutoGen"] },
          { title: "Vector databases", intro: "Pinecone, Weaviate, or Supabase pgvector for retrieval-augmented generation with your proprietary data.", tags: ["Pinecone", "RAG"] },
          { title: "LLM providers", intro: "GPT-4o, Claude 3.5, Gemini — we pick the best model for each sub-task based on speed, cost, and capability.", tags: ["OpenAI", "Anthropic"] },
        ],
      },
      {
        id: "timeline",
        title: "Timeline & collaboration",
        subtopics: [
          { title: "Week 1–2: Discovery & architecture", intro: "We map your workflows, identify agent candidates, and design the system architecture together." },
          { title: "Week 3–5: Build & iterate", intro: "Rapid development with weekly demos. You see working agents evolving in real-time." },
          { title: "Week 6: Deploy & monitor", intro: "Production deployment with monitoring, load testing, and a 2-week support window for tuning." },
        ],
      },
      {
        id: "faqs",
        title: "FAQs",
        subtopics: [
          { title: "How much does it cost?", intro: "Projects start at $5K for a single focused agent. Complex multi-agent systems range $15K–$40K depending on scope." },
          { title: "Do I need my own OpenAI key?", intro: "Yes — you own your API keys and data. We set everything up on your accounts for full ownership and control." },
          { title: "Can agents make mistakes?", intro: "Yes, which is why we build in guardrails, confidence thresholds, and human-in-the-loop checkpoints for critical decisions." },
          { title: "What if my use case is unique?", intro: "Most are. We love novel problems. Book a call and we'll tell you honestly whether an agent is the right solution." },
        ],
      },
    ],
  },
  {
    slug: "ai-native-websites",
    icon: "🌐",
    title: "AI-Native Websites",
    shortDescription:
      "Websites that think. Conversational interfaces, dynamic personalization, intelligent search, and AI-powered content generation built into the core experience.",
    tags: ["Next.js", "React", "Three.js"],
    featured: false,
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    chapters: [
      { id: "overview", title: "Overview", subtopics: [
        { title: "Beyond static pages", intro: "AI-native websites adapt to each visitor — surfacing relevant content, answering questions in real-time, and generating personalized experiences.", tags: ["Personalization"] },
        { title: "Conversational interfaces", intro: "Embedded AI assistants that understand your product, answer questions, and guide visitors to the right service or action.", tags: ["Chat", "RAG"] },
        { title: "Performance-first", intro: "Built on Next.js with edge rendering, optimized Core Web Vitals, and progressive enhancement for any device.", tags: ["Next.js", "Edge"] },
      ]},
      { id: "who-this-is-for", title: "Who this is for", subtopics: [
        { title: "Brands ready to stand out", intro: "You want a website that's not just beautiful but intelligent — one that actively converts visitors into customers." },
        { title: "SaaS companies", intro: "Interactive demos, AI-powered docs search, and dynamic onboarding flows that reduce support load." },
        { title: "Content-heavy businesses", intro: "Intelligent content discovery, auto-generated summaries, and semantic search across thousands of pages." },
      ]},
      { id: "use-cases", title: "Example use cases", subtopics: [
        { title: "AI product configurator", intro: "Visitors describe what they need in plain language — the website recommends the right product/plan with dynamic pricing.", tags: ["E-commerce"] },
        { title: "Smart documentation", intro: "AI-powered search that understands intent, provides direct answers with source links, and learns from usage patterns.", tags: ["Docs", "Search"] },
        { title: "Dynamic landing pages", intro: "Pages that adjust headlines, CTAs, and content based on traffic source, visitor behavior, and real-time A/B testing.", tags: ["Marketing", "CRO"] },
      ]},
      { id: "deliverables", title: "What's included", subtopics: [
        { title: "Full website build", intro: "Design, development, and deployment of a Next.js website with AI features integrated from day one." },
        { title: "AI integration layer", intro: "RAG pipeline, embedding generation, and API connections for all AI-powered features." },
        { title: "CMS & content pipeline", intro: "Headless CMS setup with AI-assisted content workflows for easy updates without developer involvement." },
        { title: "Analytics & optimization", intro: "Tracking setup, conversion funnel analysis, and recommendations for continuous improvement." },
      ]},
      { id: "stack", title: "Implementation & stack", subtopics: [
        { title: "Next.js 15 + React 19", intro: "Server components, streaming, and edge rendering for maximum performance and SEO.", tags: ["Next.js", "React"] },
        { title: "Three.js / R3F", intro: "Immersive 3D elements, product visualizations, and interactive experiences.", tags: ["Three.js", "WebGL"] },
        { title: "Vercel AI SDK", intro: "Streaming chat interfaces, function calling, and AI-powered server actions.", tags: ["Vercel", "AI SDK"] },
      ]},
      { id: "timeline", title: "Timeline & collaboration", subtopics: [
        { title: "Week 1–2: Strategy & design", intro: "Brand audit, wireframes, design system, and AI feature specification." },
        { title: "Week 3–6: Development", intro: "Component-driven development with weekly design reviews and progressive feature deployment." },
        { title: "Week 7–8: Launch & optimize", intro: "Deployment, performance tuning, SEO audit, and post-launch monitoring." },
      ]},
      { id: "faqs", title: "FAQs", subtopics: [
        { title: "Can I update content myself?", intro: "Absolutely. We set up a CMS that your team can use without any technical knowledge." },
        { title: "Will it be fast?", intro: "Performance is non-negotiable. We target 90+ Lighthouse scores and sub-2s LCP on every build." },
      ]},
    ],
  },
  {
    slug: "conversational-ai-chatbots",
    icon: "💬",
    title: "Conversational AI & Chatbots",
    shortDescription:
      "Context-aware chatbots with natural dialogue, multi-turn reasoning, and seamless handoffs. Custom-trained on your knowledge base and brand voice.",
    tags: ["GPT", "Claude", "RAG"],
    featured: false,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    chapters: [
      { id: "overview", title: "Overview", subtopics: [
        { title: "Not your average chatbot", intro: "We build conversational AI that actually understands context, remembers conversation history, and provides genuinely helpful responses.", tags: ["NLP", "Context"] },
        { title: "Trained on your data", intro: "Your knowledge base, docs, FAQs, and brand guidelines are embedded into the model's context — it speaks your language.", tags: ["RAG", "Fine-tuning"] },
      ]},
      { id: "who-this-is-for", title: "Who this is for", subtopics: [
        { title: "Support teams at scale", intro: "Handle thousands of conversations simultaneously without losing quality or context." },
        { title: "E-commerce brands", intro: "Product recommendations, order tracking, and returns handling — all through natural conversation." },
      ]},
      { id: "use-cases", title: "Example use cases", subtopics: [
        { title: "WhatsApp business assistant", intro: "Full customer service via WhatsApp with order lookup, appointment booking, and FAQ handling.", tags: ["WhatsApp", "Twilio"] },
        { title: "Internal knowledge bot", intro: "Slack/Teams bot that answers employee questions by searching your Confluence, Notion, and internal docs.", tags: ["Slack", "Notion"] },
        { title: "Sales qualification bot", intro: "Website chat that qualifies leads, books demos, and syncs context to your CRM before the sales call.", tags: ["CRM", "Sales"] },
      ]},
      { id: "deliverables", title: "What's included", subtopics: [
        { title: "Custom chatbot build", intro: "End-to-end development including prompt engineering, RAG pipeline, and UI integration." },
        { title: "Knowledge base pipeline", intro: "Automated ingestion and embedding of your documents with scheduled refresh cycles." },
        { title: "Analytics dashboard", intro: "Conversation quality metrics, unresolved query tracking, and continuous improvement recommendations." },
      ]},
      { id: "stack", title: "Implementation & stack", subtopics: [
        { title: "LLM backbone", intro: "GPT-4o, Claude 3.5, or open-source models depending on your privacy and cost requirements.", tags: ["OpenAI", "Claude"] },
        { title: "RAG infrastructure", intro: "Pinecone or pgvector for semantic search, with chunking strategies optimized for your content type.", tags: ["Pinecone", "RAG"] },
      ]},
      { id: "timeline", title: "Timeline", subtopics: [
        { title: "2–4 weeks", intro: "From knowledge base ingestion to deployed chatbot, depending on integration complexity and content volume." },
      ]},
      { id: "faqs", title: "FAQs", subtopics: [
        { title: "Can it handle multiple languages?", intro: "Yes. Modern LLMs handle 50+ languages natively. We can add language detection and routing for multilingual support." },
        { title: "What about hallucinations?", intro: "RAG grounds responses in your actual data. We add citation links and confidence scoring to minimize hallucinated content." },
      ]},
    ],
  },
  {
    slug: "workflow-automation",
    icon: "⚡",
    title: "Workflow Automation",
    shortDescription:
      "End-to-end automation of business processes using AI decision engines. From lead qualification to content pipelines, we eliminate manual bottlenecks.",
    tags: ["n8n", "Make", "Custom APIs"],
    featured: false,
    gradient: "from-green-500/20 via-green-500/5 to-transparent",
    chapters: [
      { id: "overview", title: "Overview", subtopics: [
        { title: "AI-powered automation", intro: "Not just connecting apps — we add AI decision-making at every junction so your workflows handle edge cases intelligently.", tags: ["AI", "Logic"] },
        { title: "Zero manual bottlenecks", intro: "Every repeatable process in your business can be automated. We find the highest-ROI candidates and build them first.", tags: ["ROI", "Efficiency"] },
      ]},
      { id: "who-this-is-for", title: "Who this is for", subtopics: [
        { title: "Operations leaders", intro: "You're spending too much time on processes that should run themselves. You need automation that's reliable and intelligent." },
        { title: "Marketing teams", intro: "Content repurposing, social scheduling, lead scoring, and reporting — automated with AI quality gates." },
      ]},
      { id: "use-cases", title: "Example use cases", subtopics: [
        { title: "Lead-to-close pipeline", intro: "Incoming lead → AI qualification → CRM update → personalized email sequence → meeting scheduler → follow-up — fully automated.", tags: ["Sales", "CRM"] },
        { title: "Content repurposing engine", intro: "Blog post → Twitter thread → LinkedIn post → newsletter segment → video script — one input, five outputs.", tags: ["Content", "Social"] },
        { title: "Invoice & payment tracking", intro: "Auto-generate invoices, send reminders, reconcile payments, and flag overdue accounts.", tags: ["Finance"] },
      ]},
      { id: "deliverables", title: "What's included", subtopics: [
        { title: "Automation architecture", intro: "Visual workflow maps, integration specs, and error handling strategies documented before build." },
        { title: "n8n / Make workflows", intro: "Production workflows with error handling, retry logic, and monitoring alerts." },
        { title: "Custom API connectors", intro: "For tools that don't have native integrations, we build custom API bridges." },
      ]},
      { id: "stack", title: "Implementation & stack", subtopics: [
        { title: "n8n (self-hosted)", intro: "Full control, no vendor lock-in, unlimited executions. Our preferred platform for complex workflows.", tags: ["n8n"] },
        { title: "Make / Zapier", intro: "For simpler automations or when your team needs a visual builder they can modify themselves.", tags: ["Make", "Zapier"] },
      ]},
      { id: "timeline", title: "Timeline", subtopics: [
        { title: "1–3 weeks per workflow", intro: "Simple automations in days, complex multi-system orchestrations in 2–3 weeks." },
      ]},
      { id: "faqs", title: "FAQs", subtopics: [
        { title: "What if something breaks?", intro: "Every workflow has error handling, retry logic, and alert notifications. We also include a support period post-launch." },
      ]},
    ],
  },
  {
    slug: "ai-strategy-consulting",
    icon: "🧠",
    title: "AI Strategy & Consulting",
    shortDescription:
      "Map your operations, identify high-impact AI opportunities, and build a roadmap from proof-of-concept to production. No fluff — just actionable architecture.",
    tags: ["Assessment", "Roadmap", "ROI"],
    featured: false,
    gradient: "from-tam-amber/20 via-tam-amber/5 to-transparent",
    chapters: [
      { id: "overview", title: "Overview", subtopics: [
        { title: "Strategy before code", intro: "Most AI projects fail because they start with technology instead of business problems. We start with your operations and work backward to the right AI solution.", tags: ["Strategy"] },
        { title: "Actionable roadmaps", intro: "You get a prioritized plan with clear ROI estimates, build-vs-buy recommendations, and a realistic timeline — not a 50-page report that gathers dust." },
      ]},
      { id: "who-this-is-for", title: "Who this is for", subtopics: [
        { title: "Companies starting their AI journey", intro: "You know AI can help but don't know where to start or what's realistic. We cut through the hype." },
        { title: "Teams with failed AI projects", intro: "You've tried AI tools or hired ML engineers but haven't seen ROI. We diagnose why and fix the approach." },
      ]},
      { id: "use-cases", title: "What we assess", subtopics: [
        { title: "Process audit", intro: "We map every repeatable process in your business and score each one for automation potential, impact, and feasibility.", tags: ["Audit"] },
        { title: "Tech stack review", intro: "Evaluate your current tools, data infrastructure, and team capabilities to identify gaps and opportunities.", tags: ["Architecture"] },
        { title: "AI opportunity scoring", intro: "Each opportunity gets a score based on business impact, technical feasibility, data readiness, and time-to-value.", tags: ["ROI", "Scoring"] },
      ]},
      { id: "deliverables", title: "What's included", subtopics: [
        { title: "AI readiness assessment", intro: "A thorough evaluation of your data, processes, and team capabilities against AI requirements." },
        { title: "Prioritized roadmap", intro: "A phased plan with quick wins (weeks 1–4), medium-term projects (months 2–3), and long-term vision." },
        { title: "Architecture blueprint", intro: "Technical specifications for recommended solutions including LLM selection, infrastructure, and integration points." },
      ]},
      { id: "stack", title: "Frameworks we use", subtopics: [
        { title: "Custom assessment framework", intro: "Proprietary scoring model that evaluates 30+ factors across data quality, process complexity, and business impact." },
      ]},
      { id: "timeline", title: "Timeline", subtopics: [
        { title: "2–3 weeks", intro: "From kickoff interviews to final presentation and roadmap delivery." },
      ]},
      { id: "faqs", title: "FAQs", subtopics: [
        { title: "Do you build what you recommend?", intro: "We can, but there's no obligation. The roadmap is yours to execute with us, your team, or another vendor." },
        { title: "Is this just a sales pitch for your services?", intro: "No. We regularly recommend off-the-shelf tools, hiring decisions, or 'don't build this yet' when that's the honest answer." },
      ]},
    ],
  },
  {
    slug: "3d-immersive-experiences",
    icon: "🔮",
    title: "3D & Immersive Experiences",
    shortDescription:
      "WebGL-powered 3D product showcases, data visualizations, and immersive scroll experiences that create lasting impressions and elevate brand perception.",
    tags: ["Three.js", "GSAP", "WebGL"],
    featured: false,
    gradient: "from-pink-500/20 via-pink-500/5 to-transparent",
    chapters: [
      { id: "overview", title: "Overview", subtopics: [
        { title: "The web is 3D now", intro: "Modern browsers can render stunning 3D experiences at 60fps. We use this to create product showcases, brand stories, and data visualizations that no static page can match.", tags: ["WebGL", "3D"] },
        { title: "Performance obsessed", intro: "Beautiful means nothing if it lags. We optimize every polygon, texture, and shader for smooth performance across devices.", tags: ["Performance"] },
      ]},
      { id: "who-this-is-for", title: "Who this is for", subtopics: [
        { title: "Brands that want to be remembered", intro: "If your competitors have cookie-cutter websites, a 3D experience puts you in a completely different league." },
        { title: "Product companies", intro: "Show your product from every angle, let visitors customize materials and colors, and add AR preview capabilities." },
      ]},
      { id: "use-cases", title: "Example use cases", subtopics: [
        { title: "3D product configurator", intro: "Customers rotate, zoom, customize materials, and see real-time pricing — all in the browser, no app required.", tags: ["E-commerce", "WebGL"] },
        { title: "Immersive scroll experience", intro: "The page itself becomes a journey — 3D scenes transform as users scroll, revealing your story in a cinematic way.", tags: ["Scroll", "GSAP"] },
        { title: "Data visualization", intro: "Complex datasets rendered as interactive 3D landscapes, networks, or timelines that make patterns instantly visible.", tags: ["Data", "Viz"] },
      ]},
      { id: "deliverables", title: "What's included", subtopics: [
        { title: "3D scene development", intro: "Custom Three.js/R3F scenes optimized for web with glTF assets, custom shaders, and interaction logic." },
        { title: "Scroll-driven animations", intro: "GSAP ScrollTrigger integration for cinematic, scroll-linked 3D transitions." },
        { title: "Mobile optimization", intro: "Adaptive quality levels that ensure smooth performance on phones and low-power devices." },
      ]},
      { id: "stack", title: "Implementation & stack", subtopics: [
        { title: "Three.js / React Three Fiber", intro: "The gold standard for web 3D. Component-driven 3D development with React's full ecosystem.", tags: ["Three.js", "R3F"] },
        { title: "GSAP ScrollTrigger", intro: "Frame-perfect scroll-linked animations that feel buttery smooth.", tags: ["GSAP"] },
        { title: "Spline / WebGi", intro: "For rapid prototyping and collaborative 3D design workflows.", tags: ["Spline"] },
      ]},
      { id: "timeline", title: "Timeline", subtopics: [
        { title: "3–8 weeks", intro: "Depending on scene complexity, number of interactive elements, and animation depth." },
      ]},
      { id: "faqs", title: "FAQs", subtopics: [
        { title: "Will it work on mobile?", intro: "Yes. We build progressive experiences — full 3D on powerful devices, graceful fallbacks on older ones." },
        { title: "Does 3D hurt SEO?", intro: "Not with our approach. 3D enhances the page but all content remains in accessible HTML. Search engines index everything." },
      ]},
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
