import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, ShieldCheck } from 'lucide-react';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FreeStickerBanner } from '@/components/FreeStickerBanner';
import { products, Category, Product } from '@/data/products';
import { UniversitySection } from '@/components/UniversitySection';

const CATEGORIES: Category[] = [
  'All',
  'Operative',
  'Fixed',
  'Removable',
  'Endodontics',
  'Periodontics',
  'Oral Surgery',
  'Orthodontics',
  'Supplies',
];

interface HomeProps {
  onAddToCart: (product: Product) => void;
  cartItems: { id: string; quantity: number }[];
}

export default function Home({ onAddToCart, cartItems }: HomeProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const isItemInCart = (id: string) => cartItems.some(item => item.id === id);
  const getCartQty = (id: string) => cartItems.find(item => item.id === id)?.quantity ?? 0;

  return (
    <main className="flex-1 w-full bg-background">
      <FreeStickerBanner />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32" style={{ background: 'hsl(28,38%,91%)' }}>
        {/* Subtle warm dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'radial-gradient(hsl(22,35%,68%) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />

        {/* Decorative ink-splash blobs (matches logo watercolour feel) */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(22,52%,30%), transparent 70%)' }} />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-8" style={{ background: 'radial-gradient(circle, hsl(34,46%,44%), transparent 70%)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {/* Logo focal point */}
            <div className="flex justify-center mb-8">
              <img
                src="/logo.jpg"
                alt="Dentique"
                className="h-36 w-36 md:h-44 md:w-44 rounded-full object-cover shadow-xl ring-4 ring-white/60"
                style={{ boxShadow: '0 12px 40px hsl(22 52% 20% / 0.25)' }}
              />
            </div>

            <Badge variant="outline" className="mb-6 mx-auto inline-flex border-primary/40 text-primary bg-primary/8">
              Trusted by Dental Students
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
              Professional Dental<br />
              <span style={{ color: 'hsl(22,52%,30%)' }}>Instruments</span> for Students
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Equip yourself with clinical-grade instruments hand-picked for dental students.
              Add what you need to your list and send us a WhatsApp order in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 rounded-full shadow-lg"
                style={{ boxShadow: '0 6px 20px hsl(22 52% 30% / 0.30)' }}
                asChild
              >
                <a href="#catalog">Browse Catalog</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-green-700/40 text-green-800 hover:bg-green-50 bg-white/60"
                onClick={() => window.open('https://wa.me/201108350907', '_blank')}
                data-testid="button-hero-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 mr-2 text-[#25D366]" />
                Order on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-pink-700/30 text-pink-800 hover:bg-pink-50 bg-white/60"
                onClick={() => window.open('https://www.instagram.com/dentique_74?igsi=MXAzd3F0YWY0dWx4Mw==', '_blank')}
                data-testid="button-hero-instagram"
              >
                <SiInstagram className="w-5 h-5 mr-2 text-[#E1306C]" />
                Follow on Instagram
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm font-medium text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>All prices are estimates and may vary based on brand</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalog ───────────────────────────────────────────────────────── */}
      <section id="catalog" className="py-16 md:py-24 container mx-auto px-4">
        <div className="flex flex-col gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Instrument Catalog
            </h2>
            <p className="text-muted-foreground">
              Browse all {products.length} instruments across {CATEGORIES.length - 1} categories.
              Add items to your list, then share your order via WhatsApp.
            </p>
          </div>

          <Tabs
            value={activeCategory}
            onValueChange={(v) => setActiveCategory(v as Category)}
            className="w-full overflow-x-auto pb-2 -mb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <TabsList className="h-12 w-max bg-card border border-border shadow-sm p-1 rounded-lg gap-1">
              {CATEGORIES.map(category => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all whitespace-nowrap text-sm"
                  data-testid={`tab-category-${category.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.18 }}
              >
                <Card
                  className="h-full flex flex-col group overflow-hidden border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card"
                  data-testid={`card-product-${product.id}`}
                >
                  {product.image && (
                    <div className="w-full h-40 overflow-hidden flex items-center justify-center border-b border-border bg-muted/40">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                  )}

                  <CardHeader className="flex-1 pb-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <Badge
                        variant="secondary"
                        className="text-[11px] font-medium shrink-0"
                      >
                        {product.category}
                      </Badge>
                      {isItemInCart(product.id) && (
                        <span className="text-[11px] font-semibold text-green-800 bg-green-100 px-2 py-0.5 rounded-full border border-green-200">
                          x{getCartQty(product.id)} in list
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors mt-2 text-foreground">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-3 pb-5 flex items-center justify-between border-t border-border mt-auto bg-muted/30">
                    <span className="text-xs text-muted-foreground italic">Price on request</span>
                    <Button
                      size="sm"
                      onClick={() => onAddToCart(product)}
                      variant={isItemInCart(product.id) ? "secondary" : "default"}
                      className="rounded-full shadow-sm text-xs h-8 px-4"
                      data-testid={`button-add-to-cart-${product.id}`}
                    >
                      {isItemInCart(product.id) ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1 text-green-700" />
                          Add More
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 mr-1" />
                          Add to List
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-16 text-center text-muted-foreground">
              No instruments found in this category.
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
