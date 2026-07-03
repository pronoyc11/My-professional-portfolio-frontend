# Portfolio Customization Guide

This portfolio is designed so you can update your content mostly by editing files inside `data/`.

## 1. Change Hero Text

Open `data/hero.ts`. Edit `greeting`, `name`, `designation`, `shortDescription`, `resumeButtonText`, and `projectButtonText`.

## 2. Change Hero Image

Replace `public/images/profile.png` with a new image using the same filename. No component edit is needed.

## 3. Replace Resume

Replace `public/resume/resume.pdf` with your new PDF. Keep the filename as `resume.pdf`.

## 4. Edit About Section

Open `data/about.ts`. Change the paragraphs, `careerGoals`, `hobbies`, or `stats`.

## 5. Add a New Skill

Open `data/skills.ts`. Add a new object inside the correct category:

```ts
{ name: "Redux", icon: "react", percentage: 75 }
```

## 6. Remove a Skill

Open `data/skills.ts` and delete the skill object you no longer want.

## 7. Edit Education

Open `data/education.ts`. Update `institution`, `degree`, `duration`, or `description`.

## 8. Edit Experience

Open `data/experience.ts`. If it is empty, the site shows “Currently seeking professional opportunities.” Add experience objects to show a timeline.

## 9. Add a Project

Open `data/projects.ts`. Copy an existing project object, paste it into the array, give it a new `id` and unique `slug`, then edit the text, links, image, technologies, challenges, and future plans.

## 10. Delete a Project

Open `data/projects.ts` and remove that project object from the array.

## 11. Edit a Project

Open `data/projects.ts` and update the project fields. The project card and `/projects/[slug]` page update automatically.

## 12. Change Social Links

Open `data/social.ts` and replace the URLs.

## 13. Change Contact Information

Open `data/contact.ts` for contact details, or edit shared personal details in `data/site.ts`.

## 14. Change Colors

Open `app/globals.css`. The main color values are CSS variables inside `:root`.

## 15. Change Fonts

Open `app/layout.tsx`. The site currently uses Poppins for headings and Inter for body text through `next/font/google`.

## 16. Add Another Section

Create a folder inside `app/components/sections/`, build the component, export it from `index.ts`, then import and render it in `app/page.tsx`. Put the section text in a new `data/` file.

## 17. Connect a Backend Later

Project UI reads from `services/project.service.ts`, not directly from `data/projects.ts`. Later, replace the service functions with API calls and keep the components unchanged.

## 18. Files You Should Never Edit First

Avoid editing reusable components before checking the data files. Most text changes should happen in `data/`, not inside `app/components/`.

## 19. Files Intended for Customization

Use these first: `data/site.ts`, `data/hero.ts`, `data/about.ts`, `data/skills.ts`, `data/education.ts`, `data/experience.ts`, `data/projects.ts`, `data/contact.ts`, and `data/social.ts`.

## 20. Folder Structure

`app/` contains pages, layouts, metadata routes, global styles, and UI sections.

`app/components/layout/` contains shared layout pieces like navbar and footer.

`app/components/sections/` contains homepage sections like Hero, About, Skills, Projects, and Contact.

`app/components/ui/` contains reusable building blocks like Button, Badge, Container, GlassCard, SectionTitle, and SocialButton.

`data/` contains editable portfolio content.

`services/` contains fake service layers that currently return local data and can later call a backend.

`types/` contains shared TypeScript types.

`public/images/` contains images served by Next.js.

`public/resume/` contains your downloadable resume.
