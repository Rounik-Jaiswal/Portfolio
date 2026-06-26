import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Terminal } from "@/components/terminal/terminal";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/site.config";

/* Fonts: Inter for body, JetBrains Mono for data/labels/terminal.
   Exposed as CSS variables so globals.css and Tailwind's font-* utilities
   can reference them. */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.author,
    type: "website",
    ...(siteConfig.ogImage && { images: [{ url: siteConfig.ogImage }] }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.ogImage && { images: [siteConfig.ogImage] }),
  },
};

/**
 * `interactive-widget: resizes-content` tells mobile browsers to shrink the
 * layout viewport when the on-screen keyboard appears, so dvh-based heights and
 * fixed overlays (like the terminal) reflow to fit instead of being covered.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is required by next-themes (it sets the
    // data-theme attribute before React hydrates).
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Terminal />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}