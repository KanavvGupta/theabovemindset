"use client";

import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/theabovemindset" },
  { label: "X / Twitter", href: "https://x.com/theabovemindset" },
  { label: "LinkedIn", href: "https://linkedin.com/company/theabovemindset" },
  { label: "Instagram", href: "https://instagram.com/theabovemindset" },
];

const contactLinks = [
  { label: "Email", href: "mailto:venture@theabovemindset.in" },
  { label: "Phone", href: "tel:+919266550918" },
  { label: "WhatsApp", href: "https://wa.me/918796521814" },
  { label: "Discord", href: "https://discord.com/users/1251458883919151246" },
];

export default function Footer() {
  return (
    <footer className="relative section-padding py-12">
      <Separator className="mb-12 bg-border" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/THE-ABOVE-MINDSET-LOGO.jpg"
                alt="The Above Mindset Logo"
                className="w-7 h-7 object-contain rounded-md"
                style={{ filter: "brightness(1.1)" }}
              />
              <div className="flex items-center gap-1 font-anton text-[13px] tracking-wider uppercase">
                <span className="text-foreground">The</span>
                <span className="bg-foreground text-background px-1.5 py-0.5 rounded-sm">Above</span>
                <span className="text-foreground">Mindset</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI studio crafting agentic systems, intelligent websites, and
              automations that work.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">Reach us</p>
            <div className="flex flex-wrap items-center gap-5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-tam-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-tam-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} The Above Mindset. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            New Delhi, India — Serving India (Global expansions coming soon)
          </p>
        </div>
      </div>
    </footer>
  );
}
