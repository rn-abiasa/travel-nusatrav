export type DestinationCategory =
  | "popular"
  | "island"
  | "mountain"
  | "lake"
  | "champ";

export type Destination = {
  id: string;
  name: string;
  country: string;
  category: DestinationCategory[];
  rating: number;
  pricePerNight: number; // IDR
  image: string;
};

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Bali",
    country: "Indonesia",
    category: ["popular", "island"],
    rating: 4.9,
    pricePerNight: 850000,
    image: "/hero2.png",
  },
  {
    id: "2",
    name: "Raja Ampat",
    country: "Indonesia",
    category: ["popular", "island"],
    rating: 4.8,
    pricePerNight: 1200000,
    image: "/hero.png",
  },
  {
    id: "3",
    name: "Labuan Bajo",
    country: "Indonesia",
    category: ["popular", "champ"],
    rating: 4.7,
    pricePerNight: 950000,
    image: "/hero2.png",
  },
  {
    id: "4",
    name: "Gunung Bromo",
    country: "Indonesia",
    category: ["mountain"],
    rating: 4.6,
    pricePerNight: 650000,
    image: "/hero.png",
  },
  {
    id: "5",
    name: "Gunung Rinjani",
    country: "Indonesia",
    category: ["mountain", "champ"],
    rating: 4.7,
    pricePerNight: 700000,
    image: "/hero2.png",
  },
  {
    id: "6",
    name: "Danau Toba",
    country: "Indonesia",
    category: ["lake", "popular"],
    rating: 4.5,
    pricePerNight: 550000,
    image: "/hero.png",
  },
  {
    id: "7",
    name: "Danau Kelimutu",
    country: "Indonesia",
    category: ["lake", "champ"],
    rating: 4.6,
    pricePerNight: 480000,
    image: "/hero2.png",
  },
  {
    id: "8",
    name: "Lombok",
    country: "Indonesia",
    category: ["island", "popular"],
    rating: 4.7,
    pricePerNight: 780000,
    image: "/hero.png",
  },
  {
    id: "9",
    name: "Wakatobi",
    country: "Indonesia",
    category: ["island", "champ"],
    rating: 4.8,
    pricePerNight: 1100000,
    image: "/hero2.png",
  },
  {
    id: "10",
    name: "Gunung Semeru",
    country: "Indonesia",
    category: ["mountain"],
    rating: 4.5,
    pricePerNight: 600000,
    image: "/hero.png",
  },
  {
    id: "11",
    name: "Danau Sentani",
    country: "Indonesia",
    category: ["lake"],
    rating: 4.4,
    pricePerNight: 450000,
    image: "/hero2.png",
  },
  {
    id: "12",
    name: "Kepulauan Banda",
    country: "Indonesia",
    category: ["island", "champ"],
    rating: 4.6,
    pricePerNight: 900000,
    image: "/hero.png",
  },
];
