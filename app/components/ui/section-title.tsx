"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg lg:text-xl">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
