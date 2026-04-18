"use client";

import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import {
  destinations,
  type DestinationCategory,
} from "@/lib/data/destinations";
import DestinationCard from "@/components/ui/destinationCard";

const TABS: { label: string; value: DestinationCategory | "popular" }[] = [
  { label: "Popular", value: "popular" },
  { label: "Island", value: "island" },
  { label: "Mountain", value: "mountain" },
  { label: "Lake", value: "lake" },
  { label: "Champ", value: "champ" },
];

type SortOption = "rating" | "price_asc" | "price_desc" | "name";

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Highest Rating", value: "rating" },
  { label: "Lowest Price", value: "price_asc" },
  { label: "Highest Price", value: "price_desc" },
  { label: "Name A–Z", value: "name" },
];

function Destination() {
  const [activeTab, setActiveTab] = useState<DestinationCategory>("popular");
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered = useMemo(() => {
    const byCategory = destinations.filter((d) =>
      d.category.includes(activeTab),
    );

    return [...byCategory].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price_asc") return a.pricePerNight - b.pricePerNight;
      if (sortBy === "price_desc") return b.pricePerNight - a.pricePerNight;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [activeTab, sortBy]);

  const activeSortLabel =
    SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Sort";

  return (
    <>
      <section id="destinations" className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto mt-16">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="md:flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-2xl">
                Explore and unwind at the world's top relaxing spots
              </h2>
              <p className="text-base font-normal text-muted-foreground mt-3 max-w-xl">
                All-inclusive vacations and flights to the Caribbean,
                Indonesian, more than 1,300 destinations worldwide.
              </p>
            </div>
          </div>

          {/* Tabs + Filter Row */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value as DestinationCategory)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
                    activeTab === tab.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
              >
                <span>{activeSortLabel}</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-popover shadow-lg z-10 overflow-hidden">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        sortBy === option.value
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filtered.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center text-muted-foreground">
              <p className="text-base">
                No destinations found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Destination;
