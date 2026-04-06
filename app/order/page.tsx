"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    address: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert(
      "Thank you for your order! We'll contact you shortly to confirm the details."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      address: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-testid="text-order-page-title"
            >
              Place Your Order
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you with order
              confirmation and payment details
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card data-testid="card-order-form">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" data-testid="label-name">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" data-testid="label-email">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" data-testid="label-phone">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product" data-testid="label-product">
                      Select Product *
                    </Label>
                    <Select
                      value={formData.product}
                      onValueChange={(value) =>
                        setFormData({ ...formData, product: value })
                      }
                      required
                    >
                      <SelectTrigger id="product" data-testid="select-product">
                        <SelectValue placeholder="Choose spawn type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="button">
                          Button Spawn - $45.00
                        </SelectItem>
                        <SelectItem value="milky">
                          Milky Spawn - $42.00
                        </SelectItem>
                        <SelectItem value="oyster">
                          Oyster Spawn - $48.00
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" data-testid="label-quantity">
                    Quantity (bags) *
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    required
                    data-testid="input-quantity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" data-testid="label-address">
                    Shipping Address *
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    rows={3}
                    required
                    data-testid="input-address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" data-testid="label-notes">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    rows={4}
                    placeholder="Any special requirements or questions?"
                    data-testid="input-notes"
                  />
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Next Steps:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Submit your order inquiry</li>
                    <li>We'll contact you within 24 hours to confirm</li>
                    <li>Receive payment details and complete payment</li>
                    <li>Your spawn ships within 3-5 business days</li>
                  </ol>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg"
                  data-testid="button-submit-order"
                >
                  Submit Order Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
