import { Code2, Layers, FileText, Zap, Bot, Globe, Braces, Server, Database, Cloud, Cpu, Blocks } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                About Dionis Markov
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Building at the Intersection of{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  AI, Cloud & Web3
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Founder and lead developer at ValtheraLabs. I build AI-powered platforms, cloud
              infrastructure, blockchain systems, and open-source developer tools — shipping
              production software across the full stack.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Full-Stack Engineer & Open Source Builder
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a 30-year-old full-stack software engineer based in Croatia. I also go by
                Trinexxx online. My work spans the entire development stack — from AI inference
                engines and microservices backends to modern web frontends and blockchain smart
                contracts.
              </p>

              <p>
                As the founder of ValtheraLabs, I lead the development of an ecosystem of
                AI-powered applications, SaaS platforms, and developer tools. Every project is
                built in public, with an emphasis on clean architecture, practical engineering,
                and real-world utility.
              </p>

              <p>
                This portfolio is a living showcase of that work — a window into active projects,
                technical explorations, and tools I ship. All code is open source and available
                on GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              What I Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Full-Stack Engineering
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "AI & Agents",
                description:
                  "LLM inference pipelines, agent orchestration with MCP, embeddings, and RAG systems for production AI applications.",
              },
              {
                icon: Code2,
                title: "Cloud Infrastructure",
                description:
                  "Scalable microservices with FastAPI, Docker Swarm, PostgreSQL, and bare-metal deployment for cost-effective hosting.",
              },
              {
                icon: Layers,
                title: "Web Development",
                description:
                  "Modern frontends with Next.js, React, TypeScript, and Tailwind CSS. Performance-optimized, accessible, and responsive.",
              },
              {
                icon: Globe,
                title: "Blockchain & Web3",
                description:
                  "Solidity smart contracts, upgradeable proxy patterns, and decentralized infrastructure for Web3 platforms.",
              },
              {
                icon: Zap,
                title: "Developer Tools",
                description:
                  "Open-source starters, Docker images, CI/CD templates, and automation tools that accelerate development workflows.",
              },
              {
                icon: FileText,
                title: "Open Source",
                description:
                  "All projects built in public on GitHub. Transparent development, collaborative patterns, and community-driven iteration.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 border-t border-border/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">Technology</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tech Stack</h2>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
            {[
              { category: "Languages", icon: Braces, items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "Go", "Rust", "PHP"] },
              { category: "Frontend", icon: Globe, items: ["React", "Next.js", "Vue", "Tailwind CSS", "HTML", "CSS"] },
              { category: "Backend", icon: Server, items: ["Node.js", "Express", "NestJS", "FastAPI", "REST APIs"] },
              { category: "Database", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"] },
              { category: "DevOps & Cloud", icon: Cloud, items: ["Docker", "Linux", "Git", "GitHub", "Cloudflare", "Bash"] },
              { category: "AI & Web3", icon: Cpu, items: ["Ollama", "Qwen Coder", "RAG", "Solidity", "Smart Contracts"] },
            ].map((group, index) => (
              <div key={index} className="flex items-start gap-4 p-5 sm:p-6 border-b border-border/30 last:border-b-0 hover:bg-secondary/20 transition-colors">
                <group.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold block mb-3">{group.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-md border border-border/60 bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
