import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <section id="cta" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero2.png"
              alt="CTA background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-medium text-white/70 uppercase tracking-widest mb-4">
              Mulai Petualanganmu
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-2xl leading-tight">
              Jangan tunda lagi. Dunia menunggumu.
            </h2>
            <p className="mt-5 text-base text-white/70 max-w-lg leading-relaxed">
              Lebih dari 1,300 destinasi siap dijelajahi. Dapatkan penawaran
              terbaik dan mulai perjalanan impianmu hari ini bersama NusaTrav.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <Button size="lg" className="gap-2 px-6 rounded-full">
                Pesan Sekarang <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-6 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                Lihat Destinasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
