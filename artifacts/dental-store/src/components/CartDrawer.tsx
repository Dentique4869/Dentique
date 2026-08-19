import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { CartItem } from "../hooks/use-cart";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

export function CartDrawer({
  open,
  onOpenChange,
  items,
  updateQuantity,
  removeFromCart,
}: CartDrawerProps) {

  const handleShareCart = () => {
    if (items.length === 0) return;

    let message = "Hi Dentique! I'd like to order the following dental instruments:\n\n";
    items.forEach(item => {
      message += `- ${item.name} x${item.quantity}\n`;
    });
    message += "\nPlease confirm availability and pricing. Thank you!";

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/201108350907?text=${encoded}`, '_blank');
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col gap-0 p-0">

        {/* Header */}
        <SheetHeader className="px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <SheetTitle className="text-foreground">Your Order List</SheetTitle>
          </div>
        </SheetHeader>

        {/* Scrollable items */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50 py-20">
              <ShoppingCart className="w-16 h-16 text-muted-foreground" />
              <div className="space-y-1">
                <p className="text-lg font-medium text-muted-foreground">Your list is empty</p>
                <p className="text-sm text-muted-foreground">Add instruments from the catalog to get started.</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 py-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3.5 rounded-lg border border-border bg-card shadow-sm"
                  data-testid={`cart-item-${item.id}`}
                >
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <h4 className="text-sm font-semibold text-foreground leading-snug">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.category}</p>

                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center rounded-md border border-border bg-muted/40 p-0.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-sm"
                          onClick={() => updateQuantity(item.id, -1)}
                          data-testid={`button-decrease-${item.id}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-7 text-center text-sm font-medium text-foreground" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-sm"
                          onClick={() => updateQuantity(item.id, 1)}
                          data-testid={`button-increase-${item.id}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10 ml-auto"
                        onClick={() => removeFromCart(item.id)}
                        data-testid={`button-remove-${item.id}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — always at the bottom of the drawer */}
        {items.length > 0 && (
          <SheetFooter className="flex flex-col gap-2 px-4 py-4 border-t border-border bg-card shrink-0">
            <div className="mb-1">
              <p className="text-sm font-medium text-foreground">
                {items.reduce((s, i) => s + i.quantity, 0)} item{items.reduce((s, i) => s + i.quantity, 0) !== 1 ? 's' : ''} in your list
              </p>
              <p className="text-xs text-muted-foreground">Pricing will be confirmed via WhatsApp.</p>
            </div>

            <Button
              className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white shadow-md shadow-green-500/20"
              size="lg"
              onClick={handleShareCart}
              data-testid="button-share-cart-whatsapp"
            >
              <SiWhatsapp className="w-5 h-5 mr-2" />
              Share Order on WhatsApp
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              No payment required now. We will confirm availability and arrange delivery.
            </p>
          </SheetFooter>
        )}

      </SheetContent>
    </Sheet>
  );
}
