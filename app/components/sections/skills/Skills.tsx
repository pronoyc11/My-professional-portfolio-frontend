"use client";

import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Layers3, Palette, Server, Wrench } from "lucide-react";
import { skillsData, skillsSection } from "@/data/skills";
import { Container } from "@/app/components/ui/container";
import { GlassCard } from "@/app/components/ui/glass-card";
import { SectionTitle } from "@/app/components/ui/section-title";

const iconMap = {
  react: Code2,
  next: Layers3,
  typescript: Code2,
  tailwind: Code2,
  node: Server,
  express: Server,
  database: Database,
  postgres: Database,
  mongo: Database,
  git: GitBranch,
  figma: Palette,
  cloud: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={skillsSection.eyebrow}
          title={skillsSection.title}
          description={skillsSection.description}
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: groupIndex * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <h3 className="font-heading text-xl font-semibold text-white">{group.category}</h3>
                <div className="mt-6 space-y-6">
                  {group.skills.map((skill) => {
                    const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? Code2;

                    return (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                            <Icon size={16} className="text-slate-300" />
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-400">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-slate-200 via-slate-300 to-white/90"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
