import { NotesPageContent } from "@/components/public/notes/notes-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dionismarkov.com";

export const metadata: Metadata = {
  title: "Lab Notes",
  description: "Technical findings, observations, and thoughts from the workbench.",
  alternates: { canonical: `${baseUrl}/notes` },
  openGraph: {
    title: "Lab Notes — Dionis Markov",
    description: "Technical findings, observations, and thoughts from the workbench.",
    url: `${baseUrl}/notes`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab Notes — Dionis Markov",
    description: "Technical findings, observations, and thoughts from the workbench.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function NotesPage() {
  return (
    <div className="pt-24">
      <NotesPageContent />
    </div>
  );
}
