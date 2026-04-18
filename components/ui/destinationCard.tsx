import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import type { Destination } from "@/lib/data/destinations";

function formatIDR(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Rating badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
          <Star className="size-3 fill-yellow-400 text-yellow-400" />
          <span>{destination.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-foreground leading-snug">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" />
              <span className="text-sm">{destination.country}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
          <div>
            <span className="text-base font-semibold text-foreground">
              {formatIDR(destination.pricePerNight)}
            </span>
            <span className="text-xs text-muted-foreground ml-1">/ malam</span>
          </div>
          <button className="text-xs font-medium text-primary hover:underline underline-offset-2 transition-colors">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
