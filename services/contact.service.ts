import { contactData } from "@/data/contact";
import type { ContactFormData, ContactData } from "@/types/portfolio";

export const contactService = {
  async getContactData(): Promise<ContactData> {
    return contactData;
  },

  async sendMessage(data: ContactFormData): Promise<{ success: boolean }> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
    };
  },
};
