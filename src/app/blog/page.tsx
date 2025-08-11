
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { blogPostsData } from '@/lib/blog-data';

const blogPosts = blogPostsData;

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">From the Atelier</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Stories of inspiration, craftsmanship, and culture from the world of J&C Collections.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col bg-card border text-card-foreground shadow-sm transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={post['data-ai-hint']}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
              <CardTitle className="font-headline text-2xl text-foreground leading-tight">{post.title}</CardTitle>
              <p className="mt-4 text-foreground/80">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="link" className="p-0 text-primary hover:text-accent">
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
