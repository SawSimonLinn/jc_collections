"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const pastEventData = {
  "spring-24-runway-show": {
    title: "Spring '24 Runway Show",
    date: "April 5, 2024",
    location: "Musée des Arts Décoratifs, Paris",
    description:
      "Relive the magic of our Spring '24 collection showcase in Paris. The gallery captures the fusion of classic artistry and contemporary design that defined this iconic event.",
    images: [
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Runway model in a floral gown",
        hint: "fashion runway model",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Backstage preparations",
        hint: "backstage fashion",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Close-up of an embroidered detail",
        hint: "embroidery detail",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "The design duo taking a bow",
        hint: "fashion designers",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Guests arriving at the venue",
        hint: "fashion event guests",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Atmospheric shot of the runway",
        hint: "runway stage",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "A vibrant silk creation",
        hint: "silk dress",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Celebrities in the front row",
        hint: "front row fashion",
      },
    ],
  },
  "heritage-gala-fundraiser": {
    title: "Heritage Gala & Fundraiser",
    date: "December 12, 2023",
    location: "The Royal Palace, Jaipur",
    description:
      "A night of splendor and purpose. Our Heritage Gala was a resounding success, raising significant funds to support our artisan communities. Explore the gallery to see the highlights of this memorable evening.",
    images: [
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Guests at the gala",
        hint: "gala event",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "A traditional dance performance",
        hint: "traditional dance",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "The palace lit up at night",
        hint: "palace night",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Artisans showcasing their work",
        hint: "artisan showcase",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "A keynote speech being delivered",
        hint: "keynote speech",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "An auction in progress",
        hint: "charity auction",
      },
      {
        src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
        alt: "Exquisite table settings",
        hint: "luxury dining",
      },
    ],
  },
};

export default function PastEventDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = React.use(params);
  const event = pastEventData[slug as keyof typeof pastEventData];

  if (!event) {
    return (
      <div className="container mx-auto py-12 md:py-20 text-center">
        <h1 className="font-headline text-4xl text-primary">Event Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, we couldn't find details for this event.
        </p>
        <Button asChild className="mt-8">
          <Link href="/events">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/events">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </Link>
      </Button>

      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">{event.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {event.date} &middot; {event.location}
        </p>
        <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
          {event.description}
        </p>
      </div>

      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {event.images.map((image, i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                  <Card className="border-none shadow-lg">
                    <CardContent className="flex aspect-video items-center justify-center p-0 relative rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>
      </div>
    </div>
  );
}
