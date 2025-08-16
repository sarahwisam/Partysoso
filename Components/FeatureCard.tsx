// components/FeatureCard.tsx
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
//d4af37
export function FeatureCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <Card className="bg-[#D6DAC8] border-[1.5px] border-[#D6DAC8] rounded-t-[200px] shadow-md  overflow-hidden w-full max-w-sm h-[550px]">
      <div className="w-[400px] h-[370px] relative overflow-hidden rounded-t-xl rounded-t-[20px]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-[#002147]">{title}</h3>
        <p className="text-sm mt-2 text-[#002147]">{description}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button variant="outline" className=" bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B] hover:text-[#D6DAC8] ">
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}