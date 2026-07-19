import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const read = (path) => readFileSync(join(root, path), "utf8")
const sourceFiles = [
  "app/layout.tsx",
  "components/hero-section.tsx",
  "components/projects-grid.tsx",
  "components/public/projects/projects-page-content.tsx",
  "components/public/workbench/workbench-page-content.tsx",
  "components/public/blog/blog-sidebar.tsx",
  ".github/workflows/deploy-pages.yml",
  ".github/workflows/ci.yml",
]
const source = sourceFiles.map(read).join("\n")

for (const domain of [
  "https://dionismarkov.com",
  "https://valtheralabs.io",
  "https://valtheraswap.io",
]) {
  assert.match(source, new RegExp(domain.replaceAll(".", "\\."), "i"), `missing ${domain}`)
}

for (const obsolete of [
  /NEXT_PUBLIC_SITE_URL:\s*https:\/\/dionismarkov\.github\.io/i,
  /valtheralabs-site/i,
  /\/og-image-(blog|projects|workbench)\.png/i,
  /Handle subscription/i,
]) {
  assert.doesNotMatch(source, obsolete, `obsolete or non-functional content: ${obsolete}`)
}

assert.ok(existsSync(join(root, "app/rss.xml/route.ts")), "missing RSS route")
assert.ok(existsSync(join(root, "public/_headers")), "missing Cloudflare response headers")

const hero = read("components/hero-section.tsx")
assert.match(hero, /I build dependable digital products/i, "hero needs a stable value proposition")
assert.doesNotMatch(hero, /useState|useEffect|typing-cursor|3 public repos|Jul\. 2026/i)

const css = read("app/globals.css")
assert.match(css, /prefers-reduced-motion/, "missing reduced-motion fallback")

const projects = read("components/projects-grid.tsx")
assert.match(projects, /Selected Work/, "projects need a curated portfolio heading")

const footer = read("components/footer.tsx")
assert.match(footer, /ValtheraLabs/, "footer needs company relationship")
assert.match(footer, /ValtheraSwap/, "footer needs product relationship")

console.log("Site regression checks passed.")
