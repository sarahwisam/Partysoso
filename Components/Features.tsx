import { FeatureCard } from "./FeatureCard"

export default function Features() {
  return (
    <section className="w-full py-20 bg-[#002147] mt-[50px] max-md:-mt-[70px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#D6DAC8] mb-12 max-md:text-2xl">
          Why Choose Us
        </h2>

      
        <div className="max-md:scale-75 max-md:h-[500px] flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:overflow-visible max-md:-mt-[130px] overflow-x-auto overflow-x-auto snap-x snap-mandatory md:justify-items-center">
          <div className=" max-md:scale-75 md:min-w-0 snap-center">
            <FeatureCard 
              image="/s6.jpg"
              title="Easy Booking"
              description="Book your hall in just a few clicks with our seamless interface."
            />
          </div>
          <div className=" max-md:scale-75 md:min-w-0 snap-center">
            <FeatureCard
              image="/s34.jpg"
              title="Variety of Halls"
              description="Browse a wide range of luxurious halls suitable for all occasions."
            />
          </div>

          <div className="max-md:scale-75 md:min-w-0 snap-center">
            <FeatureCard
              image="/s4.jpg"
              title="24/7 Support"
              description="Get assistance whenever you need it from our expert support team."
            />
          </div>
        </div>
      </div>
    </section>
  )
}