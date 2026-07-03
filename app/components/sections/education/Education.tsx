"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { educationData, educationSection } from "@/data/education";
import { Container } from "@/app/components/ui/container";
import { GlassCard } from "@/app/components/ui/glass-card";
import { SectionTitle } from "@/app/components/ui/section-title";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={educationSection.eyebrow}
          title={educationSection.title}
          description={educationSection.description}
        />
        <div className="relative mx-auto max-w-3xl space-y-6 before:absolute before:left-5 before:top-2 before:h-full before:w-px before:bg-white/10">
          {educationData.map((item, index) => (
            <motion.div
              key={`${item.institution}-${item.duration}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-14"
            >
              <span className="absolute left-0 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200">
                <GraduationCap size={18} />
              </span>
              <GlassCard className="p-6">
                <p className="text-sm font-medium text-slate-300">{item.duration}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-1 text-slate-300">{item.institution}</p>
                <p className="mt-4 leading-8 text-slate-400">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
