import Image from "next/image";

export default function Home() {
  return (
     <section className="relative w-full h-[296px] sm:h-[421px] lg:h-[481px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 rounded-[6px] sm:rounded-[12px] overflow-hidden">
        <div>
          <Image
            src="/assets/images/moviehall.png"
            alt="Movie Hall"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-10 text-center  px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            MovieMood
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-300 sm:text-l md:text-xl lg:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover your next favourite movie with peronalized recommendations and explore the world of movies.
          </p>
        </div>
    </section>
    
  );
}
