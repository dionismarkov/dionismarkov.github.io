"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Braces, Globe, Server, Database, Cloud, Cpu, Code2, Blocks, ShoppingBag, Wrench, Shield } from "lucide-react"

const focusAreas = [
  { label: "Artificial Intelligence", icon: Cpu, desc: "LLM pipelines, agents, RAG, embeddings" },
  { label: "Full Stack Engineering", icon: Code2, desc: "Frontend to backend, end-to-end" },
  { label: "Backend Systems", icon: Server, desc: "APIs, microservices, auth, data" },
  { label: "Cloud Infrastructure", icon: Cloud, desc: "Docker, bare-metal, CI/CD, Linux" },
  { label: "Blockchain & Web3", icon: Blocks, desc: "Solidity, smart contracts, DeFi" },
  { label: "SaaS Platforms", icon: ShoppingBag, desc: "Production apps, subscription stack" },
  { label: "Developer Tooling", icon: Wrench, desc: "Starters, Docker images, templates" },
  { label: "Cybersecurity", icon: Shield, desc: "Secure architecture, best practices" },
]

const techStack: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "Go", "Rust", "PHP"],
  Frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "NestJS", "FastAPI", "REST APIs"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
  "DevOps & Cloud": ["Docker", "Linux", "Git", "GitHub", "Cloudflare", "Bash"],
  "AI & Web3": ["Ollama", "Qwen Coder", "RAG", "Solidity", "Smart Contracts"],
}

const categoryIcons: Record<string, typeof Braces> = {
  Languages: Braces,
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  "DevOps & Cloud": Cloud,
  "AI & Web3": Cpu,
}

export function TechStack() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="stack" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className={cn("mb-10 sm:mb-14 space-y-3", isVisible && "animate-fade-in-up")}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Capabilities
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Stack & Focus</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            What I build with. Technologies, platforms, and domains I work across daily.
          </p>
        </div>

        {/* Focus Areas */}
        <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16", isVisible && "animate-fade-in-up stagger-2")}>
          {focusAreas.map((area, index) => (
            <div
              key={area.label}
              className="group rounded-xl border border-border/60 bg-card/40 glass p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <area.icon className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                  {area.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-12">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Table */}
        <div className={cn("rounded-xl border border-border bg-card/40 glass overflow-hidden", isVisible && "animate-scale-in stagger-3")}>
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
            </div>
            <span className="ml-4 font-mono text-xs text-muted-foreground">~/dionismarkov/stack</span>
          </div>

          <div className="divide-y divide-border/30">
            {Object.keys(techStack).map((category) => {
              const Icon = categoryIcons[category] || Code2
              return (
                <div
                  key={category}
                  className="p-4 sm:p-5 transition-all duration-200 hover:bg-secondary/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                      {category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-7">
                    {techStack[category].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/70 bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground hover:bg-primary/5 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
