import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectService } from "@/services/project.service";
import { projectsSection } from "@/data/projects";
import { siteData } from "@/data/site";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Container } from "@/app/components/ui/container";
import { GlassCard } from "@/app/components/ui/glass-card";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectService.getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectService.getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${siteData.url}/projects/${project.slug}`,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectService.getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-28">
      <Container className="pb-24">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
        >
          <ArrowLeft size={16} /> {projectsSection.backLinkText}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-400">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={project.live} target="_blank">
                {projectsSection.liveButtonText} <ExternalLink size={16} />
              </Button>
              <Button href={project.github} target="_blank" variant="secondary">
                {projectsSection.sourceButtonText} <FaGithub size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold text-white">
              {projectsSection.challengesTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-slate-400">
              {project.challenges.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="font-heading text-2xl font-semibold text-white">
              {projectsSection.futurePlansTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-slate-400">
              {project.futurePlans.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Container>
    </main>
  );
}
