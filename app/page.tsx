import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Destination from "@/components/sections/destination";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <Destination />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
