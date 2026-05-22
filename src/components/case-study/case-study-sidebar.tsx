"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [indicatorTop, setIndicatorTop] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const visibleId = hoveredId || activeId || items[0]?.id || "";

  const updateIndicator = (id: string) => {
    const listElement = listRef.current;
    const itemElement = itemRefs.current[id];

    if (!listElement || !itemElement) {
      return;
    }

    const listRect = listElement.getBoundingClientRect();
    const itemRect = itemElement.getBoundingClientRect();
    const nextTop = itemRect.top - listRect.top + itemRect.height / 2 - 12;

    setIndicatorTop(nextTop);
  };

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
        if (!hoveredId) {
          updateIndicator(currentSection.id);
        }
      }
    };

    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      const targetSection = hashId ? getSectionById(hashId) : null;

      if (targetSection) {
        setActiveId(hashId);
        if (!hoveredId) {
          updateIndicator(hashId);
        }
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
  }, [hoveredId, items]);

  useEffect(() => {
    if (!visibleId) {
      return;
    }

    const rafId = window.requestAnimationFrame(() => {
      updateIndicator(visibleId);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [activeId, hoveredId, items, visibleId]);

  return (
    <div className="space-y-4">
      <div className="rounded-[18px] border border-[#e6e6e6] bg-white p-4 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)] md:p-5 lg:hidden">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
          {summaryLabel}
        </p>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                key={`mobile-${item.id}`}
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
                className="shrink-0 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold leading-[1.2] tracking-[-0.02em] transition-colors duration-200"
                style={{
                  color: itemColor,
                  backgroundColor: isActive ? "rgba(14,15,12,0.06)" : "#ffffff",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden rounded-[21px] border border-[#e6e6e6] bg-white p-6 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)] lg:block">
        <div
          ref={listRef}
          aria-label={summaryLabel}
          className="relative space-y-4"
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 transition-[transform,opacity] duration-300 ease-out ${
              visibleId ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `translateY(${indicatorTop}px)` }}
          >
            <Image
              src="/images/arrow-right-circle-sidebar.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </span>
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
                ref={(element) => {
                  itemRefs.current[item.id] = element;
                }}
                onClick={() => {
                  const targetSection = document.getElementById(item.id);
                  setActiveId(item.id);
                  updateIndicator(item.id);
                  window.history.replaceState(null, "", `#${item.id}`);
                  targetSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                onMouseEnter={() => {
                  setHoveredId(item.id);
                  updateIndicator(item.id);
                }}
                onMouseLeave={() => setHoveredId("")}
                onFocus={() => {
                  setHoveredId(item.id);
                  updateIndicator(item.id);
                }}
                onBlur={() => setHoveredId("")}
                aria-current={isActive ? "true" : undefined}
                className="flex min-h-8 w-full items-center py-0.5 pl-9 text-left font-semibold tracking-[-0.396px] transition-colors duration-200 focus-visible:outline-none"
                style={{
                  color: itemColor,
                  fontSize: "22px",
                  lineHeight: "125%",
                }}
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
        className="flex w-full items-center gap-3 rounded-[16px] border border-[#e6e6e6] bg-white px-5 py-4 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)] md:px-6"
      >
        <Link2 className="h-5 w-5" strokeWidth={2.1} />
        <span className="text-[18px] font-semibold leading-none tracking-[-0.108px]">
          {showcaseLinkLabel}
        </span>
      </a>
    </div>
  );
}
