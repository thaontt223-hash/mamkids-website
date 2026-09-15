import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { ProductDetailView } from './components/ProductDetailView';
import { CartCheckoutView } from './components/CartCheckoutView';
import { SizeGuideView } from './components/SizeGuideView';
import { CommitmentsView } from './components/CommitmentsView';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter criteria passed to catalog
  const [catalogGender, setCatalogGender] = useState<'boy' | 'girl' | 'all'>('all');
  const [catalogAge, setCatalogAge] = useState<'3-6' | '7-12' | 'all'>('all');

  // Modals and Drawers
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart State (pre-populated with 1 favorite dress so the user sees a rich cart experience immediately)
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'summer-meadow-dress-0',
      product: PRODUCTS[0],
      selectedColor: 'Hoa Nhí Vàng Mơ',
      selectedSize: 'Size 110 (16-19kg)',
      quantity: 1
    }
  ]);

  // Wishlist State (ids of saved products)
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[0].id, PRODUCTS[3].id]);

  // Handlers
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, color: string, size: string, quantity = 1) => {
    const existingIndex = cart.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedColor === color &&
        item.selectedSize === size
    );

    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${color}-${size}-${Date.now()}`,
        product,
        selectedColor: color || product.colors[0]?.name || 'Mặc định',
        selectedSize: size || product.sizes[0] || 'Chuẩn',
        quantity
      };
      setCart([...cart, newItem]);
    }
  };

  const handleBuyNow = (product: Product, color: string, size: string, quantity = 1) => {
    handleAddToCart(product, color, size, quantity);
    setActiveTab('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart(cart.map((i) => (i.id === itemId ? { ...i, quantity: newQty } : i)));
  };

  const handleRemoveItem = (itemId: string) => {
    setCart(cart.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (product: Product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds(wishlistIds.filter((id) => id !== product.id));
    } else {
      setWishlistIds([...wishlistIds, product.id]);
    }
  };

  const handleFilterCategory = (
    gender: 'boy' | 'girl' | 'all' = 'all',
    age: '3-6' | '7-12' | 'all' = 'all'
  ) => {
    setCatalogGender(gender);
    setCatalogAge(age);
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2C3E50] font-sans antialiased selection:bg-[#5C7F67] selection:text-white">
      {/* Global Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartItemCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => {
          setActiveTab('cart');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectProduct={handleSelectProduct}
        onFilterCategory={handleFilterCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod, col, sz) => handleAddToCart(prod, col, sz, 1)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onNavigateCatalog={handleFilterCategory}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        )}

        {activeTab === 'catalog' && (
          <CatalogView
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod, col, sz) => handleAddToCart(prod, col, sz, 1)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            initialGender={catalogGender}
            initialAge={catalogAge}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        )}

        {activeTab === 'detail' && selectedProduct && (
          <ProductDetailView
            product={selectedProduct}
            onBack={() => setActiveTab('catalog')}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onOpenSizeGuide={() => setActiveTab('sizeguide')}
          />
        )}

        {activeTab === 'cart' && (
          <CartCheckoutView
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onContinueShopping={() => setActiveTab('catalog')}
          />
        )}

        {activeTab === 'sizeguide' && (
          <SizeGuideView
            onGoToShop={(size) => {
              setActiveTab('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'commitments' && (
          <CommitmentsView
            onGoToShop={() => {
              setActiveTab('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(prod, col, sz) => handleAddToCart(prod, col, sz, 1)}
        onSelectProduct={handleSelectProduct}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, col, sz, qty) => handleAddToCart(prod, col, sz, qty)}
        onViewFullDetail={handleSelectProduct}
      />

      {/* Floating Support Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-white text-gray-600 shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <a
          href="tel:19006868"
          className="flex items-center gap-2 bg-[#5C7F67] hover:bg-[#4B6954] text-white px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer text-xs font-bold"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Tư vấn size: 1900 6868</span>
        </a>
      </div>
    </div>
  );
}
