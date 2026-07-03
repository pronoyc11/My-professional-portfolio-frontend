"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectsSection } from "@/data/projects";
import { projectService } from "@/services/project.service";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Container } from "@/app/components/ui/container";
import { GlassCard } from "@/app/components/ui/glass-card";
import { SectionTitle } from "@/app/components/ui/section-title";

export default function Projects() {
  const projects = projectService.getAllProjects();

  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          description={projectsSection.description}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="group flex h-full min-h-0 flex-col overflow-hidden">
                <div className="relative aspect-10/9 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-3 p-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technology.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-sm font-semibold text-white">{project.title}</h3>
                    <p className="text-sm leading-5 text-slate-400">{project.shortDescription}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-end gap-2">
                    <Button href={`/projects/${project.slug}`} variant="primary" className="min-h-11 px-4 text-xs sm:text-sm">
                      {projectsSection.detailButtonText} <ArrowUpRight size={16} />
                    </Button>
                    <Button href={project.github} target="_blank" variant="secondary" className="min-h-11 px-4 text-xs sm:text-sm">
                      <FaGithub size={16} /> {projectsSection.codeButtonText}
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
