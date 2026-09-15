import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, PhoneCall, Sparkles, Check } from 'lucide-react';
import { BRAND_LOGO, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectProduct: (product: Product) => void;
  onFilterCategory?: (gender: 'boy' | 'girl' | 'all', age?: '3-6' | '7-12' | 'all') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onFilterCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.vietnameseName && p.vietnameseName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F0EAE1] shadow-xs">
      {/* Top Notification Bar */}
      <div className="bg-[#5C7F67] text-white py-2 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="flex items-center gap-1.5 bg-[#4B6954] px-2 py-0.5 rounded-full text-[11px] font-semibold text-[#E2F0D9]">
              <Sparkles className="w-3 h-3 text-[#FFD166]" /> Ưu đãi hôm nay
            </span>
            <span>Miễn phí vận chuyển toàn quốc cho đơn từ 399.000đ • Tặng nơ xinh hoặc tất cotton cho bé</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#E8F1EC]">
            <a href="tel:19006868" className="flex items-center gap-1 hover:text-white transition-colors">
              <PhoneCall className="w-3 h-3" /> Hotline: 1900 6868 (8:00 - 21:30)
            </a>
            <span className="text-[#8FB399]">|</span>
            <span className="flex items-center gap-1 text-[#E2F0D9]">
              <Check className="w-3 h-3" /> Đổi size tận nhà 7 ngày
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <img
              src={BRAND_LOGO}
              alt="Mầm Kids Logo"
              className="h-11 md:h-13 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
            <button
              id="nav-home-btn"
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-[#F2F7F4] text-[#42614D] font-bold'
                  : 'text-[#4A5568] hover:text-[#42614D] hover:bg-[#FAF7F2]'
              }`}
            >
              Trang Chủ
            </button>
            <button
              id="nav-catalog-btn"
              onClick={() => {
                if (onFilterCategory) onFilterCategory('all', 'all');
                setActiveTab('catalog');
              }}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'catalog'
                  ? 'bg-[#F2F7F4] text-[#42614D] font-bold'
                  : 'text-[#4A5568] hover:text-[#42614D] hover:bg-[#FAF7F2]'
              }`}
            >
              Tất Cả Sản Phẩm
            </button>
            <button
              id="nav-boy-btn"
              onClick={() => {
                if (onFilterCategory) onFilterCategory('boy', 'all');
                setActiveTab('catalog');
              }}
              className="px-3.5 py-2 rounded-xl text-[#4A5568] hover:text-[#42614D] hover:bg-[#FAF7F2] transition-all cursor-pointer"
            >
              Bé Trai
            </button>
            <button
              id="nav-girl-btn"
              onClick={() => {
                if (onFilterCategory) onFilterCategory('girl', 'all');
                setActiveTab('catalog');
              }}
              className="px-3.5 py-2 rounded-xl text-[#4A5568] hover:text-[#42614D] hover:bg-[#FAF7F2] transition-all cursor-pointer"
            >
              Bé Gái
            </button>
            <button
              id="nav-sizeguide-btn"
              onClick={() => setActiveTab('sizeguide')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'sizeguide'
                  ? 'bg-[#F2F7F4] text-[#42614D] font-bold'
                  : 'text-[#4A5568] hover:text-[#42614D] hover:bg-[#FAF7F2]'
              }`}
            >
              Bảng Size
            </button>
            <button
              id="nav-commitments-btn"
              onClick={() => setActiveTab('commitments')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'commitments'
                  ? 'bg-[#F2F7F4] text-[#42614D] font-bold'
                  : 'text-[#4A5568] hover:text-[#42614D] hover:bg-[#FAF7F2]'
              }`}
            >
              5 Cam Kết Vàng
            </button>
          </nav>

          {/* Search bar */}
          <div className="relative hidden md:block flex-1 max-w-xs xl:max-w-sm">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0AEC0]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder="Tìm váy hoa, áo thun cotton, đũi..."
                className="w-full pl-10 pr-4 py-2 bg-[#F8F6F0] border border-[#E9E4DC] focus:border-[#5C7F67] focus:bg-white rounded-full text-xs placeholder:text-[#A0AEC0] outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Autocomplete Dropdown */}
            {searchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#E2DDD5] rounded-2xl shadow-xl p-2 z-50 overflow-hidden">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1">
                  Sản phẩm phù hợp ({searchResults.length})
                </div>
                <div className="divide-y divide-gray-100">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center gap-3 p-2 hover:bg-[#FAF7F2] rounded-xl text-left cursor-pointer transition-colors"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover bg-[#F8F6F0]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-gray-800 truncate">{item.name}</div>
                        <div className="text-[11px] text-[#5C7F67] font-semibold">
                          {item.price.toLocaleString('vi-VN')}đ
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Button */}
            <button
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full hover:bg-[#FAF7F2] text-[#4A5568] hover:text-[#E06B6B] transition-colors cursor-pointer"
              title="Danh sách yêu thích"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E06B6B] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#5C7F67] hover:bg-[#4B6954] text-white pl-3.5 pr-4 py-2 rounded-full font-semibold text-xs transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E06B6B] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Giỏ hàng</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm trang phục bé..."
              className="w-full pl-9 pr-4 py-2 bg-[#F8F6F0] border border-[#E9E4DC] rounded-full text-xs outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EFEAE2] bg-white px-4 py-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-[#F2F7F4]"
          >
            Trang Chủ
          </button>
          <button
            onClick={() => {
              if (onFilterCategory) onFilterCategory('all', 'all');
              setActiveTab('catalog');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-[#F2F7F4]"
          >
            Tất Cả Sản Phẩm
          </button>
          <button
            onClick={() => {
              if (onFilterCategory) onFilterCategory('boy', 'all');
              setActiveTab('catalog');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-[#F2F7F4]"
          >
            Bé Trai (3 - 12 Tuổi)
          </button>
          <button
            onClick={() => {
              if (onFilterCategory) onFilterCategory('girl', 'all');
              setActiveTab('catalog');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-[#F2F7F4]"
          >
            Bé Gái (3 - 12 Tuổi)
          </button>
          <button
            onClick={() => {
              setActiveTab('sizeguide');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-[#F2F7F4]"
          >
            Bảng Tra Cứu Size Chuẩn
          </button>
          <button
            onClick={() => {
              setActiveTab('commitments');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-[#F2F7F4]"
          >
            5 Cam Kết Vàng Của Mầm Kids
          </button>
        </div>
      )}
    </header>
  );
};
