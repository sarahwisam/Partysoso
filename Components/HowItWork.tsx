import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, CreditCard, PartyPopper } from "lucide-react"

const steps = [
  {
    icon: <MapPin className="w-12 h-12 text-[#D6DAC8]" />,
    title: "Browse Venues",
    description: "Explore our premium halls and choose the perfect one.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-[#D6DAC8]" />,
    title: "Pick Your Date",
    description: "Select an available date that suits your schedule.",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-[#D6DAC8]" />,
    title: "Secure Your Booking",
    description: "Book instantly with our safe and secure payment system.",
    
  },
  {
    icon: <PartyPopper className="w-12 h-12 text-[#D6DAC8]" />,
    title: "Enjoy the Event",
    description: "Celebrate with confidence in our well-equipped venues.",
  },
]

export default function HowItWork() {
  return (
    <section className="py-20 bg-[#002147] max-md:-mt-[120px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#D6DAC8] mb-4 max-md:text-2xl">How It Works</h2>
        <p className="text-lg text-[#D6DAC8] max-w-2xl mx-auto mb-12 max-md:text-[14px]">
          Simple steps to make your event unforgettable.
        </p>

   
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="min-w-[240px] md:min-w-0 snap-center flex">
              <Card 
                className="max-md:scal-50 bg-[#002147] border border-[#9CAFAA] md:rounded-t-[200px] max-md:rounded-t-[100px] shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center w-10 h-10 bg-[#D6DAC8] text-[#002147] rounded-full font-bold text-lg">
                    {index + 1}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center flex-grow">
                  {step.icon}
                  <CardTitle className="mt-4 text-xl font-semibold text-[#D6DAC8]">{step.title}</CardTitle>
                  <CardDescription className="mt-2 text-[#D6DAC8]">
                    {step.description}
                  </CardDescription>
                  <Button variant="link" className="mt-4 text-[#D6DAC8] underline hover:text-[#9CAFAA]">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}