import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const heroImages = [
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    alt: "A collection of traditional accessories",
    "data-ai-hint": "traditional jewelry",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-5.jpg?raw=true",
    alt: "Model in a stunning traditional dress",
    "data-ai-hint": "fashion model",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-2.jpg?raw=true",
    alt: "Close-up of intricate fabric details",
    "data-ai-hint": "fabric texture",
  },
];

const featuredLooks = [
  {
    id: 1,
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-2.jpg?raw=true",
    alt: "Elegant evening wear",
    name: "Golden Hour Gown",
    "data-ai-hint": "evening gown",
  },
  {
    id: 2,
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-5.jpg?raw=true",
    alt: "A modern take on a classic design",
    name: "Azure Dream Ensemble",
    "data-ai-hint": "modern fashion",
  },
  {
    id: 3,
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-4.jpg?raw=true",
    alt: "Vibrant and colorful traditional attire",
    name: "Crimson Bloom Sari",
    "data-ai-hint": "traditional sari",
  },
];

const categories = [
  {
    name: "Women's Collection",
    href: "/products",
    image: "https://placehold.co/800x800.png",
    "data-ai-hint": "elegant woman fashion",
  },
  {
    name: "Men's Attire",
    href: "/products",
    image: "https://placehold.co/800x800.png",
    "data-ai-hint": "stylish man portrait",
  },
  {
    name: "Accessories",
    href: "/products",
    image: "https://placehold.co/800x800.png",
    "data-ai-hint": "luxury accessories",
  },
];

const testimonials = [
  {
    quote:
      "The quality and craftsmanship are unparalleled. I felt like royalty wearing the Regal Silk Sari. It's more than a dress; it's a piece of art.",
    name: "Ananya Sharma",
    location: "Mumbai, India",
  },
  {
    quote:
      "J&C Collections understands elegance. The customer service was as exquisite as the gown I purchased. I'll be coming back for more!",
    name: "Isabelle Dubois",
    location: "Paris, France",
  },
  {
    quote:
      "From the intricate details to the luxurious fabric, every piece tells a story. I'm so proud to own and wear a part of this beautiful heritage.",
    name: "Chloe Nguyen",
    location: "New York, USA",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[70vh] md:h-[90vh]">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[70vh] md:h-[90vh] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    data-ai-hint={image["data-ai-hint"]}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <CarouselPrevious className="relative static translate-y-0 text-white border-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="relative static translate-y-0 text-white border-white hover:bg-white/20 hover:text-white" />
          </div>
        </Carousel>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Timeless Elegance, Modern Soul
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Discover the artistry of J&C Collections, where cultural heritage is
            woven into every thread.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary/80 hover:bg-primary border-primary-foreground/50 border backdrop-blur-sm"
          >
            <Link href="/lookbook">Explore Collections</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">
            A Legacy of Craftsmanship
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
            J&C Collections is more than a fashion brand; it's a celebration of
            rich traditions and timeless beauty. Our designs are a tribute to
            the skilled artisans who have passed down their craft through
            generations. We blend classic techniques with contemporary
            aesthetics to create pieces that are both unique and wearable.
          </p>
          <Button
            asChild
            variant="link"
            className="mt-6 text-lg text-accent hover:text-primary"
          >
            <Link href="/about">
              Our Story <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl text-center text-primary mb-12">
            Featured Looks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLooks.map((look) => (
              <Card
                key={look.id}
                className="overflow-hidden border-none shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  <Link href={`/products/${look.id}`}>
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={look.src}
                        alt={look.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={look["data-ai-hint"]}
                      />
                    </div>
                    <div className="p-6 bg-background">
                      <h3 className="font-headline text-2xl text-foreground">
                        {look.name}
                      </h3>
                      <p className="text-primary mt-2 flex items-center">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl text-center text-primary mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="overflow-hidden border-none shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                  <CardContent className="p-0 relative">
                    <div className="relative aspect-square">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={category["data-ai-hint"]}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-headline text-3xl text-white text-center drop-shadow-md">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl text-center text-primary mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-lg flex flex-col"
              >
                <CardContent className="p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <div className="bg-secondary p-6 rounded-b-lg">
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
