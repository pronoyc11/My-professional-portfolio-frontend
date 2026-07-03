"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/about";
import { siteData } from "@/data/site";
import { GlassCard } from "@/app/components/ui/glass-card";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative self-start"
        >
          <div className="absolute inset-0 rounded-[28px] bg-white/5 blur-3xl" />
          <Image
            src={siteData.profileImage}
            alt={siteData.name}
            width={420}
            height={520}
            className="relative rounded-[28px] border border-white/10 object-cover shadow-[0_30px_90px_-50px_rgba(0,0,0,0.7)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            {aboutData.eyebrow}
          </p>

          <h2 className="mb-8 font-heading text-3xl font-bold text-white sm:text-4xl">
            {aboutData.title}
          </h2>

          <p className="mb-6 leading-8 text-slate-400">{aboutData.paragraph1}</p>
          <p className="mb-6 leading-8 text-slate-400">{aboutData.paragraph2}</p>
          <p className="mb-10 leading-8 text-slate-400">{aboutData.paragraph3}</p>

          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            <GlassCard className="p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                {aboutData.careerGoalsTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{aboutData.careerGoals}</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                {aboutData.hobbiesTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{aboutData.hobbies}</p>
            </GlassCard>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutData.stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -8 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-4xl font-semibold tracking-tight text-white">{item.value}</h3>
                <p className="mt-3 text-sm text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
