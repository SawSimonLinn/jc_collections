import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-12 md:py-20 max-w-4xl">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
      </Button>
      <article>
        <h1 className="font-headline text-5xl text-primary leading-tight">
          Blog Post Title for: {params.slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">Published on April 5, 2024 by J&C Collections</p>
        
        <div className="relative aspect-video my-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/1200x675.png"
            alt="Blog post image"
            fill
            className="object-cover"
            data-ai-hint="fashion detail"
          />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 prose-p:font-body prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-primary">
          <p>This is a placeholder for the blog post content. The full article would be displayed here, detailing fashion show recaps, behind-the-scenes stories, and cultural insights that define the J&C Collections brand.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>A Deeper Dive</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </article>
    </div>
  );
}
