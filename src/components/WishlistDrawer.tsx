import React from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Trash2, X, ArrowRight } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#ECE5DA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#E06B6B] fill-[#E06B6B]" />
              <h2 className="font-extrabold text-base text-gray-900">
                Sản phẩm yêu thích ({wishlistProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-gray-400 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-sm text-gray-800">Chưa có sản phẩm yêu thích</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Bấm vào biểu tượng trái tim ở các trang phục bé để lưu lại và xem lại bất cứ lúc nào ba mẹ nhé.
                </p>
              </div>
            ) : (
              wishlistProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start gap-4 p-3 bg-[#FAF8F5] rounded-2xl border border-[#ECE5DA]"
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="w-16 h-20 rounded-xl object-cover bg-white cursor-pointer shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="text-xs font-bold text-gray-900 truncate hover:text-[#5C7F67] cursor-pointer"
                    >
                      {p.name}
                    </h4>
                    <div className="text-xs font-extrabold text-[#385942]">
                      {p.price.toLocaleString('vi-VN')}đ
                    </div>
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => {
                          onAddToCart(p, p.colors[0]?.name || '', p.sizes[0] || '');
                        }}
                        className="px-3 py-1.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Thêm vào giỏ</span>
                      </button>
                      <button
                        onClick={() => onRemoveFromWishlist(p)}
                        className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                        title="Bỏ thích"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
