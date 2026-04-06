import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Thermometer,
  Droplets,
  Sun,
  Shield,
  Truck,
  Leaf,
  Star,
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  FlaskConical,
  Award,
  Users,
  Calendar,
} from "lucide-react";

// Product data with enhanced details
const products = {
  button: {
    id: "button",
    name: "Button Spawn",
    scientificName: "Agaricus bisporus",
    description:
      "Premium Agaricus bisporus spawn for reliable white button mushroom cultivation with consistent results and high yield potential. Our laboratory-tested strain ensures optimal performance in commercial and home cultivation settings.",
    longDescription: `Our Button Spawn (Agaricus bisporus) represents the gold standard in mushroom cultivation. This premium spawn has been carefully selected and laboratory-tested to ensure maximum yield potential and disease resistance. Perfect for both commercial growers and home cultivators, this strain consistently produces high-quality white button mushrooms with excellent flavor and texture.

The spawn is produced using state-of-the-art sterile techniques and maintained in optimal conditions to preserve viability and purity. Each batch undergoes rigorous quality control testing for contaminants and genetic purity, ensuring you receive only the highest quality spawn for your cultivation needs.`,
    benefits: [
      "High colonization rate (95%+)",
      "Consistent fruiting cycle every 10-14 days",
      "Disease resistant strain certified by USDA",
      "Ideal for beginners & professionals",
      "Suitable for various growing conditions",
      "Extended shelf life of 6 months refrigerated",
    ],
    specifications: {
      strain: "Agaricus bisporus var. bisporus",
      substrate: "Rye grain with calcium carbonate",
      colonizationTime: "14-21 days",
      fruitingTime: "10-14 days per flush",
      temperature: "18-22°C (64-72°F)",
      humidity: "85-95%",
      light: "Indirect light or darkness",
      yield: "15-25% biological efficiency",
      shelfLife: "6 months refrigerated",
      purity: "99.9% contamination-free",
    },
    growingTips: [
      "Maintain consistent temperature between 18-22°C for optimal colonization",
      "Keep humidity levels high (85-95%) during fruiting",
      "Provide adequate ventilation to prevent CO2 buildup",
      "Harvest mushrooms when caps are firm and closed",
      "Store spawn refrigerated until ready to use",
      "Use within 6 months of production date",
    ],
    applications: [
      "Commercial mushroom farming",
      "Home cultivation projects",
      "Educational purposes",
      "Restaurant supply",
      "Farmers market production",
      "Research and development",
    ],
    image: "/generated_images/Button_spawn_product_photo_4ee2d787.png",
    gallery: [
      "/generated_images/Button_spawn_product_photo_4ee2d787.png",
      "/generated_images/Lab_quality_control_scene_f84a7c57.png",
    ],
    price: "₹45.00",
    originalPrice: "₹55.00",
    popular: true,
    inStock: true,
    rating: 4.8,
    reviews: 124,
    certifications: ["USDA Certified", "Organic Approved", "Lab Tested"],
    features: [
      {
        icon: Shield,
        title: "Disease Resistant",
        description:
          "Naturally resistant to common mushroom diseases and contaminants",
      },
      {
        icon: Award,
        title: "USDA Certified",
        description:
          "Meets all USDA standards for commercial mushroom production",
      },
      {
        icon: FlaskConical,
        title: "Lab Tested",
        description:
          "Every batch tested for purity and contamination in our state-of-the-art lab",
      },
      {
        icon: Users,
        title: "Expert Support",
        description:
          "Free consultation and growing advice from our mycologists",
      },
    ],
  },
  milky: {
    id: "milky",
    name: "Milky Spawn",
    scientificName: "Calocybe indica",
    description:
      "Calocybe indica spawn producing nutritious milky white mushrooms perfect for tropical and subtropical climates. This heat-tolerant variety offers exceptional nutritional value and quick harvest cycles.",
    longDescription: `Our Milky Spawn (Calocybe indica) is specially bred for tropical and subtropical cultivation conditions. This remarkable strain thrives in high-temperature environments where other mushroom varieties struggle. The milky white mushrooms produced by this spawn are not only visually appealing but also pack exceptional nutritional value.

Rich in protein, vitamins, and minerals, the milky mushroom is becoming increasingly popular among health-conscious consumers and culinary professionals. Our strain has been optimized for consistent production and excellent shelf life, making it ideal for both fresh market sales and processing applications.`,
    benefits: [
      "Heat-tolerant variety (up to 35°C)",
      "Rich protein content (25-35%)",
      "Quick harvest cycle (25-30 days)",
      "Excellent shelf life and storage",
      "High bioavailability of nutrients",
      "Grows well in high humidity environments",
    ],
    specifications: {
      strain: "Calocybe indica",
      substrate: "Wheat straw with rice bran",
      colonizationTime: "10-14 days",
      fruitingTime: "25-30 days",
      temperature: "28-35°C (82-95°F)",
      humidity: "80-90%",
      light: "Indirect light preferred",
      yield: "20-30% biological efficiency",
      shelfLife: "4 months refrigerated",
      purity: "99.9% contamination-free",
    },
    growingTips: [
      "Thrives in warm, humid conditions (28-35°C)",
      "Requires high humidity during fruiting (80-90%)",
      "Benefits from indirect sunlight exposure",
      "Harvest when caps are fully expanded",
      "Excellent for outdoor cultivation in warm climates",
      "Maintain good air circulation to prevent mold",
    ],
    applications: [
      "Tropical cultivation",
      "Outdoor mushroom farming",
      "Nutritional supplement production",
      "Restaurant and culinary use",
      "Health food markets",
      "Educational demonstrations",
    ],
    image: "/generated_images/Milky_spawn_product_photo_5eb0bb96.png",
    gallery: [
      "/generated_images/Milky_spawn_product_photo_5eb0bb96.png",
      "/generated_images/Lab_quality_control_scene_f84a7c57.png",
    ],
    price: "₹42.00",
    originalPrice: "₹50.00",
    popular: false,
    inStock: true,
    rating: 4.6,
    reviews: 89,
    certifications: ["Organic Approved", "Lab Tested", "Heat Tolerant"],
    features: [
      {
        icon: Thermometer,
        title: "Heat Tolerant",
        description:
          "Thrives in temperatures up to 35°C, perfect for tropical climates",
      },
      {
        icon: Leaf,
        title: "High Nutrition",
        description:
          "Rich in protein (25-35%) and essential vitamins and minerals",
      },
      {
        icon: Clock,
        title: "Quick Harvest",
        description: "Fast growing cycle with harvest in just 25-30 days",
      },
      {
        icon: Award,
        title: "Quality Assured",
        description: "Rigorous quality control ensures consistent performance",
      },
    ],
  },
  oyster: {
    id: "oyster",
    name: "Oyster Spawn",
    scientificName: "Pleurotus ostreatus",
    description:
      "Pleurotus ostreatus spawn for high-yield oyster mushroom production with superior quality and multiple flush potential. This versatile strain adapts to various growing methods and substrates.",
    longDescription: `Our Oyster Spawn (Pleurotus ostreatus) is the cornerstone of modern mushroom cultivation. This incredibly versatile strain can grow on a wide variety of substrates including straw, sawdust, coffee grounds, and agricultural waste materials. The oyster mushroom is not only delicious but also offers significant environmental benefits by converting waste materials into nutritious food.

This premium spawn has been selected for its exceptional yield potential and ability to produce multiple flushes from a single inoculation. The mushrooms produced are known for their delicate flavor, tender texture, and excellent nutritional profile. Our strain has been optimized for both commercial production and home cultivation.`,
    benefits: [
      "Multiple flush potential (4-6 harvests)",
      "Grows on various substrates (straw, sawdust, coffee grounds)",
      "Fast colonization (14-21 days)",
      "Premium quality caps with rich flavor",
      "Excellent medicinal properties",
      "Adaptable to different growing methods",
    ],
    specifications: {
      strain: "Pleurotus ostreatus",
      substrate: "Sawdust with wheat bran",
      colonizationTime: "14-21 days",
      fruitingTime: "7-10 days per flush",
      temperature: "20-24°C (68-75°F)",
      humidity: "85-95%",
      light: "Indirect light required",
      yield: "25-35% biological efficiency",
      shelfLife: "5 months refrigerated",
      purity: "99.9% contamination-free",
    },
    growingTips: [
      "Works well with various substrates including straw and sawdust",
      "Maintain temperature between 20-24°C for optimal growth",
      "Requires fresh air exchange for proper cap development",
      "Harvest before caps flatten for best quality",
      "Can produce multiple flushes with proper care",
      "Excellent for beginner cultivators",
    ],
    applications: [
      "Commercial mushroom production",
      "Waste material conversion",
      "Home cultivation",
      "Restaurant supply",
      "Medicinal mushroom production",
      "Educational projects",
    ],
    image: "/generated_images/Oyster_spawn_product_photo_179b1646.png",
    gallery: [
      "/generated_images/Oyster_spawn_product_photo_179b1646.png",
      "/generated_images/Lab_quality_control_scene_f84a7c57.png",
    ],
    price: "₹48.00",
    originalPrice: "₹58.00",
    popular: false,
    inStock: true,
    rating: 4.9,
    reviews: 156,
    certifications: ["Organic Approved", "Lab Tested", "Multi-Substrate"],
    features: [
      {
        icon: Leaf,
        title: "Multi-Substrate",
        description:
          "Grows on straw, sawdust, coffee grounds, and agricultural waste",
      },
      {
        icon: Award,
        title: "High Yield",
        description:
          "Produces 4-6 flushes with excellent biological efficiency",
      },
      {
        icon: Clock,
        title: "Fast Growing",
        description: "Quick colonization and fruiting for faster returns",
      },
      {
        icon: Users,
        title: "Beginner Friendly",
        description: "Easy to grow and perfect for new cultivators",
      },
    ],
  },
};

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular Choice
                  </Badge>
                )}
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(0, 2).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground italic mb-4">
                  {product.scientificName}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  {product.inStock && (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      In Stock
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-lg text-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Certifications */}
                <div className="pt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Certifications:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-8 text-center">
            Why Choose Our {product.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Detailed Description */}
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-6">
                About This Product
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {/* Growing Tips */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Growing Tips
                </h3>
                <ul className="space-y-2">
                  {product.growingTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-6">
                Technical Specifications
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                        >
                          <span className="font-medium text-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Applications
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-8 text-center">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(products)
              .filter((p) => p.id !== product.id)
              .slice(0, 2)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden hover-elevate transition-all"
                >
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                    {relatedProduct.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {relatedProduct.price}
                      </span>
                      <Link href={`/products/${relatedProduct.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}
