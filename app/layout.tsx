import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CLAS 104 — Study Guide", description: "Greco-Roman Mythology exam preparation" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
