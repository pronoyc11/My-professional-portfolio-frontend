"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-28 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_20%_20%,rgba(138,184,255,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(125,211,252,0.08),transparent_20%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <HeroContent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
}
