import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Phone, PenTool, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const products = [
    {
      id: "1",
      name: "Regal Silk Sari",
      price: 450,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-7.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "silk sari",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-6.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "sari design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-5.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "An embodiment of grace and sophistication, this Regal Silk Sari is woven from the finest mulberry silk. Its rich texture and lustrous sheen are complemented by an intricately designed border, making it a timeless addition to any wardrobe.",
    },
    {
      id: "2",
      name: "Embroidered Anarkali",
      price: 320,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-3.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "anarkali suit",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-4.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "anarkali design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-2.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "This Embroidered Anarkali is a perfect blend of tradition and modernity. Crafted from premium fabric, it features intricate embroidery that adds a touch of elegance.",
    },
    {
      id: "3",
      name: "Crimson Bloom Sari",
      price: 480,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-1.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "sari design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-2.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "sari design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-6.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "The Crimson Bloom Sari is a stunning piece that features a vibrant floral pattern on rich silk fabric. Perfect for special occasions.",
    },
    {
      id: "4",
      name: "Midnight Velvet Lehenga",
      price: 750,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-4.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "lehenga design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-3.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "lehenga design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-5.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "The Midnight Velvet Lehenga is a luxurious ensemble crafted from rich velvet fabric. Its intricate embroidery and flowing silhouette make it a perfect choice for evening events.",
    },
    {
      id: "5",
      name: "Maharaja Sherwani",
      price: 680,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-9.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "sherwani design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-10.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "sherwani design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-11.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "The Maharaja Sherwani is a regal outfit that exudes elegance and sophistication. Crafted from luxurious fabric, it features intricate embroidery and a modern silhouette.",
    },
    {
      id: "6",
      name: "Ivory Kurta Set",
      price: 250,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-12.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "kurta design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-13.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "kurta design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-14.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "The Ivory Kurta Set is a timeless classic that combines comfort and style. Made from soft, breathable fabric, it features intricate detailing and a modern silhouette.",
    },
    {
      id: "7",
      name: "Kundan Necklace Set",
      price: 290,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-5.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "kundan jewelry",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-6.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "kundan jewelry",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-7.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "The Kundan Necklace Set is a stunning piece of jewelry that features intricate craftsmanship and a timeless design. Perfect for special occasions.",
    },
    {
      id: "8",
      name: "Embellished Clutch",
      price: 120,
      images: [
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-8.jpg?raw=true",
          alt: "Front view",
          "data-ai-hint": "clutch design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-9.jpg?raw=true",
          alt: "Back view",
          "data-ai-hint": "clutch design",
        },
        {
          src: "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-10.jpg?raw=true",
          alt: "Fabric detail",
          "data-ai-hint": "fabric texture",
        },
      ],
      description:
        "The Embellished Clutch is a chic accessory that adds a touch of glamour to any outfit. Featuring intricate embellishments and a sleek design, it's perfect for special occasions.",
    },
  ];

  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return (
      <div className="container mx-auto py-12 md:py-20 px-4">
        <h1 className="text-3xl font-bold text-center text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="grid grid-cols-1 gap-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={img["data-ai-hint"]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="sticky top-24 h-fit">
          <h1 className="font-headline text-4xl md:text-5xl text-primary">
            {product.name}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-4">
            <span className="text-4xl font-bold text-foreground">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-muted-foreground ml-2">(12 reviews)</span>
            </div>
          </div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us to Order
              </Link>
            </Button>
          </div>

          <div className="mt-8 space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <PenTool className="h-6 w-6 text-accent" />
              <span>Exquisite craftsmanship in every detail</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-accent" />
              <span>Personal styling consultations available</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-headline">
                Details & Care
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Fabric: 100% Pure Mulberry Silk</li>
                  <li>Weave: Handloom</li>
                  <li>Embroidery: Zari and threadwork</li>
                  <li>Care: Dry clean only</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-headline">
                Bespoke Services
              </AccordionTrigger>
              <AccordionContent className="text-base">
                We offer bespoke tailoring and alteration services to ensure a
                perfect fit. Please contact us for a personal consultation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
