"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experienceData, experienceSection } from "@/data/experience";
import { Container } from "@/app/components/ui/container";
import { GlassCard } from "@/app/components/ui/glass-card";
import { SectionTitle } from "@/app/components/ui/section-title";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={experienceSection.eyebrow}
          title={experienceSection.title}
          description={experienceSection.description}
        />
        {experienceData.length === 0 ? (
          <GlassCard className="mx-auto max-w-2xl p-8 text-center">
            <BriefcaseBusiness className="mx-auto text-slate-300" size={34} />
            <p className="mt-5 text-lg font-medium text-white">
              {experienceSection.emptyTitle}
            </p>
            <p className="mt-3 leading-7 text-slate-400">
              {experienceSection.emptyDescription}
            </p>
          </GlassCard>
        ) : (
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.duration}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="p-6">
                  <p className="text-sm font-medium text-slate-300">{item.duration}</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-slate-300">{item.company}</p>
                  <p className="mt-4 leading-8 text-slate-400">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
