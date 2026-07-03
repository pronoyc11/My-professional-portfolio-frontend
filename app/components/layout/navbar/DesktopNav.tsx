import NavLinks from "./NavLinks";
import { navigationLinks } from "./navigation";

interface Props {
  activeSection?: string;
}

export default function DesktopNav({ activeSection }: Props) {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      <NavLinks
        items={navigationLinks}
        activeSection={activeSection}
      />
    </nav>
  );
}

//hooks/
/*
useActiveSection.ts

useScroll.ts

useLockBody.ts
*/