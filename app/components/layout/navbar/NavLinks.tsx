import Link from "next/link";
import { cn } from "../../../lib/utils";
import type { NavItem } from "./types";

interface NavLinksProps {
  items: NavItem[];
  activeSection?: string;
  onClick?: () => void;
}

export default function NavLinks({
  items,
  activeSection,
  onClick,
}: NavLinksProps) {
  return (
    <>
      {items.map((item) => {
        const isActive = activeSection === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={cn(
              "transition duration-300",
              isActive
                ? "font-semibold text-white"
                : "text-slate-300 hover:text-slate-100"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
