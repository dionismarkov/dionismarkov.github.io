"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Rss, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

const topics = ["nextjs", "react", "typescript", "llm", "rust", "linux", "python", "tailwind", "wasm", "rag"]

export function BlogSidebar() {
  const [isVisible, setIsVisible] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sidebarRef.current) observer.observe(sidebarRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <aside ref={sidebarRef} className="space-y-8 lg:sticky lg:top-28 lg:self-start">
      <div className={cn("opacity-0", isVisible && "animate-fade-in-up")}>
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-4 w-4 text-primary" />
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-lg border border-border/50 bg-card/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "rounded-xl border border-border/50 bg-card/40 glass p-6 opacity-0",
          isVisible && "animate-fade-in-up stagger-2",
        )}
      >
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-4 w-4 text-primary" />
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Newsletter</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Email subscriptions are not connected yet. Use the RSS feed for current articles.
        </p>
      </div>

      <div className={cn("opacity-0", isVisible && "animate-fade-in-up stagger-3")}>
        <a
          href="/rss.xml"
          className="flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-card/40 px-4 py-3 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
        >
          <Rss className="h-4 w-4" />
          <span>Subscribe via RSS</span>
        </a>
      </div>
    </aside>
  )
}
