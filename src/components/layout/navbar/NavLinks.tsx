import type { NavLink } from "@/types";
import NavItem from "./NavItem";

interface NavLinksProps {
  links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <nav aria-label="Navegación principal">
      <ul className="flex items-center gap-8 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <NavItem link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}