import Image from "next/image";
import { Target, Heart, Globe } from "lucide-react";

const stats = [
  { value: "50K+", label: "Happy Travelers" },
  { value: "1,300+", label: "Destinations" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "10+", label: "Years Experience" },
];

const values = [
  {
    icon: <Target className="size-5 text-primary" />,
    title: "Our Mission",
    description:
      "Menyediakan pengalaman perjalanan terbaik dengan harga terjangkau, memastikan setiap petualangan tak terlupakan.",
  },
  {
    icon: <Heart className="size-5 text-primary" />,
    title: "Our Passion",
    description:
      "Kami percaya perjalanan mengubah perspektif. Setiap destinasi menyimpan cerita yang menunggu untuk ditemukan.",
  },
  {
    icon: <Globe className="size-5 text-primary" />,
    title: "Our Reach",
    description:
      "Dengan jaringan mitra global, kami hadir di lebih dari 80 negara untuk melayani setiap kebutuhan perjalananmu.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/hero.png"
                alt="About NusaTrav"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating stat card */}
              <div className="absolute bottom-5 left-5 bg-background/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              About Us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              Kami hadir untuk membuat perjalananmu lebih mudah dan berkesan
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              NusaTrav adalah platform travel Indonesia yang menghubungkan
              pelancong dengan destinasi terbaik di seluruh dunia. Dari Sabang
              sampai Merauke, hingga ke penjuru dunia — kami siap menemanimu.
            </p>

            {/* Values */}
            <div className="mt-8 flex flex-col gap-5">
              {values.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 bg-primary/10 rounded-xl p-2.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-muted rounded-2xl px-6 py-5 text-center"
            >
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
