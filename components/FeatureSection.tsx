import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export default function FeatureSection({
  title,
  subtitle,
  features,
}: FeatureSectionProps) {
  return (
    <section className="py-16 lg:py-24" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="font-display text-3xl lg:text-5xl text-foreground mb-4"
            data-testid="text-feature-title"
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-feature-subtitle"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-semibold text-xl mb-3 text-foreground"
                    data-testid={`text-feature-name-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-feature-desc-${index}`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
