import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Truck, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  ];

  const product = products.find((p) => p.id === params.id) || products[0];

  return (
    <div className="container mx-auto py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
          <h1 className="font-headline text-5xl text-primary">
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mt-4">
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
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full">
              Add to Cart
            </Button>
            <p className="text-center text-muted-foreground mt-2 text-sm">
              Optional E-Commerce Feature
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-accent" />
              <span>Free worldwide shipping on orders over $500</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <span>Secure payments and hassle-free returns</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-headline">
                Details & Care
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fabric: 100% Pure Mulberry Silk</li>
                  <li>Weave: Handloom</li>
                  <li>Embroidery: Zari and threadwork</li>
                  <li>Care: Dry clean only</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-headline">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent>
                We offer complimentary shipping on all orders. Returns are
                accepted within 30 days of purchase. Please see our full policy
                for more details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
