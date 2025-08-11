import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="text-center">
          <h1 className="font-headline text-5xl text-primary">Our Story</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            J&C Collections is born from a love for cultural heritage and a
            passion for contemporary design. We are storytellers, weaving tales
            of tradition into every garment.
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true"
              alt="Brand founders"
              fill
              className="object-cover rounded-lg shadow-2xl"
              data-ai-hint="fashion designer portrait"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-4xl text-primary">
              The Visionaries
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              Founded by the visionary duo, Jasmine and Chandra, J&C Collections
              started as a small atelier with a grand dream: to bring the
              richness of their ancestral artistry to the global stage. Their
              combined expertise in traditional weaving and modern fashion
              design created a unique synergy that defines our brand.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              "We believe that clothing is more than just fabric; it's a piece
              of history, a work of art, and an expression of identity," says
              Jasmine. This philosophy is the cornerstone of every collection we
              create.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <h2 className="font-headline text-4xl text-primary">
            Journey of a Thread
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            Follow the incredible journey of our creations, from a single thread
            to a masterpiece on the runway. This is where our heart is.
          </p>
          <div className="mt-8 aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:order-2">
            <h2 className="font-headline text-4xl text-primary">
              A Legacy of Craftsmanship
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our commitment to craftsmanship is unwavering. We partner with
              master artisans from villages renowned for their specific skills,
              be it intricate hand-embroidery, traditional block-printing, or
              the delicate art of Zardozi.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Each piece is a testament to hours of meticulous work, preserving
              age-old techniques while supporting artisan communities. By
              choosing J&C Collections, you are not just acquiring a beautiful
              garment; you are becoming a patron of a living heritage.
            </p>
          </div>
          <div className="relative aspect-square md:order-1">
            <Image
              src="https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/5-1.jpg?raw=true"
              alt="Artisan working on a garment"
              fill
              className="object-cover rounded-lg shadow-2xl"
              data-ai-hint="artisan hands weaving"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
