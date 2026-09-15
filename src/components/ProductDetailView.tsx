import React, { useState } from 'react';
import { Product } from '../types';
import { CROSS_SELL_ITEMS, SIZE_CHART } from '../data/products';
import { Star, ShieldCheck, RefreshCw, Truck, Heart, ShoppingBag, ArrowLeft, Check, Sparkles, CheckCircle2, ChevronRight, Ruler } from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, color: string, size: string, quantity: number) => void;
  onBuyNow: (product: Product, color: string, size: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onBack,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'design' | 'material' | 'care' | 'reviews'>('design');
  const [addedToast, setAddedToast] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedColor, selectedSize, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb & Back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#5C7F67] hover:text-[#42614D] bg-[#F2F7F4] px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
          <span>Trang chủ</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Bộ sưu tập</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Showcase (Left: Gallery, Right: Options & CTAs) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Gallery Switcher */}
        <div className="lg:col-span-7 space-y-4">
          {/* Big Featured Image */}
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-[#FAF7F2] border border-[#EBE3D7] shadow-xs">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.badge && (
                <span className="bg-[#5C7F67] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {product.badge}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="bg-[#E06B6B] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Tiết kiệm {discountPercent}%
                </span>
              )}
            </div>

            {/* Wishlist toggle */}
            <button
              onClick={() => onToggleWishlist(product)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-600 hover:text-[#E06B6B] transition-colors shadow-xs cursor-pointer"
              title="Yêu thích"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#E06B6B] text-[#E06B6B]' : ''}`} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#5C7F67] ring-2 ring-[#C4D8CA] scale-102'
                      : 'border-[#EBE3D7] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Góc chụp ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information, Specs & Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#5C7F67] uppercase tracking-wider bg-[#EBF3EE] px-2.5 py-0.5 rounded-md">
                100% Organic Muslin
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs font-semibold text-gray-500">Mã: MK-{product.id.substring(0, 4).toUpperCase()}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              {product.name}
            </h1>

            {/* Rating and Reviews Counter */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-800">{product.rating} / 5.0</span>
              <span className="text-xs text-gray-400">({product.reviewsCount} đánh giá từ ba mẹ)</span>
            </div>
          </div>

          {/* Pricing area */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#ECE5DA] flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl font-black text-[#385942]">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
            {product.originalPrice && (
              <span className="text-sm sm:text-base text-gray-400 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
            {discountPercent > 0 && (
              <span className="ml-auto text-xs font-bold text-[#E06B6B] bg-[#FDE8E8] px-2.5 py-1 rounded-full">
                Giảm {discountPercent}%
              </span>
            )}
          </div>

          {/* Color Selection */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Màu sắc:</span>
              <span className="text-xs font-semibold text-[#5C7F67]">{selectedColor}</span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    selectedColor === c.name
                      ? 'border-[#5C7F67] bg-[#F2F7F4] text-[#3D5B46] ring-1 ring-[#5C7F67]'
                      : 'border-[#E2DDD5] bg-white text-gray-700 hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span
                    style={{ backgroundColor: c.hex }}
                    className="w-3.5 h-3.5 rounded-full border border-gray-300"
                  />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection with quick guide */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Kích cỡ của bé:</span>
              <button
                onClick={onOpenSizeGuide}
                className="text-xs font-bold text-[#5C7F67] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>Xem bảng size chi tiết</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                    selectedSize === size
                      ? 'bg-[#5C7F67] text-white border-[#5C7F67] shadow-2xs'
                      : 'bg-[#FAF8F4] text-gray-700 border-[#E8E1D5] hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-gray-500 italic bg-[#F6FAF7] p-2.5 rounded-xl border border-[#D9EAE0]">
              💡 <strong>Lời khuyên từ Mầm:</strong> Phom may vừa vặn theo chiều cao. Nếu bé mũm mĩm hoặc bố mẹ thích con mặc rộng rãi thoải mái thì nên chọn tăng 1 size nhé.
            </p>
          </div>

          {/* Quantity Stepper & Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#E2DDD5] rounded-xl bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-4 bg-white hover:bg-[#F2F7F4] text-[#42614D] border-2 border-[#5C7F67] font-bold text-xs rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Thêm vào giỏ</span>
              </button>
            </div>

            {/* Buy Now button */}
            <button
              onClick={handleBuy}
              className="w-full py-3.5 px-6 bg-[#5C7F67] hover:bg-[#4B6954] text-white font-extrabold text-sm rounded-2xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Mua Ngay — Giao Tận Nhà</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {addedToast && (
            <div className="p-3 bg-[#EBF3EE] border border-[#BBDBC6] rounded-xl text-xs text-[#35533E] font-bold flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-[#5C7F67]" />
              <span>Đã thêm <strong>{product.name}</strong> vào giỏ hàng!</span>
            </div>
          )}

          {/* 3 Value Guarantees list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-2 p-2 rounded-xl bg-[#FAF8F5]">
              <RefreshCw className="w-4 h-4 text-[#5C7F67] shrink-0 mt-0.5" />
              <div className="text-[11px] text-gray-700">
                <strong>Đổi size 7 ngày</strong>
                <p className="text-gray-500">Shipper đổi tại nhà</p>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2 rounded-xl bg-[#FAF8F5]">
              <ShieldCheck className="w-4 h-4 text-[#5C7F67] shrink-0 mt-0.5" />
              <div className="text-[11px] text-gray-700">
                <strong>OEKO-TEX Class 1</strong>
                <p className="text-gray-500">Thuần khiết an toàn</p>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2 rounded-xl bg-[#FAF8F5]">
              <Truck className="w-4 h-4 text-[#5C7F67] shrink-0 mt-0.5" />
              <div className="text-[11px] text-gray-700">
                <strong>Đồng kiểm khi nhận</strong>
                <p className="text-gray-500">Hài lòng mới trả tiền</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED SPECIFICATIONS TABS */}
      <div className="pt-6 border-t border-[#ECE5DA]">
        <div className="flex items-center gap-2 sm:gap-4 border-b border-[#ECE5DA] overflow-x-auto">
          {[
            { id: 'design', label: 'Thiết Kế & Cảm Hứng' },
            { id: 'material', label: 'Chất Liệu & An Toàn' },
            { id: 'care', label: 'Hướng Dẫn Giặt Ủi' },
            { id: 'reviews', label: `Đánh Giá (${product.reviewsCount})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#5C7F67] text-[#5C7F67]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6">
          {activeTab === 'design' && (
            <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>{product.description}</p>
              <h4 className="font-bold text-gray-900 pt-2">Chi tiết thiết kế nổi bật:</h4>
              <ul className="space-y-2">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5C7F67] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'material' && (
            <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-gray-700 leading-relaxed">
              <div className="p-4 bg-[#F4F9F6] border border-[#D3E8DC] rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#5C7F67] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{product.material}</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Được thu hoạch và tuyển chọn từ các cánh đồng bông hữu cơ không phân hóa học hay thuốc trừ sâu. Đạt chứng chỉ quốc tế OEKO-TEX Standard 100 Class 1 (tiêu chuẩn cao nhất dành riêng cho đồ trẻ sơ sinh và trẻ nhỏ dưới 36 tháng).
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C7F67]" />
                  <span>Độ thoáng khí cao gấp 3 lần so với vải sợi nhân tạo Polyester</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C7F67]" />
                  <span>Không lưu mùi hôi mồ hôi, không gây kích ứng da kể cả bé bị chàm sữa hay viêm da cơ địa</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="max-w-3xl text-xs sm:text-sm text-gray-700 space-y-3">
              <p>Để trang phục của bé luôn mềm mại như ngày đầu tiên, Mầm Kids khuyến khích ba mẹ:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EFE8DE]">
                  <strong className="text-gray-900 block mb-1">1. Giặt thường</strong>
                  <span className="text-xs text-gray-600">Giặt máy ở chế độ đồ trẻ em hoặc giặt tay nhẹ nhàng với nước lạnh/nhiệt độ dưới 30°C.</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EFE8DE]">
                  <strong className="text-gray-900 block mb-1">2. Nước giặt</strong>
                  <span className="text-xs text-gray-600">Nên dùng nước giặt xả chuyên dụng dành cho bé, không dùng thuốc tẩy chứa clo.</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EFE8DE]">
                  <strong className="text-gray-900 block mb-1">3. Phơi khô</strong>
                  <span className="text-xs text-gray-600">Phơi nơi thoáng mát, bóng râm tránh ánh nắng gắt trực tiếp làm xơ sợi bông tự nhiên.</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EFE8DE]">
                  <strong className="text-gray-900 block mb-1">4. Ủi là</strong>
                  <span className="text-xs text-gray-600">Ủi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước để sợi vải luôn bồng bềnh êm dịu.</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F1] border border-[#EAE3D6]">
                <div className="text-center pr-4 border-r border-gray-200">
                  <div className="text-3xl font-black text-[#385942]">{product.rating}</div>
                  <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">{product.reviewsCount} nhận xét</div>
                </div>
                <div className="text-xs text-gray-600">
                  <p className="font-bold text-gray-800">100% đánh giá là phụ huynh đã mua hàng</p>
                  <p className="mt-0.5">Hầu hết các mẹ đều khen chất vải xô muslin mềm mịn, nhẹ tênh và giặt không bị xù lông.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BẢNG HƯỚNG DẪN CHỌN SIZE CHUẨN XÁC */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-[#5C7F67]" />
              <span>Bảng Hướng Dẫn Chọn Size Chuẩn Cho Bé (3 - 12 Tuổi)</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Thông số thiết kế chuẩn dựa trên thể trạng và cân nặng thực tế của trẻ em Việt Nam
            </p>
          </div>
          <span className="text-xs font-bold text-[#5C7F67] bg-[#EBF3EE] px-3 py-1 rounded-full w-fit">
            Hỗ trợ đổi size miễn phí
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] text-gray-700 font-bold border-b border-[#E8E1D5]">
                <th className="py-3 px-4 rounded-l-xl">Kích cỡ</th>
                <th className="py-3 px-4">Độ tuổi gợi ý</th>
                <th className="py-3 px-4">Chiều cao (cm)</th>
                <th className="py-3 px-4">Cân nặng (kg)</th>
                <th className="py-3 px-4">Vòng ngực</th>
                <th className="py-3 px-4 rounded-r-xl">Lời khuyên</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {SIZE_CHART.map((row, idx) => (
                <tr
                  key={row.size}
                  className={`hover:bg-[#FAF8F5] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FDFAF6]'
                  }`}
                >
                  <td className="py-3 px-4 font-bold text-[#3D5B46]">{row.size}</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{row.age}</td>
                  <td className="py-3 px-4 text-gray-700">{row.height}</td>
                  <td className="py-3 px-4 font-bold text-gray-900">{row.weight}</td>
                  <td className="py-3 px-4 text-gray-600">{row.chest}</td>
                  <td className="py-3 px-4 text-gray-500 italic">{row.advice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GỢI Ý PHỐI ĐỒ TRỌN BỘ (Cross-sell) */}
      <div className="space-y-5 pt-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Mix & Match xinh xắn
          </div>
          <h3 className="text-xl font-extrabold text-gray-900">
            Gợi Ý Phối Đồ Trọn Bộ Cho Bé Yêu
          </h3>
          <p className="text-xs text-gray-500">Phối cùng các phụ kiện thuần tự nhiên để bé thêm phần điệu đà</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {CROSS_SELL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-3xl border border-[#ECE5DA] shadow-2xs flex items-center gap-4 hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-2xl object-cover bg-[#F9F7F4] shrink-0"
              />
              <div className="flex-1 min-w-0 space-y-1">
                <h4 className="text-xs font-bold text-gray-900 truncate">{item.name}</h4>
                <div className="text-xs font-extrabold text-[#5C7F67]">
                  {item.price.toLocaleString('vi-VN')}đ
                </div>
                <button
                  onClick={() => alert(`Đã thêm combo ${item.name} vào đơn hàng!`)}
                  className="mt-1 px-3 py-1 bg-[#F2F7F4] hover:bg-[#5C7F67] text-[#42614D] hover:text-white rounded-lg text-[11px] font-bold transition-all cursor-pointer"
                >
                  + Mua kèm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
