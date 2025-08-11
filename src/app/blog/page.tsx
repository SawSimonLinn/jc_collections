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
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "fashion-show-recap-spring-24",
    title: "Fashion Show Recap: Spring '24",
    date: "April 5, 2024",
    excerpt:
      "A look back at the most stunning moments from our Spring 2024 runway show, where heritage met haute couture.",
    image:
      "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    "data-ai-hint": "fashion runway",
  },
  {
    slug: "behind-the-seams",
    title: "Behind the Seams: The Art of Embroidery",
    date: "March 22, 2024",
    excerpt:
      "Journey with us into our workshop and discover the meticulous craftsmanship that goes into our signature embroidery.",
    image:
      "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    "data-ai-hint": "embroidery detail",
  },
  {
    slug: "colors-of-culture",
    title: "The Colors of Culture: Symbolism in Our Designs",
    date: "March 1, 2024",
    excerpt:
      "Explore the rich symbolism behind the colors we choose and how they tell a story of tradition and celebration.",
    image:
      "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true",
    "data-ai-hint": "colorful fabrics",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">
          From the Atelier
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Stories of inspiration, craftsmanship, and culture from the world of
          J&C Collections.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col bg-card border-none shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg object-top"
                  data-ai-hint={post["data-ai-hint"]}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
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
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
