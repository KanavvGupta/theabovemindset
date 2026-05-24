"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formspreeState, handleFormspreeSubmit] = useForm("xpqbygvw");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  // Check for pre-filled brief from service pages
  useEffect(() => {
    const brief = sessionStorage.getItem("tam-brief");
    if (brief) {
      setFormState((prev) => ({ ...prev, message: brief }));
      sessionStorage.removeItem("tam-brief");
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "venture@theabovemindset.in",
      href: "mailto:venture@theabovemindset.in",
    },
    {
      icon: "📧",
      label: "Alt Email",
      value: "theabovemindset@gmail.com",
      href: "mailto:theabovemindset@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 92665 50918",
      href: "tel:+919266550918",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+91 87965 21814",
      href: "https://wa.me/918796521814",
    },
    {
      icon: "🎮",
      label: "Discord",
      value: "The Above Mindset",
      href: "https://discord.com/users/1251458883919151246",
    },
    {
      icon: "📍",
      label: "Based in",
      value: "New Delhi, India — Serving India (Global expansions coming soon)",
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-y section-padding"
    >
      {/* Background glows */}
      <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-[radial-gradient(ellipse,oklch(0.75_0.15_195_/_5%)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-[radial-gradient(ellipse,oklch(0.78_0.16_85_/_4%)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="contact-content grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA */}
          <div>
            <SectionHeader
              badge="Contact"
              title="Let's build something"
              highlight="extraordinary."
              description="Ready to bring AI into your operations? Tell us about your project and we'll get back within 24 hours with initial thoughts."
            />

            <div className="space-y-5 mt-8">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full glass-cyan flex items-center justify-center text-lg shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-tam-cyan transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass rounded-3xl p-8">
            {formspreeState.succeeded ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours. Check your inbox.
                </p>
              </motion.div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={handleFormspreeSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-foreground/5 border-foreground/10 focus:border-tam-cyan/50 focus:ring-tam-cyan/20 placeholder:text-muted-foreground/50"
                    />
                    <ValidationError prefix="Name" field="name" errors={formspreeState.errors} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-foreground/5 border-foreground/10 focus:border-tam-cyan/50 focus:ring-tam-cyan/20 placeholder:text-muted-foreground/50"
                    />
                    <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-project" className="block text-sm text-muted-foreground mb-2">
                    Project type
                  </label>
                  <Input
                    id="contact-project"
                    name="project"
                    placeholder="AI agent, website, automation..."
                    value={formState.project}
                    onChange={handleChange}
                    className="bg-foreground/5 border-foreground/10 focus:border-tam-cyan/50 focus:ring-tam-cyan/20 placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm text-muted-foreground mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="What are you looking to build? What problem are you solving?"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-foreground/5 border-foreground/10 focus:border-tam-cyan/50 focus:ring-tam-cyan/20 placeholder:text-muted-foreground/50 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} />
                </div>

                <MagneticButton
                  variant="primary"
                  onClick={() => {}}
                >
                  {formspreeState.submitting ? "Sending..." : "Send Message"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
