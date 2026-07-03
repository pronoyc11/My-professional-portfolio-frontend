export type Stat = {
  value: string;
  label: string;
};

export type Skill = {
  name: string;
  icon: string;
  percentage: number;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export type TimelineItem = {
  institution?: string;
  company?: string;
  role?: string;
  degree?: string;
  duration: string;
  description: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  technology: string[];
  github: string;
  live: string;
  futurePlans: string[];
  challenges: string[];
  featured: boolean;
};

export type EducationSection = {
  eyebrow: string,
  title: string,
  description: string
}