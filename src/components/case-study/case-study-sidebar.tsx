"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

type SidebarItem = {
  id: string;
  label: string;
};

type CaseStudySidebarProps = {
  summaryLabel: string;
  showcaseLinkLabel: string;
  items: SidebarItem[];
  liveProjectUrl: string;
};

export function CaseStudySidebar({
  summaryLabel,
  showcaseLinkLabel,
  items,
  liveProjectUrl,
}: CaseStudySidebarProps) {
  const [activeId, setActiveId] = useState("");
  const [hoveredId, setHoveredId] = useState("");

  useEffect(() => {
    const sections = items
      .map((item) => {
        const element = document.getElementById(item.id);
        return element ? { id: item.id, element } : null;
      })
      .filter(Boolean) as Array<{ id: string; element: HTMLElement }>;

    if (!sections.length) {
      return;
    }

    const getSectionById = (id: string) =>
      sections.find((section) => section.id === id)?.element ?? null;

    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.28;

      const currentSection =
        sections.find((section, index) => {
          const currentTop = section.element.getBoundingClientRect().top;
          const nextTop = sections[index + 1]?.element.getBoundingClientRect().top;

          if (index === sections.length - 1) {
            return currentTop <= triggerLine;
          }

          return currentTop <= triggerLine && (nextTop === undefined || nextTop > triggerLine);
        }) ?? null;

      if (currentSection) {
        setActiveId((previous) =>
          previous === currentSection.id ? previous : currentSection.id,
        );
      }
    };

    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      const targetSection = hashId ? getSectionById(hashId) : null;

      if (targetSection) {
        setActiveId(hashId);
      }
    };

    updateActiveSection();
    syncFromHash();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [items]);

  return (
    <div className="space-y-4">
      <div className="rounded-[21px] border border-[#e6e6e6] bg-white p-6 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)]">
        <div className="mb-4 flex items-center gap-3">
          <Image
            src="/images/arrow-right-circle-sidebar.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
            className="h-6 w-6"
          />
          <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.396px]">
            {summaryLabel}
          </p>
        </div>

        <div className="space-y-4 pl-9">
          {items.map((item) => {
            const isActive = item.id === activeId;
            const isHovered = item.id === hoveredId;
            const itemColor = isActive
              ? "var(--color-ink)"
              : isHovered
                ? "var(--color-ink-soft)"
                : "#c6c6c6";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  const targetSection = document.getElementById(item.id);
                  setActiveId(item.id);
                  window.history.replaceState(null, "", `#${item.id}`);
                  targetSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId("")}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId("")}
                aria-current={isActive ? "true" : undefined}
                className="block text-left text-[22px] font-semibold leading-[1.25] tracking-[-0.396px] transition-colors duration-200 focus-visible:outline-none"
                style={{ color: itemColor }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <a
        href={liveProjectUrl}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center gap-3 rounded-[16px] border border-[#e6e6e6] bg-white px-6 py-4 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)]"
      >
        <Link2 className="h-5 w-5" strokeWidth={2.1} />
        <span className="text-[18px] font-semibold leading-none tracking-[-0.108px]">
          {showcaseLinkLabel}
        </span>
      </a>
    </div>
  );
}
