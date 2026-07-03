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

export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroData = {
  greeting: string;
  name: string;
  designation: string;
  shortDescription: string;
  resumeButtonText: string;
  projectButtonText: string;
  profileImage: string;
  floatingTech: string[];
};

export type AboutData = {
  eyebrow: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  careerGoalsTitle: string;
  careerGoals: string;
  hobbiesTitle: string;
  hobbies: string;
  stats: Stat[];
};

export type SiteData = {
  name: string;
  designation: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  resumePath: string;
  profileImage: string;
  favicon: string;
  logo: string;
  copyright: string;
  url: string;
  description: string;
  resumeLabel: string;
  resumeDownloadLabel: string;
  backToTopLabel: string;
  navigation: NavigationItem[];
};

export type ContactSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ContactFormFields = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitText: string;
};

export type ContactLabels = {
  email: string;
  phone: string;
  location: string;
};

export type ContactData = {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  section: ContactSection;
  form: ContactFormFields;
  labels: ContactLabels;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type EducationSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ExperienceSection = {
  eyebrow: string;
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
};

export type ProjectsSection = {
  eyebrow: string;
  title: string;
  description: string;
  detailButtonText: string;
  codeButtonText: string;
  backLinkText: string;
  liveButtonText: string;
  sourceButtonText: string;
  challengesTitle: string;
  futurePlansTitle: string;
};

export type SkillsSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SocialData = {
  github: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  portfolio: string;
};