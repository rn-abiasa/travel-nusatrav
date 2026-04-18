import SearchForm from "@/components/ui/searchForm";

function Hero() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="bg-[url('/hero2.png')] bg-cover bg-center h-170 rounded-2xl">
          <div className="bg-black/20 h-full w-full rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center px-4">
              <div className="flex flex-col justify-center items-center mb-8">
                <p className="text-base md:text-lg font-normal text-white">
                  -- It's time to go
                </p>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <div className="flex -space-x-3">
                    <div className="bg-[url('/person.png')] bg-cover bg-center border h-8 w-8 rounded-full"></div>
                    <div className="bg-[url('/person2.png')] bg-cover bg-center border h-8 w-8 rounded-full"></div>
                    <div className="bg-[url('/person3.png')] bg-cover bg-center border h-8 w-8 rounded-full"></div>
                    <div className="bg-gray-100 border h-8 w-8 rounded-full flex justify-center items-center text-sm font-semibold">
                      50+
                    </div>
                  </div>
                  <p className="text-sm font-normal text-white/80">
                    60 people booked a visit in last 24 hours
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center mt-5 max-w-3xl leading-tight">
                  Don't just imagine it, make it happen. Travel
                </h1>
              </div>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
