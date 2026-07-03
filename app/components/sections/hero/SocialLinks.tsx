import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socialData } from "@/data/social";
import { SocialButton } from "@/app/components/ui/social-button";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-5">
      <SocialButton href={socialData.github} label="GitHub profile">
        <FaGithub size={22} />
      </SocialButton>
      <SocialButton href={socialData.linkedin} label="LinkedIn profile">
        <FaLinkedin size={22} />
      </SocialButton>
      <SocialButton href={socialData.facebook} label="Facebook profile">
        <FaFacebook size={22} />
      </SocialButton>
      <SocialButton href={socialData.twitter} label="Twitter profile">
        <FaXTwitter size={22} />
      </SocialButton>
    </div>
  );
}
