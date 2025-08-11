"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const allProducts = {
  womens: [
    {
      id: 1,
      name: "Regal Silk Sari",
      price: 450,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-6.jpg?raw=true",
      "data-ai-hint": "silk sari",
      inStock: true,
      preOrder: false,
    },
    {
      id: 2,
      name: "Embroidered Anarkali",
      price: 320,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-3.jpg?raw=true",
      "data-ai-hint": "anarkali suit",
      inStock: true,
      preOrder: false,
    },
    {
      id: 3,
      name: "Crimson Bloom Sari",
      price: 480,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-2.jpg?raw=true",
      "data-ai-hint": "red sari",
      inStock: false,
      preOrder: true,
    },
    {
      id: 4,
      name: "Midnight Velvet Lehenga",
      price: 750,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/3-4.jpg?raw=true",
      "data-ai-hint": "velvet lehenga",
      inStock: true,
      preOrder: false,
    },
  ],
  mens: [
    {
      id: 5,
      name: "Maharaja Sherwani",
      price: 680,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-9.jpg?raw=true",
      "data-ai-hint": "mens sherwani",
      inStock: true,
      preOrder: false,
    },
    {
      id: 6,
      name: "Ivory Kurta Set",
      price: 250,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/1-11.jpg?raw=true",
      "data-ai-hint": "mens kurta",
      inStock: false,
      preOrder: true,
    },
  ],
  accessories: [
    {
      id: 7,
      name: "Kundan Necklace Set",
      price: 290,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-5.jpg?raw=true",
      "data-ai-hint": "kundan jewelry",
      inStock: true,
      preOrder: false,
    },
    {
      id: 8,
      name: "Embellished Clutch",
      price: 120,
      image:
        "https://github.com/SawSimonLinn/foto_uploads_online/blob/main/jc_collections/photo/2-7.jpg?raw=true",
      "data-ai-hint": "fashion clutch",
      inStock: true,
      preOrder: false,
    },
  ],
};

type Product = (typeof allProducts.womens)[0];
type Category = keyof typeof allProducts;

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="overflow-hidden border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg">
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
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.inStock && <Badge>In Stock</Badge>}
            {product.preOrder && <Badge variant="secondary">Pre-order</Badge>}
          </div>
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
  const [sortBy, setSortBy] = useState("featured");
  const [availability, setAvailability] = useState({
    inStock: true,
    preOrder: true,
  });
  const [activeTab, setActiveTab] = useState<Category>("womens");

  const filteredProducts = useMemo(() => {
    let products: Product[] = [...allProducts[activeTab]];

    // Filter by price
    products = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by availability
    if (availability.inStock && !availability.preOrder) {
      products = products.filter((p) => p.inStock);
    } else if (!availability.inStock && availability.preOrder) {
      products = products.filter((p) => p.preOrder);
    } else if (!availability.inStock && !availability.preOrder) {
      products = [];
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Assuming higher ID is newer.
        products.sort((a, b) => b.id - a.id);
        break;
      case "featured":
      default:
        // Default order
        break;
    }

    return products;
  }, [priceRange, sortBy, availability, activeTab]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="font-headline text-4xl md:text-5xl text-center text-primary mb-4">
        Our Collections
      </h1>
      <p className="text-center text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
        Explore our curated selection of traditional and contemporary designs,
        crafted with passion and precision.
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <aside className="w-full md:w-1/4">
          <h2 className="font-headline text-2xl text-primary mb-6">Filters</h2>
          <div className="space-y-8">
            <div>
              <Label className="text-lg font-headline">Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
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
                  <Checkbox
                    id="in-stock"
                    checked={availability.inStock}
                    onCheckedChange={(checked) =>
                      setAvailability((prev) => ({
                        ...prev,
                        inStock: !!checked,
                      }))
                    }
                  />
                  <Label htmlFor="in-stock" className="font-normal text-sm">
                    In Stock
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="pre-order"
                    checked={availability.preOrder}
                    onCheckedChange={(checked) =>
                      setAvailability((prev) => ({
                        ...prev,
                        preOrder: !!checked,
                      }))
                    }
                  />
                  <Label htmlFor="pre-order" className="font-normal text-sm">
                    Pre-order
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <Tabs
            defaultValue="womens"
            className="w-full"
            onValueChange={(value) => setActiveTab(value as Category)}
          >
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mens" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No products match the selected filters.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
