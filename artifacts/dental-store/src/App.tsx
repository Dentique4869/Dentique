import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

import Home from './pages/Home';
import UniversityPackages from './pages/UniversityPackages';
import UniversityProducts from './pages/UniversityProducts';

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
      <div className="flex min-h-[100dvh] w-full flex-col bg-white font-sans text-slate-900">
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

          <Route
            path="*"
            element={
              <main className="min-h-[60vh] px-4 py-24 text-center">
                <h1
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Page not found
                </h1>

                <p className="mt-3 text-muted-foreground">
                  The page you are looking for does not exist.
                </p>
              </main>
            }
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

export default App;              <Home
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

          <Route
            path="*"
            element={
              <main className="min-h-[60vh] px-4 py-24 text-center">
                <h1
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Page not found
                </h1>

                <p className="mt-3 text-muted-foreground">
                  The page you are looking for does not exist.
                </p>
              </main>
            }
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

export default App;              />
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
