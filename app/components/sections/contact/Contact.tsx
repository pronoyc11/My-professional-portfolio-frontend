"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactData } from "@/data/contact";
import { Container } from "@/app/components/ui/container";
import { Button } from "@/app/components/ui/button";
import { GlassCard } from "@/app/components/ui/glass-card";
import { SectionTitle } from "@/app/components/ui/section-title";

const contactItems = [
  { label: contactData.labels.email, value: contactData.email, icon: Mail, href: `mailto:${contactData.email}` },
  { label: contactData.labels.phone, value: contactData.phone, icon: Phone, href: `tel:${contactData.phone}` },
  { label: contactData.labels.location, value: contactData.location, icon: MapPin, href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={contactData.section.eyebrow}
          title={contactData.section.title}
          description={contactData.section.description}
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <GlassCard key={item.label} className="p-6">
                <a href={item.href} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-slate-100">
                    <item.icon size={22} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{item.label}</span>
                    <span className="font-medium text-white">{item.value}</span>
                  </span>
                </a>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-6">
            <form className="grid gap-4">
              <label className="grid gap-2 text-sm text-slate-300">
                {contactData.form.nameLabel}
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition duration-300 focus:border-white/20 focus:bg-white/10" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                {contactData.form.emailLabel}
                <input type="email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition duration-300 focus:border-white/20 focus:bg-white/10" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                {contactData.form.messageLabel}
                <textarea rows={5} className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition duration-300 focus:border-white/20 focus:bg-white/10" />
              </label>
              <Button type="submit" className="w-full sm:w-fit">
                {contactData.form.submitText} <Send size={16} />
              </Button>
            </form>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
