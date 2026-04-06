import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  M
                </span>
              </div>
              <h3 className="font-heading text-xl">Mushroom Spawn Lab</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Premium quality mushroom spawn for professional cultivators
              worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products#button"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-button-spawn"
                >
                  Button Spawn
                </a>
              </li>
              <li>
                <a
                  href="/products#milky"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-milky-spawn"
                >
                  Milky Spawn
                </a>
              </li>
              <li>
                <a
                  href="/products#oyster"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-oyster-spawn"
                >
                  Oyster Spawn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li
                className="flex items-start gap-2"
                data-testid="text-footer-email"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  info@mushroomspawnlab.com
                </span>
              </li>
              <li
                className="flex items-start gap-2"
                data-testid="text-footer-phone"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li
                className="flex items-start gap-2"
                data-testid="text-footer-address"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Farm Road, Agriculture City, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p
            className="text-center text-muted-foreground text-sm"
            data-testid="text-copyright"
          >
            © {new Date().getFullYear()} Mushroom Spawn Lab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
