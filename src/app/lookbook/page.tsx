import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const lookbookImages = [
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-9.jpg?raw=true",
    alt: "Look 1",
    "data-ai-hint": "fashion editorial",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-11.jpg?raw=true",
    alt: "Look 2",
    "data-ai-hint": "runway model",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-7.jpg?raw=true",
    alt: "Look 3",
    "data-ai-hint": "couture dress",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-3.jpg?raw=true",
    alt: "Look 4",
    "data-ai-hint": "avant garde fashion",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-5.jpg?raw=true",
    alt: "Look 5",
    "data-ai-hint": "street style",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-7.jpg?raw=true",
    alt: "Look 6",
    "data-ai-hint": "summer fashion",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-2.jpg?raw=true",
    alt: "Look 7",
    "data-ai-hint": "winter collection",
  },
  {
    src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-8.jpg?raw=true",
    alt: "Look 8",
    "data-ai-hint": "fashion accessories",
  },
];

export default function LookbookPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="text-center">
        <h1 className="font-headline text-5xl text-primary">Lookbook</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Immerse yourself in our latest collections, a visual journey through
          the heart of our design philosophy.
        </p>
      </div>

      <div className="mt-12 md:mt-16 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {lookbookImages.map((image, index) => (
          <div key={index} className="break-inside-avoid">
            <Card className="overflow-hidden border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover"
                  data-ai-hint={image["data-ai-hint"]}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
