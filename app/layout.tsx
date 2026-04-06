import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CLAS 104 — Final Exam Prep | Greco-Roman Mythology',
  description: 'Complete study guide for CLAS 104 at the University of Waterloo — flashcards, practice quiz, long answer models, god reference, hero profiles, sagas, timeline, theory frameworks, and glossary.',
  keywords: ['CLAS 104', 'Greco-Roman Mythology', 'Waterloo', 'final exam', 'study guide', 'mythology'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
