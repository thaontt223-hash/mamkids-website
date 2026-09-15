import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, size: string, quantity: number) => void;
  onViewFullDetail: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onViewFullDetail
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#ECE5DA] relative animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Gallery */}
          <div className="bg-[#FAF8F5] p-4 flex flex-col justify-between">
            <div className="aspect-4/5 rounded-2xl overflow-hidden bg-white border border-[#ECE5DA]">
              <img
                src={product.images[activeImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 pt-3 overflow-x-auto">
                {product.images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-14 h-16 rounded-xl overflow-hidden border-2 cursor-pointer ${
                      activeImage === i ? 'border-[#5C7F67]' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#5C7F67] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full uppercase">
                {product.badge || 'Hữu cơ 100%'}
              </span>
              <h3 className="font-extrabold text-base text-gray-900 leading-snug">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-gray-400">({product.reviewsCount} đánh giá)</span>
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-lg font-black text-[#385942]">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}đ
                  </span>
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-gray-700">Màu: {selectedColor}</div>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-5 h-5 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === c.name ? 'ring-2 ring-[#5C7F67]' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-gray-700">Size bé:</div>
              <div className="grid grid-cols-3 gap-1.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-1.5 text-[11px] font-bold rounded-lg border text-center cursor-pointer ${
                      selectedSize === s
                        ? 'bg-[#5C7F67] text-white border-[#5C7F67]'
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    {s.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleAdd}
                className="w-full py-2.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Đã thêm vào giỏ</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Thêm vào giỏ</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onViewFullDetail(product);
                  onClose();
                }}
                className="w-full py-2 bg-transparent text-[#5C7F67] hover:text-[#42614D] text-xs font-bold flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Xem thông số chi tiết & bảng size</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
