import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
const buttonSpawnImg =
  "/generated_images/Button_spawn_product_photo_4ee2d787.png";
const milkySpawnImg =
  "/generated_images/Milky_spawn_product_photo_5eb0bb96.png";
const oysterSpawnImg =
  "/generated_images/Oyster_spawn_product_photo_179b1646.png";

export default function Products() {
  const products = [
    {
      id: "button",
      name: "Button Spawn",
      description:
        "Premium Agaricus bisporus spawn for reliable white button mushroom cultivation with consistent results and high yield potential",
      benefits: [
        "High colonization rate (95%+)",
        "Consistent fruiting cycle every 10-14 days",
        "Disease resistant strain certified by USDA",
        "Ideal for beginners & professionals",
        "Suitable for various growing conditions",
        "Extended shelf life of 6 months refrigerated",
      ],
      image: buttonSpawnImg,
      price: "₹45.00",
      popular: true,
    },
    {
      id: "milky",
      name: "Milky Spawn",
      description:
        "Calocybe indica spawn producing nutritious milky white mushrooms perfect for tropical and subtropical climates",
      benefits: [
        "Heat-tolerant variety (up to 35°C)",
        "Rich protein content (25-35%)",
        "Quick harvest cycle (25-30 days)",
        "Excellent shelf life and storage",
        "High bioavailability of nutrients",
        "Grows well in high humidity environments",
      ],
      image: milkySpawnImg,
      price: "₹42.00",
    },
    {
      id: "oyster",
      name: "Oyster Spawn",
      description:
        "Pleurotus ostreatus spawn for high-yield oyster mushroom production with superior quality and multiple flush potential",
      benefits: [
        "Multiple flush potential (4-6 harvests)",
        "Grows on various substrates (straw, sawdust, coffee grounds)",
        "Fast colonization (14-21 days)",
        "Premium quality caps with rich flavor",
        "Excellent medicinal properties",
        "Adaptable to different growing methods",
      ],
      image: oysterSpawnImg,
      price: "₹48.00",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="font-display text-4xl lg:text-6xl text-foreground mb-6"
              data-testid="text-products-page-title"
            >
              Our Spawn Products
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium quality mushroom spawn, laboratory-tested and certified
              for professional cultivation with guaranteed results
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-16" data-testid="section-all-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl mb-6">
            Not Sure Which Spawn to Choose?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our expert mycologists are here to help you select the perfect spawn
            for your growing conditions and requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2"
            data-testid="button-contact-expert"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
