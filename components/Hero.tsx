import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
const heroImage = "/generated_images/Mushroom_spawn_lab_hero_3943f6f3.png";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
        <div className="max-w-3xl">
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Premium Quality Mushroom Spawn for Professional Cultivators
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Laboratory-tested spawn with guaranteed purity and high yield
            potential. Trusted by mushroom farmers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/order">
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 py-6"
                data-testid="button-hero-order"
              >
                Order Spawn Now
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                data-testid="button-hero-products"
              >
                View Products
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 lg:gap-8">
            {[
              "Certified Quality",
              "Lab Tested",
              "Fresh Production",
              "Expert Support",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2"
                data-testid={`text-hero-feature-${feature
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
