"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone, Twitter, Instagram, Facebook, PenTool, Sparkles } from 'lucide-react';
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the form data to your backend
    form.reset();
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <div className="container mx-auto py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">Get In Touch</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our collections, collaborations, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <Card className="bg-card border-none shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="text-base"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="text-base"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us how we can help..." {...field} className="min-h-[120px] text-base" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">Submit Inquiry</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-12">
            <div>
                <h2 className="font-headline text-3xl text-primary mb-6">Contact Information</h2>
                <div className="space-y-4 text-lg">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <span>123 Heritage Lane, Tradition City, 12345</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-accent" />
                        <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-accent" />
                        <span>contact@jnccollections.com</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <span>
                            <span className="font-bold">Opening Hours:</span><br />
                            Mon - Fri: 10:00 AM - 7:00 PM<br />
                            Sat - Sun: 11:00 AM - 5:00 PM
                        </span>
                    </div>
                </div>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">Follow Us</h3>
              <div className="flex items-center gap-6">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
              </div>
            </div>
        </div>
      </div>
      
      <Card className="mt-20 bg-secondary border-none shadow-xl">
        <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <Sparkles className="h-8 w-8 text-primary" />
            </div>
          <CardTitle className="font-headline text-4xl text-primary mt-4">Collaborate With Us</CardTitle>
          <CardDescription className="text-lg max-w-2xl mx-auto text-foreground/80">
            Are you a designer, artisan, or creative with a passion for heritage? Let's create something beautiful together.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
            <p className="text-lg text-foreground/90 mb-6">
            We are always open to new ideas and partnerships that align with our vision of blending tradition with contemporary style. If you have a unique skill or a design concept, we would love to explore the possibilities.
            </p>
          <Button size="lg">Propose a Collaboration</Button>
        </CardContent>
      </Card>
    </div>
  )
}
