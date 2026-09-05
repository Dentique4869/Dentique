import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import Home from './pages/Home';
import UniversityPackages from './pages/UniversityPackages';
import UniversityProducts from './pages/UniversityProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/use-cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
  } = useCart();

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-[100dvh] w-full font-sans bg-white text-slate-900">
        <Navbar
          cartItemCount={totalItems}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToCart={addToCart}
                cartItems={items}
              />
            }
          />

          <Route
            path="/university/:universityId"
            element={<UniversityPackages />}
          />

          <Route
            path="/university/:universityId/:yearId"
            element={<UniversityProducts />}
          />
        </Routes>

        <Footer />

        <CartDrawer
          open={isCartOpen}
          onOpenChange={setIsCartOpen}
          items={items}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
