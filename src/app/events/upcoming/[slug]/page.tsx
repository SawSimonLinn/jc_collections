"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Ticket, Users, Building, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const eventData = {
    slug: 'autumn-winter-24-showcase',
    title: 'Autumn/Winter \'24 Showcase',
    date: new Date(new Date().getFullYear() + 1, 9, 26), // Oct 26 of next year
    location: 'The Grand Ballroom, New York',
    description: 'Be the first to witness our breathtaking Autumn/Winter collection as it debuts on the runway. An evening of glamour, artistry, and high fashion awaits, featuring exclusive designs that fuse traditional craftsmanship with modern silhouettes. This is more than a show; it\'s a celebration of heritage redefined.',
    details: [
        "Spectacular runway presentation",
        "Live traditional music ensemble",
        "Meet and greet with the designers",
        "Exclusive after-party with canapés and cocktails"
    ],
    celebrities: [
        { name: 'Priya Anand', image: 'https://placehold.co/100x100.png', hint: 'actress portrait' },
        { name: 'Rohan Mehta', image: 'https://placehold.co/100x100.png', hint: 'actor portrait' },
        { name: 'Isabella Rossi', image: 'https://placehold.co/100x100.png', hint: 'fashion influencer' },
    ],
    sponsors: [
        { name: 'Vogue', logo: 'https://placehold.co/200x100.png', hint: 'fashion magazine logo' },
        { name: 'The Ritz-Carlton', logo: 'https://placehold.co/200x100.png', hint: 'luxury hotel logo' },
        { name: 'Moët & Chandon', logo: 'https://placehold.co/200x100.png', hint: 'champagne logo' },
    ]
};

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Run only on client
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);


  return (
    <div className="flex justify-center gap-4 md:gap-8 my-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center bg-primary/10 p-4 rounded-lg w-24">
          <div className="text-4xl md:text-5xl font-bold text-primary">{value}</div>
          <div className="text-sm uppercase text-muted-foreground">{unit}</div>
        </div>
      ))}
    </div>
  );
};


export default function UpcomingEventDetailsPage({ params }: { params: { slug: string } }) {
  const event = eventData; // In a real app, you'd fetch this based on params.slug

  return (
    <div className="container mx-auto py-12 md:py-20 max-w-5xl">
       <Button asChild variant="ghost" className="mb-8">
        <Link href="/events"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Events</Link>
      </Button>
      <Card className="bg-card border-none shadow-xl overflow-hidden">
        <CardHeader className="bg-secondary p-8 text-center">
            <CardTitle className="font-headline text-5xl text-primary">{event.title}</CardTitle>
            <div className="flex items-center justify-center gap-6 text-muted-foreground mt-2 text-lg">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span>{event.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>{event.location}</span>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-8">
            <Countdown targetDate={event.date} />
            <p className="text-lg text-foreground/80 my-8 text-center max-w-3xl mx-auto">{event.description}</p>
            
            <h3 className="font-headline text-3xl text-primary mb-4 text-center">Event Highlights</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-foreground/90 max-w-md mx-auto">
                {event.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="text-center">
                    <h3 className="font-headline text-3xl text-primary mb-6 flex items-center justify-center gap-3"><Users className="h-8 w-8"/> Special Guests</h3>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {event.celebrities.map(celeb => (
                            <div key={celeb.name} className="flex flex-col items-center gap-2">
                                <Avatar className="h-24 w-24 border-4 border-primary/20">
                                    <AvatarImage src={celeb.image} alt={celeb.name} data-ai-hint={celeb.hint}/>
                                    <AvatarFallback>{celeb.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-bold text-lg">{celeb.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                    <div className="text-center">
                    <h3 className="font-headline text-3xl text-primary mb-6 flex items-center justify-center gap-3"><Building className="h-8 w-8"/> Our Sponsors</h3>
                        <div className="flex flex-wrap gap-8 items-center justify-center">
                        {event.sponsors.map(sponsor => (
                            <Image key={sponsor.name} src={sponsor.logo} alt={sponsor.name} width={150} height={75} className="object-contain" data-ai-hint={sponsor.hint}/>
                        ))}
                    </div>
                </div>
            </div>
        </CardContent>
        <div className="bg-secondary p-8 flex-col items-center text-center">
            <Button size="lg" className="text-lg">
                <Ticket className="mr-2 h-5 w-5" />
                RSVP / Get Tickets
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Tickets are limited. Secure your spot for an unforgettable night!</p>
        </div>
      </Card>
    </div>
  )
}
