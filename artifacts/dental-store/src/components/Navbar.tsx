import { ShoppingCart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "./ui/button";

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartItemCount, onOpenCart }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.jpg"
            alt="Dentique"
            className="h-10 w-10 rounded-full object-cover shadow-sm ring-1 ring-border"
          />
          <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
            Dentique
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Catalog
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:flex border-green-700/30 text-green-800 hover:bg-green-50 hover:text-green-900 bg-transparent"
            onClick={() => window.open('https://wa.me/201108350907', '_blank')}
            data-testid="button-nav-whatsapp"
          >
            <SiWhatsapp className="w-4 h-4 mr-2 text-[#25D366]" />
            Contact
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="relative"
            onClick={onOpenCart}
            data-testid="button-nav-cart"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
