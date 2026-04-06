import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FlaskConical,
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Leaf,
} from "lucide-react";
const buttonSpawnImg =
  "/generated_images/Button_spawn_product_photo_4ee2d787.png";
const milkySpawnImg =
  "/generated_images/Milky_spawn_product_photo_5eb0bb96.png";
const oysterSpawnImg =
  "/generated_images/Oyster_spawn_product_photo_179b1646.png";
const labImg = "/generated_images/Lab_quality_control_scene_f84a7c57.png";

export default function Home() {
  const products = [
    {
      id: "button",
      name: "Button Spawn",
      description:
        "Premium Agaricus bisporus spawn for reliable white button mushroom cultivation with consistent results",
      benefits: [
        "High colonization rate (95%+)",
        "Consistent fruiting cycle",
        "Disease resistant strain",
        "Ideal for beginners & professionals",
      ],
      image: buttonSpawnImg,
      price: "₹45.00",
      popular: true,
    },
    {
      id: "milky",
      name: "Milky Spawn",
      description:
        "Calocybe indica spawn producing nutritious milky white mushrooms perfect for tropical climates",
      benefits: [
        "Heat-tolerant variety",
        "Rich protein content",
        "Quick harvest (25-30 days)",
        "Excellent shelf life",
      ],
      image: milkySpawnImg,
      price: "₹42.00",
    },
    {
      id: "oyster",
      name: "Oyster Spawn",
      description:
        "Pleurotus ostreatus spawn for high-yield oyster mushroom production with superior quality",
      benefits: [
        "Multiple flush potential",
        "Grows on various substrates",
        "Fast colonization",
        "Premium quality caps",
      ],
      image: oysterSpawnImg,
      price: "₹48.00",
    },
  ];

  const features = [
    {
      icon: FlaskConical,
      title: "Laboratory Certified",
      description:
        "All spawn batches are tested for purity and contamination in our state-of-the-art laboratory facilities",
    },
    {
      icon: ShieldCheck,
      title: "Quality Guaranteed",
      description:
        "100% satisfaction guarantee with replacement policy for any contaminated batches",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description:
        "Fresh spawn delivered within 3-5 business days with temperature-controlled packaging",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description:
        "Free consultation and technical support from our experienced mycologists",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description:
        "Over 15 years of experience in mushroom spawn production and cultivation",
    },
    {
      icon: Leaf,
      title: "Sustainable Practice",
      description:
        "Eco-friendly production methods using organic substrates and renewable energy",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section
        className="py-16 lg:py-24 bg-background"
        data-testid="section-products"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-display text-3xl lg:text-5xl text-foreground mb-4"
              data-testid="text-products-title"
            >
              Our Premium Spawn Products
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Laboratory-tested, certified quality spawn for reliable mushroom
              cultivation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-view-all-products"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Why Choose Our Spawn Lab"
        subtitle="Industry-leading quality standards and customer service"
        features={features}
      />

      <section
        className="py-16 lg:py-24 bg-card"
        data-testid="section-about-preview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-6">
                Professional Mushroom Spawn Laboratory
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of expertise in mushroom cultivation and
                spawn production, our state-of-the-art laboratory ensures the
                highest quality standards in every batch we produce.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We combine traditional cultivation knowledge with modern
                biotechnology to deliver spawn that consistently outperforms
                expectations. Our team of experienced mycologists oversees every
                step of the production process.
              </p>
              <Link href="/about">
                <Button size="lg" data-testid="button-learn-more">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={labImg}
                alt="Quality control in our mushroom spawn laboratory"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-lab-preview"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-24 bg-primary/5"
        data-testid="section-cta"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-6">
            Ready to Start Growing Premium Mushrooms?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8">
            Order your spawn today and experience the difference that quality
            makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order">
              <Button
                size="lg"
                className="text-lg px-8"
                data-testid="button-cta-order"
              >
                Place Your Order
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                data-testid="button-cta-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
