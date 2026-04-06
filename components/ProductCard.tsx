import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id?: string;
  name: string;
  description: string;
  benefits: string[];
  image: string;
  price?: string;
  popular?: boolean;
}

export default function ProductCard({
  id,
  name,
  description,
  benefits,
  image,
  price,
  popular,
}: ProductCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate transition-all h-full flex flex-col"
      data-testid={`card-product-${name.toLowerCase().replace(" ", "-")}`}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {popular && (
          <Badge
            className="absolute top-4 right-4 z-10"
            data-testid="badge-popular"
          >
            Popular
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          data-testid={`img-product-${name.toLowerCase().replace(" ", "-")}`}
        />
      </div>

      <CardHeader className="flex-none">
        <h3
          className="font-heading text-2xl text-foreground"
          data-testid={`text-product-name-${name
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {name}
        </h3>
        <p
          className="text-muted-foreground mt-2"
          data-testid={`text-product-description-${name
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {description}
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-2"
              data-testid={`text-benefit-${index}`}
            >
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 flex-none">
        {price && (
          <div className="w-full text-center">
            <span
              className="text-2xl font-bold text-primary"
              data-testid={`text-price-${name.toLowerCase().replace(" ", "-")}`}
            >
              {price}
            </span>
          </div>
        )}
        {id ? (
          <Link href={`/products/${id}`}>
            <Button
              className="w-full"
              data-testid={`button-view-details-${name
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              View Details
            </Button>
          </Link>
        ) : (
          <Button
            className="w-full"
            data-testid={`button-order-${name.toLowerCase().replace(" ", "-")}`}
          >
            Order Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
