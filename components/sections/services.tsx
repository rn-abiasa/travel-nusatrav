import { Button } from "@/components/ui/button";

const data = [
  {
    id: "01",
    name: "Flight Finder",
    description:
      "Seamless flight search and booking, Search, compare, and book flights effortlessly to destinations worldwide.",
    link: "",
  },
  {
    id: "02",
    name: "Hotel Booking",
    description:
      "Discover and reserve the perfect stay. Browse thousands of hotels, resorts, and villas at the best prices.",
    link: "",
  },
  {
    id: "03",
    name: "Trip Packages",
    description:
      "All-inclusive travel packages curated just for you. From weekend getaways to extended adventures.",
    link: "",
  },
];

function Services() {
  return (
    <>
      <section id="services" className="mt-16 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What Services we provide to our customers.
            </h2>
            <p className="text-base font-normal text-muted-foreground mt-3">
              Find trips that fit a flexible lifestyle
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col gap-10"
              >
                <div className="bg-primary w-14 rounded-full py-1 text-base text-primary-foreground text-center">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-base font-normal text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>
                <div>
                  <Button>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
