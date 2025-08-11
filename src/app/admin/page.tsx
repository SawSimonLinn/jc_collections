
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { blogPostsData } from '@/lib/blog-data';
import { Trash2, Edit } from 'lucide-react';

const ADMIN_PASSWORD = "admin";

const blogPostSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  slug: z.string().min(5, { message: "Slug must be at least 5 characters." }).regex(/^[a-z0-9-]+$/, { message: "Slug can only contain lowercase letters, numbers, and hyphens." }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters." }),
  image: z.string().url({ message: "Please enter a valid image URL." }),
  "data-ai-hint": z.string().optional(),
});

type BlogPost = z.infer<typeof blogPostSchema> & { date: string };

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(blogPostsData);
  const [editingPostSlug, setEditingPostSlug] = useState<string | null>(null);

  const form = useForm<z.infer<typeof blogPostSchema>>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      image: "https://placehold.co/800x600.png",
      "data-ai-hint": ""
    },
  });

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      toast({
        title: "Error",
        description: "Incorrect password.",
        variant: "destructive",
      });
    }
  };

  const onBlogPostSubmit = (values: z.infer<typeof blogPostSchema>) => {
    // In a real application, this would send data to a backend/CMS.
    if (editingPostSlug) {
      // Update existing post
      const updatedPosts = blogPosts.map(post => 
        post.slug === editingPostSlug ? { ...post, ...values } : post
      );
      setBlogPosts(updatedPosts);
      toast({
        title: "Success!",
        description: `Blog post "${values.title}" has been updated. (Note: Changes are not persisted).`,
      });
      setEditingPostSlug(null);
    } else {
      // Create new post
      const newPost: BlogPost = {
        ...values,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };
      setBlogPosts([newPost, ...blogPosts]);
      toast({
        title: "Success!",
        description: `Blog post "${values.title}" has been created. (Note: Changes are not persisted).`,
      });
    }
    form.reset({
        title: "",
        slug: "",
        excerpt: "",
        image: "https://placehold.co/800x600.png",
        "data-ai-hint": ""
    });
  };

  const handleEdit = (slug: string) => {
    const postToEdit = blogPosts.find(post => post.slug === slug);
    if (postToEdit) {
      setEditingPostSlug(slug);
      form.reset(postToEdit);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleDelete = (slug: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = blogPosts.filter(post => post.slug !== slug);
      setBlogPosts(updatedPosts);
      toast({
        title: "Post Deleted",
        description: "The blog post has been removed. (Note: Changes are not persisted).",
      });
    }
  };

  const cancelEdit = () => {
    setEditingPostSlug(null);
    form.reset({
        title: "",
        slug: "",
        excerpt: "",
        image: "https://placehold.co/800x600.png",
        "data-ai-hint": ""
    });
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-12 md:py-20 px-4 flex justify-center items-center min-h-[calc(100vh-10rem)]">
        <Card className="w-full max-w-md bg-card">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Admin Access</CardTitle>
            <CardDescription>Enter the password to manage blog posts.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-base"
              />
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">{editingPostSlug ? 'Edit' : 'Create New'} Blog Post</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Fill out the form below to {editingPostSlug ? 'update the' : 'add a new'} article to the blog.
        </p>
      </div>

      <Card className="mt-12 max-w-2xl mx-auto bg-card">
        <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Blog Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onBlogPostSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl><Input placeholder="Blog Post Title" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl><Input placeholder="e.g., my-awesome-post" {...field} disabled={!!editingPostSlug} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl><Textarea placeholder="A short summary of the post..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl><Input placeholder="https://example.com/image.png" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="data-ai-hint"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AI Image Hint</FormLabel>
                    <FormControl><Input placeholder="e.g., fashion detail" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1">{editingPostSlug ? 'Update' : 'Create'} Post</Button>
                {editingPostSlug && <Button type="button" variant="outline" size="lg" onClick={cancelEdit}>Cancel</Button>}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="mt-16">
        <h2 className="font-headline text-4xl text-primary text-center mb-10">Manage Existing Posts</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {blogPosts.map(post => (
            <Card key={post.slug} className="flex items-center justify-between p-4 bg-card">
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm text-muted-foreground">/{post.slug}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(post.slug)}>
                  <Edit className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(post.slug)} className="text-destructive hover:text-destructive">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
