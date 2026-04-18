"use client";

import { useState } from "react";
import {
  Plane,
  Hotel,
  MapPin,
  Search,
  Users,
  CalendarDays,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Tab = "flight" | "hotel" | "trip";

const TABS: { value: Tab; label: string; icon: React.ReactNode }[] = [
  { value: "flight", label: "Flight", icon: <Plane className="size-3.5" /> },
  { value: "hotel", label: "Hotel", icon: <Hotel className="size-3.5" /> },
  { value: "trip", label: "Trip", icon: <MapPin className="size-3.5" /> },
];

function FieldWrapper({
  label,
  icon,
  children,
  className = "",
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}

function FlightFields() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3">
      <FieldWrapper
        label="From"
        icon={<Plane className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="flight-from"
          type="text"
          placeholder="Jakarta (CGK)"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="To"
        icon={<MapPin className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="flight-to"
          type="text"
          placeholder="Bali (DPS)"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Departure"
        icon={<CalendarDays className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="flight-depart"
          type="date"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Return"
        icon={<CalendarDays className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="flight-return"
          type="date"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Passengers"
        icon={<Users className="size-3" />}
        className="col-span-2"
      >
        <Input
          id="flight-passengers"
          type="number"
          min={1}
          defaultValue={1}
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>
    </div>
  );
}

function HotelFields() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3">
      <FieldWrapper
        label="Destination"
        icon={<MapPin className="size-3" />}
        className="col-span-2"
      >
        <Input
          id="hotel-destination"
          type="text"
          placeholder="Search city or hotel"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Check In"
        icon={<CalendarDays className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="hotel-checkin"
          type="date"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Check Out"
        icon={<CalendarDays className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="hotel-checkout"
          type="date"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Guests"
        icon={<Users className="size-3" />}
        className="col-span-2"
      >
        <Input
          id="hotel-guests"
          type="number"
          min={1}
          defaultValue={1}
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>
    </div>
  );
}

function TripFields() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3">
      <FieldWrapper
        label="Destination"
        icon={<MapPin className="size-3" />}
        className="col-span-2"
      >
        <Input
          id="trip-destination"
          type="text"
          placeholder="Where do you want to go?"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Start Date"
        icon={<CalendarDays className="size-3" />}
        className="col-span-1"
      >
        <Input id="trip-start" type="date" className="rounded-lg h-9 text-sm" />
      </FieldWrapper>

      <FieldWrapper
        label="Duration"
        icon={<Clock className="size-3" />}
        className="col-span-1"
      >
        <Input
          id="trip-duration"
          type="text"
          placeholder="e.g. 5 days"
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>

      <FieldWrapper
        label="Travelers"
        icon={<Users className="size-3" />}
        className="col-span-2"
      >
        <Input
          id="trip-travelers"
          type="number"
          min={1}
          defaultValue={1}
          className="rounded-lg h-9 text-sm"
        />
      </FieldWrapper>
    </div>
  );
}

function SearchForm() {
  const [activeTab, setActiveTab] = useState<Tab>("flight");

  return (
    <div className="bg-background w-full max-w-xs sm:max-w-sm md:max-w-5xl rounded-2xl shadow-lg p-4 sm:p-5">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4 bg-muted rounded-xl p-1">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeTab === tab.value
                ? "bg-primary text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div>
        {activeTab === "flight" && <FlightFields />}
        {activeTab === "hotel" && <HotelFields />}
        {activeTab === "trip" && <TripFields />}
      </div>

      {/* Search Button */}
      <Button className="w-full mt-4 gap-2">
        <Search className="size-4" />
        Search
      </Button>
    </div>
  );
}

export default SearchForm;
