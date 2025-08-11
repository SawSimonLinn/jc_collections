"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    slug: "autumn-winter-24-showcase",
    title: "Autumn/Winter '24 Showcase",
    date: "October 26, 2025",
    location: "The Grand Ballroom, New York",
    excerpt:
      "Be the first to witness our breathtaking Autumn/Winter collection as it debuts on the runway. An evening of glamour and artistry awaits.",
    image:
      "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    "data-ai-hint": "fashion runway high fashion",
  },
];

const pastEvents = [
  {
    slug: "spring-24-runway-show",
    title: "Spring '24 Runway Show",
    date: "April 5, 2024",
    location: "Musée des Arts Décoratifs, Paris",
    excerpt:
      "A look back at our celebrated Spring '24 show in the heart of Paris, where elegance met tradition.",
    image:
      "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    "data-ai-hint": "fashion model paris",
  },
  {
    slug: "heritage-gala-fundraiser",
    title: "Heritage Gala & Fundraiser",
    date: "December 12, 2023",
    location: "The Royal Palace, Jaipur",
    excerpt:
      "An unforgettable night celebrating and supporting the artisans who keep our heritage alive.",
    image:
      "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    "data-ai-hint": "gala event night",
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">Events</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Join us for exclusive showcases, and explore galleries from our most
          memorable moments.
        </p>
      </div>

      <section className="mt-12 md:mt-16">
        <h2 className="font-headline text-4xl text-center text-primary mb-10">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {upcomingEvents.map((post) => (
            <Card
              key={post.slug}
              className="bg-card border text-card-foreground shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-col flex-grow w-full">
                <CardContent className="flex-grow p-6 md:p-8">
                  <CardTitle className="font-headline text-2xl md:text-3xl text-foreground leading-tight">
                    {post.title}
                  </CardTitle>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-muted-foreground mt-3 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>{post.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-foreground/80 text-base md:text-lg">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 md:p-8 pt-0">
                  <Button asChild>
                    <Link href={`/events/upcoming/${post.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-20">
        <h2 className="font-headline text-4xl text-center text-primary mb-10">
          Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pastEvents.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col bg-card border text-card-foreground shadow-sm transition-shadow hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={post["data-ai-hint"]}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date} &middot; {post.location}
                </p>
                <CardTitle className="font-headline text-2xl text-foreground leading-tight">
                  {post.title}
                </CardTitle>
                <p className="mt-4 text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="link"
                  className="p-0 text-primary hover:text-accent"
                >
                  <Link href={`/events/past/${post.slug}`}>
                    View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
