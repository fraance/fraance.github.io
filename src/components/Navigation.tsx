"use client";

import { navigationLinks } from "@/data/portfolio";
import { LAYOUT_SPACING } from "@/config/ui";
import { cn } from "@/utils/cn";

/**
 * Header navigation component matching the prototype design.
 * Includes Resume, About me (with portrait hover), and E-mail links.
 * Responsive with collapsible mobile menu.
 */
export function Navigation() {
  const baseClasses = "group hover:text-white transition-colors duration-300";
  const spanClasses = "group-hover:font-bold transition-all duration-300";

  return (
    <div className="relative">
      <ul className={cn(
        "flex items-center justify-center md:items-end md:justify-end",
        "text-sm font-medium pt-2 font-serif",
        LAYOUT_SPACING.nav
      )}>
        {navigationLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              id={link.id}
              className={cn(
                baseClasses,
                link.hasArrow && "relative flex items-center"
              )}
            >
              {link.hasArrow && (
                <span className="absolute left-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              )}
              <span className={cn(
                spanClasses,
                link.hasArrow && "transition-all duration-300 ease-out group-hover:translate-x-4 pl-1"
              )}>
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}