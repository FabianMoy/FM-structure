 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types";

interface NavItemProps {
  link: NavLink;
  onClick?: () => void;
  className?: string;
}

export default function NavItem({ link, onClick, className }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={[
        "text-sm font-medium transition-colors",
        isActive ? "text-white" : "text-slate-300 hover:text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {link.label}
    </Link>
  );
}