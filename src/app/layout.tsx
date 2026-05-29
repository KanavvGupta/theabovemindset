import type { Metadata } from "next";
import { Inter, Geist_Mono, Anton, League_Spartan } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Above Mindset — AI Studio | Agentic Intelligence, Websites & Automation",
  description:
    "We build agentic AI systems, intelligent websites, conversational AI, and workflow automations. An AI studio based in New Delhi, working globally. Strategy to deployment.",
  keywords: [
    "AI studio",
    "agentic AI",
    "AI agents",
    "AI automation",
    "conversational AI",
    "chatbot development",
    "AI website",
    "3D web experience",
    "New Delhi AI",
    "The Above Mindset",
  ],
  authors: [{ name: "The Above Mindset" }],
  openGraph: {
    title: "The Above Mindset — AI Studio",
    description:
      "Agentic intelligence, AI-native websites, and automation systems. Strategy to deployment.",
    type: "website",
    locale: "en_US",
    siteName: "The Above Mindset",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Above Mindset — AI Studio",
    description:
      "Agentic intelligence, AI-native websites, and automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${anton.variable} ${leagueSpartan.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC: set theme class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('tam-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
