import type { ContactData } from "@/types/portfolio";
import { siteData } from "./site";

export const contactData: ContactData = {
  email: siteData.email,
  phone: siteData.phone,
  whatsapp: siteData.whatsapp,
  location: siteData.location,
  section: {
    eyebrow: "Contact",
    title: "Let's build something polished",
    description:
      "Reach out for collaboration, internships, frontend work, or full stack projects.",
  },
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitText: "Send Message",
  },
  labels: {
    email: "Email",
    phone: "Phone",
    location: "Location",
  },
};
