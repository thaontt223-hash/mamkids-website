import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-3xl border border-[#ECE5DA] hover:border-[#C4D8CA] transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden relative"
    >
      {/* Product Image Area */}
      <div
        className="relative aspect-4/5 bg-[#F8F6F1] overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-[#5C7F67] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-[#E06B6B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-600 hover:text-[#E06B6B] transition-colors shadow-xs z-10 cursor-pointer"
          title={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-[#E06B6B] text-[#E06B6B]' : ''}`}
          />
        </button>

        {/* Quick View overlay button */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 text-gray-800 text-xs font-bold px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm flex items-center gap-1.5 hover:bg-[#5C7F67] hover:text-white cursor-pointer z-10"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Xem nhanh</span>
          </button>
        )}
      </div>

      {/* Product Details Area */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        {/* Rating and category */}
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span className="font-semibold text-[#5C7F67] capitalize">
            {product.gender === 'boy' ? 'Bé Trai' : product.gender === 'girl' ? 'Bé Gái' : 'Unisex'} • {product.ageRange === '3-6' ? '3-6 tuổi' : '7-12 tuổi'}
          </span>
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(product)}
          className="font-bold text-xs sm:text-sm text-gray-900 line-clamp-2 hover:text-[#5C7F67] transition-colors cursor-pointer leading-snug"
        >
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm sm:text-base font-extrabold text-[#3D5B46]">
            {product.price.toLocaleString('vi-VN')}đ
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice.toLocaleString('vi-VN')}đ
            </span>
          )}
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 pt-1">
          {product.colors.map((c) => (
            <button
              key={c.name}
              title={c.name}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(c.name);
              }}
              style={{ backgroundColor: c.hex }}
              className={`w-4.5 h-4.5 rounded-full border border-gray-300 transition-all cursor-pointer ${
                selectedColor === c.name ? 'ring-2 ring-[#5C7F67] scale-110' : 'hover:scale-105'
              }`}
            />
          ))}
          <span className="text-[10px] text-gray-400 truncate ml-1">
            {selectedColor}
          </span>
        </div>

        {/* Sizes Quick Selection */}
        <div className="flex flex-wrap gap-1 pt-1">
          {product.sizes.slice(0, 3).map((size) => {
            const shortSize = size.split(' ')[0];
            return (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'bg-[#5C7F67] text-white border-[#5C7F67]'
                    : 'bg-[#F9F7F4] text-gray-600 border-[#E8E1D5] hover:border-gray-400'
                }`}
              >
                {shortSize}
              </button>
            );
          })}
          {product.sizes.length > 3 && (
            <span
              onClick={() => onSelect(product)}
              className="text-[10px] text-gray-400 self-center cursor-pointer hover:text-gray-600"
            >
              +{product.sizes.length - 3} size
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleQuickAdd}
          className={`w-full mt-2 py-2 px-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            addedAnimation
              ? 'bg-[#4B7558] text-white'
              : 'bg-[#F2F7F4] hover:bg-[#5C7F67] text-[#42614D] hover:text-white border border-[#D3E3D8]'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Đã thêm vào giỏ</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Thêm vào giỏ</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
