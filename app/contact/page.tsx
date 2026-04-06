import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-testid="text-contact-page-title"
            >
              Get In Touch
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our spawn products? Our expert team is here
              to help you succeed
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <Card data-testid="card-contact-info">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div
                      className="flex items-start gap-4"
                      data-testid="text-contact-email"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          info@mushroomspawnlab.com
                        </p>
                        <p className="text-muted-foreground">
                          orders@mushroomspawnlab.com
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start gap-4"
                      data-testid="text-contact-phone"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4568 (Orders)
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start gap-4"
                      data-testid="text-contact-address"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          123 Farm Road
                          <br />
                          Agriculture City, ST 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start gap-4"
                      data-testid="text-contact-hours"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Saturday: 9:00 AM - 4:00 PM
                        </p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Expert Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    Schedule a free consultation with our mycologists to discuss
                    your cultivation needs, substrate preparation, and growing
                    conditions. We're here to ensure your success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
