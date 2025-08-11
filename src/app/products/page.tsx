"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const products = {
  womens: [
    {
      id: 1,
      name: "Regal Silk Sari",
      price: 450,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-6.jpg?raw=true",
      "data-ai-hint": "silk sari",
    },
    {
      id: 2,
      name: "Embroidered Anarkali",
      price: 320,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-3.jpg?raw=true",
      "data-ai-hint": "anarkali suit",
    },
    {
      id: 3,
      name: "Crimson Bloom Sari",
      price: 480,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-2.jpg?raw=true",
      "data-ai-hint": "red sari",
    },
    {
      id: 4,
      name: "Midnight Velvet Lehenga",
      price: 750,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-4.jpg?raw=true",
      "data-ai-hint": "velvet lehenga",
    },
  ],
  mens: [
    {
      id: 5,
      name: "Maharaja Sherwani",
      price: 680,
      image: "https://placehold.co/600x800.png",
      "data-ai-hint": "mens sherwani",
    },
    {
      id: 6,
      name: "Ivory Kurta Set",
      price: 250,
      image: "https://placehold.co/600x800.png",
      "data-ai-hint": "mens kurta",
    },
  ],
  accessories: [
    {
      id: 7,
      name: "Kundan Necklace Set",
      price: 290,
      image: "https://placehold.co/600x800.png",
      "data-ai-hint": "kundan jewelry",
    },
    {
      id: 8,
      name: "Embellished Clutch",
      price: 120,
      image: "https://placehold.co/600x800.png",
      "data-ai-hint": "fashion clutch",
    },
  ],
};

const ProductCard = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    "data-ai-hint": string;
  };
}) => (
  <Card className="overflow-hidden border-transparent shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card">
    <CardContent className="p-0">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={product["data-ai-hint"]}
          />
        </div>
        <div className="p-4">
          <h3 className="font-headline text-xl text-foreground truncate">
            {product.name}
          </h3>
          <p className="text-lg text-primary mt-1 font-semibold">
            ${product.price}
          </p>
        </div>
      </Link>
    </CardContent>
  </Card>
);

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  return (
    <div className="container mx-auto py-12">
      <h1 className="font-headline text-5xl text-center text-primary mb-4">
        Our Collections
      </h1>
      <p className="text-center text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
        Explore our curated selection of traditional and contemporary designs,
        crafted with passion and precision.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-1/4">
          <h2 className="font-headline text-2xl text-primary mb-6">Filters</h2>
          <div className="space-y-8">
            <div>
              <Label className="text-lg font-headline">Sort By</Label>
              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-lg font-headline">Price Range</Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1000}
                step={10}
                className="mt-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <Label className="text-lg font-headline">Availability</Label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="in-stock" />
                  <Label htmlFor="in-stock" className="font-body">
                    In Stock
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pre-order" />
                  <Label htmlFor="pre-order" className="font-body">
                    Pre-order
                  </Label>
                </div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Apply Filters
            </Button>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <Tabs defaultValue="womens" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary">
              <TabsTrigger value="womens" className="font-headline text-base">
                Women's
              </TabsTrigger>
              <TabsTrigger value="mens" className="font-headline text-base">
                Men's
              </TabsTrigger>
              <TabsTrigger
                value="accessories"
                className="font-headline text-base"
              >
                Accessories
              </TabsTrigger>
            </TabsList>
            <TabsContent value="womens" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.womens.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mens" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.mens.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.accessories.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
