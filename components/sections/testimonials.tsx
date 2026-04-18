import { Star } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Andi Firmansyah",
    role: "Solo Traveler",
    avatar: "AF",
    rating: 5,
    comment:
      "NusaTrav benar-benar mengubah cara saya berwisata. Booking mudah, harga transparan, dan tim supportnya sangat responsif. Perjalanan ke Raja Ampat jadi tak terlupakan!",
    destination: "Raja Ampat, Indonesia",
  },
  {
    id: "2",
    name: "Sari Dewi",
    role: "Family Traveler",
    avatar: "SD",
    rating: 5,
    comment:
      "Paket keluarga ke Bali yang kami ambil sungguh memuaskan. Semua detail diurus dengan profesional. Anak-anak sangat senang dan kami pasti akan memesan lagi!",
    destination: "Bali, Indonesia",
  },
  {
    id: "3",
    name: "Rizky Pratama",
    role: "Adventure Seeker",
    avatar: "RP",
    rating: 5,
    comment:
      "Pendakian Rinjani via NusaTrav sungguh luar biasa. Guide berpengalaman, perlengkapan lengkap, dan harga sangat kompetitif. Highly recommended untuk traveler aktif!",
    destination: "Gunung Rinjani, NTB",
  },
  {
    id: "4",
    name: "Maya Kusuma",
    role: "Honeymoon Traveler",
    avatar: "MK",
    rating: 5,
    comment:
      "Honeymoon kami ke Labuan Bajo benar-benar sempurna. NusaTrav mengurus segalanya dari akomodasi hingga trip kapal. Romantis banget!",
    destination: "Labuan Bajo, NTT",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
        />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Apa kata para traveler kami
          </h2>
          <p className="text-base text-muted-foreground mt-3">
            Ribuan pelancong telah mempercayakan perjalanan mereka kepada kami.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-background rounded-2xl p-5 border border-border flex flex-col gap-4 shadow-sm"
            >
              {/* Rating */}
              <StarRating rating={item.rating} />

              {/* Comment */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{item.comment}&rdquo;
              </p>

              {/* Destination tag */}
              <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 w-fit">
                📍 {item.destination}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-border">
                <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
