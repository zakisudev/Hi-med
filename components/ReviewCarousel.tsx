"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

const reviews = [
  {
    testimonial: "The clinic provided exceptional care. The staff was friendly and professional, making my visit comfortable and stress-free.",
    author: "Emily Johnson",
    profession: "Teacher",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    testimonial: "I was impressed by the modern facilities and the thorough examination. The doctor took time to explain everything clearly.",
    author: "Michael Chen",
    profession: "Software Engineer",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    testimonial: "The wait time was minimal, and the follow-up care was excellent. I highly recommend this clinic to anyone seeking quality healthcare.",
    author: "Sarah Martinez",
    profession: "Graphic Designer",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    testimonial: "Outstanding service and care. The clinic's attention to detail and patient comfort is commendable.",
    author: "David Wilson",
    profession: "Accountant",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    testimonial: "I've never felt more at ease in a medical setting. The staff's expertise and kindness made all the difference.",
    author: "Lisa Thompson",
    profession: "Marketing Manager",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  })
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const handleClick = (index: number) => {
    const targetIndex = index * itemsToShow; // Calculate target index
    if (emblaApi) {
      emblaApi.scrollTo(targetIndex); // Scroll to the calculated index
      setCurrentIndex(index); // Update the current index for the dots
    }
  }

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const newIndex = emblaApi.selectedScrollSnap();
        console.log("Selected index:", newIndex); // Log the current index
        setCurrentIndex(Math.floor(newIndex / itemsToShow)); // Update the index based on visible items
      });
    }
  }, [emblaApi])

  return (
    <div className="w-full px-4 py-8">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full"
        ref={emblaRef}
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-6 sm:basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1">
                <Card className="w-full xl:w-[387px] min-h-[389px] shadow-lg rounded-xl">
                  <CardContent className="p-10">
                    <div className="flex w-[65px] h-[65px] self-start mb-6">
                      <Image
                        width={300}
                        height={300}
                        quality={100}
                        src={'/quote.png'}
                        alt="quote"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-lg mb-6">{review.testimonial}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{review.author}</h3>
                        <p className="text-sm text-muted-foreground">{review.profession}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4">
        {/* {reviews.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => handleClick(index)}
          />
        ))} */}
        {Array.from({ length: Math.ceil(reviews.length / itemsToShow) }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}