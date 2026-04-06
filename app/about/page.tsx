import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Microscope, TrendingUp } from "lucide-react";
const labImg = "/generated_images/Lab_quality_control_scene_f84a7c57.png";

export default function About() {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Microscope, label: "Spawn Batches/Year", value: "10000+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-testid="text-about-page-title"
            >
              About Our Spawn Lab
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the mushroom cultivation industry with quality,
              innovation, and expertise since 2009
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-all"
                  data-testid={`card-stat-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div
                      className="text-3xl font-bold text-foreground mb-2"
                      data-testid={`text-stat-value-${index}`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm text-muted-foreground"
                      data-testid={`text-stat-label-${index}`}
                    >
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={labImg}
                alt="Our professional mushroom spawn laboratory"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-about-lab"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2009 by a team of passionate mycologists, Mushroom
                  Spawn Lab began with a simple mission: to provide the highest
                  quality mushroom spawn to cultivators worldwide.
                </p>
                <p>
                  What started as a small laboratory operation has grown into
                  one of the most trusted names in the industry. Our commitment
                  to quality, scientific rigor, and customer success has
                  remained unwavering throughout our journey.
                </p>
                <p>
                  Today, we serve over 5,000 satisfied customers annually, from
                  small-scale hobbyists to large commercial operations,
                  delivering spawn that consistently exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-12">
            Our Quality Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Laboratory Testing",
                description:
                  "Every batch undergoes rigorous testing for contamination, viability, and genetic purity using advanced microscopy and culture techniques.",
              },
              {
                title: "Quality Control",
                description:
                  "Multi-stage quality checks throughout production ensure only the highest quality spawn reaches our customers.",
              },
              {
                title: "Certified Production",
                description:
                  "Our facility follows USDA organic standards and maintains ISO-certified clean room environments for spawn production.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all"
                data-testid={`card-quality-${index}`}
              >
                <CardContent className="p-6 lg:p-8">
                  <h3
                    className="font-semibold text-xl mb-3 text-foreground"
                    data-testid={`text-quality-title-${index}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-quality-desc-${index}`}
                  >
                    {item.description}
                  </p>
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
