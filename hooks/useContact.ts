import { useCallback, useState } from "react";
import { contactService } from "@/services/contact.service";
import type { ContactData, ContactFormData } from "@/types/portfolio";

export function useContact() {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const loadContactData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await contactService.getContactData();
      setContactData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  const sendMessage = useCallback(async (formData: ContactFormData) => {
    setLoading(true);
    setError(null);

    try {
      await contactService.sendMessage(formData);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    contactData,
    loadContactData,
    sendMessage,
    submitted,
    loading,
    error,
    setError,
    setSubmitted,
  };
}
