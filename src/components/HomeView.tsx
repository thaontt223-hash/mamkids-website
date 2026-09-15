import React, { useState } from 'react';
import { HERO_IMAGE, CATEGORY_PILLARS, PRODUCTS, PARENT_FEEDBACKS, AVATAR_MOM } from '../data/products';
import { ProductCard } from './ProductCard';
import { GrowthEstimator } from './GrowthEstimator';
import { Product } from '../types';
import { Sparkles, Shield, ArrowRight, Heart, RefreshCw, Truck, CheckCircle, Star } from 'lucide-react';

interface HomeViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onNavigateCatalog: (gender?: 'boy' | 'girl' | 'all', age?: '3-6' | '7-12' | 'all') => void;
  onQuickView: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onNavigateCatalog,
  onQuickView
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'best' | 'new' | '3-6' | '7-12'>('all');

  const filteredFeaturedProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'best') return p.badge?.includes('chạy') || p.featured;
    if (activeFilter === 'new') return p.badge?.includes('Mới') || p.category === 'ao';
    if (activeFilter === '3-6') return p.ageRange === '3-6' || p.ageRange === 'both';
    if (activeFilter === '7-12') return p.ageRange === '7-12' || p.ageRange === 'both';
    return true;
  }).slice(0, 8);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#F6F2EA] to-[#FFFDF9] pt-8 pb-16 lg:py-20 border-b border-[#EFE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#EBF3EE] text-[#466952] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E6A23C]" />
                <span>Thương hiệu thời trang hữu cơ Việt Nam</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C3E50] tracking-tight leading-[1.2]">
                Mầm Kids — <br className="hidden sm:inline" />
                <span className="text-[#5C7F67]">Lớn lên trong yêu thương</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                Trang phục 100% sợi hữu cơ tự nhiên cao cấp, thoáng mát tối đa và mềm mại như làn da mẹ vỗ về. Thiết kế may đo theo thể trạng tự nhiên của trẻ em Việt Nam từ 3–12 tuổi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-shop-all-btn"
                  onClick={() => onNavigateCatalog('all', 'all')}
                  className="px-6 py-3.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white text-sm font-bold rounded-2xl shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Khám phá bộ sưu tập mới</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-shop-girl-btn"
                  onClick={() => onNavigateCatalog('girl', 'all')}
                  className="px-5 py-3.5 bg-white hover:bg-[#F2F7F4] text-[#42614D] border border-[#D5E5DA] text-sm font-bold rounded-2xl transition-all cursor-pointer"
                >
                  Đồ Bé Gái
                </button>
                <button
                  id="hero-shop-boy-btn"
                  onClick={() => onNavigateCatalog('boy', 'all')}
                  className="px-5 py-3.5 bg-white hover:bg-[#F2F7F4] text-[#42614D] border border-[#D5E5DA] text-sm font-bold rounded-2xl transition-all cursor-pointer"
                >
                  Đồ Bé Trai
                </button>
              </div>

              {/* Interactive Child Size Estimator embedded in Hero */}
              <div className="pt-4">
                <GrowthEstimator
                  onFindProductsForSize={(size) => {
                    onNavigateCatalog('all', 'all');
                  }}
                />
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Organic backdrop shape */}
                <div className="absolute inset-0 bg-[#E8F0EA] rounded-[40px] rotate-3 scale-95 transition-transform"></div>

                {/* Main Hero Image */}
                <div className="relative z-10 rounded-[36px] overflow-hidden border-4 border-white shadow-xl aspect-4/5 bg-[#F9F7F4]">
                  <img
                    src={HERO_IMAGE}
                    alt="Bé yêu trong trang phục Mầm Kids"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/30 backdrop-blur-md px-2.5 py-1 rounded-full">
                      Bộ Sưu Tập Mùa Hè 2025
                    </span>
                    <h3 className="text-lg font-bold mt-1.5 text-white">Váy hoa xô Muslin mềm như mây</h3>
                  </div>
                </div>

                {/* Floating Trust Card 1 */}
                <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-[#EBE3D7] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">100% Organic Cotton</div>
                    <div className="text-[10px] text-gray-500">Chuẩn OEKO-TEX Class 1</div>
                  </div>
                </div>

                {/* Floating Trust Card 2 */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#EBE3D7] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">+35.000 Phụ Huynh</div>
                    <div className="text-[10px] text-gray-500">Đánh giá 4.98/5 sao hài lòng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY PILLARS (By Age & Gender) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Phân loại tiện lợi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Danh Mục Theo Độ Tuổi & Giới Tính
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Mỗi lứa tuổi đều có phom dáng và nhu cầu vận động riêng biệt, được Mầm Kids nghiên cứu kỹ lưỡng
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_PILLARS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigateCatalog(cat.gender as 'boy' | 'girl', cat.ageRange as '3-6' | '7-12')}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8E1D5] hover:border-[#5C7F67] transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col"
            >
              <div className="aspect-4/5 overflow-hidden bg-[#F6F3EE] relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A7F3D0]">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">{cat.title}</h3>
                  <div className="flex items-center gap-1 text-xs font-semibold text-white/90 mt-2 group-hover:text-[#A7F3D0] transition-colors">
                    <span>Xem sản phẩm</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS WITH FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Được các mẹ yêu thích nhất
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Sản Phẩm Nổi Bật Dành Cho Bé
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF7F2] p-1.5 rounded-2xl border border-[#ECE5DA]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#5C7F67] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tất Cả
            </button>
            <button
              onClick={() => setActiveFilter('best')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'best'
                  ? 'bg-[#5C7F67] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Bán Chạy Nhất
            </button>
            <button
              onClick={() => setActiveFilter('new')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'new'
                  ? 'bg-[#5C7F67] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mới Về
            </button>
            <button
              onClick={() => setActiveFilter('3-6')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === '3-6'
                  ? 'bg-[#5C7F67] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              3 - 6 Tuổi
            </button>
            <button
              onClick={() => setActiveFilter('7-12')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === '7-12'
                  ? 'bg-[#5C7F67] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              7 - 12 Tuổi
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredFeaturedProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlistIds.includes(prod.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => onNavigateCatalog('all', 'all')}
            className="px-8 py-3.5 bg-white hover:bg-[#F2F7F4] text-[#42614D] border-2 border-[#5C7F67] font-bold text-sm rounded-2xl shadow-xs hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Xem tất cả 12 sản phẩm trang phục bé</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. 5 CAM KẾT VÀNG TỪ MẦM KIDS */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#ECE5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5" /> An tâm tuyệt đối
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              5 Cam Kết Vàng Từ Mầm Kids
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Chúng tôi luôn đặt sự an toàn, làn da và nụ cười của trẻ nhỏ lên hàng đầu trong từng mũi kim sợi chỉ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-5 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h4 className="font-bold text-sm text-gray-900">100% Sợi Hữu Cơ Tự Nhiên</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Chỉ sử dụng Cotton hữu cơ, xô Muslin 2 lớp và sợi tre đạt chuẩn quốc tế OEKO-TEX Class 1.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h4 className="font-bold text-sm text-gray-900">May Đo Chuẩn Thể Trạng Bé</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Form dáng suông rộng rãi, đũng quần thoáng giúp bé thoải mái đóng bỉm hoặc chạy nhảy leo trèo.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h4 className="font-bold text-sm text-gray-900">Không Nhãn Mác Gây Ngứa</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Toàn bộ thông tin kích cỡ và chất liệu được in chìm bằng mực gốc nước an toàn, không cọ xát da bé.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h4 className="font-bold text-sm text-gray-900">Đổi Size 7 Ngày Tận Nhà</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Bé mặc chưa vừa vặn? Shipper sẽ mang size mới tới tận nhà đổi cho ba mẹ mà không mất phí ship.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-bold text-lg">
                5
              </div>
              <h4 className="font-bold text-sm text-gray-900">Đồng Kiểm Khi Nhận</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ba mẹ được mở bọc kiểm tra chất vải, đường may ưng ý mới thanh toán tiền cho nhân viên giao hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEEDBACK TỪ CÁC BA MẸ THÔNG THÁI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#E06B6B] text-[#E06B6B]" /> Lắng nghe phản hồi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Feedback Từ Các Ba Mẹ Thông Thái
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Hơn 35.000 gia đình đã tin chọn Mầm Kids làm người bạn đồng hành cho những năm tháng ấu thơ của con
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARENT_FEEDBACKS.map((fb) => (
            <div
              key={fb.id}
              className="bg-white p-6 rounded-3xl border border-[#EBE3D7] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{fb.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={fb.avatar}
                  alt={fb.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#D5E5DA]"
                />
                <div>
                  <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                    <span>{fb.author}</span>
                    <span className="text-[10px] font-bold text-[#5C7F67] bg-[#EBF3EE] px-1.5 py-0.5 rounded-sm">
                      Đã mua hàng
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500">{fb.childInfo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NEWSLETTER CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#5C7F67] text-white p-8 sm:p-12 shadow-md">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">
              Gia nhập Câu lạc bộ Mầm Nhỏ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Nhận voucher 10% cho đơn hàng đầu tiên
            </h2>
            <p className="text-xs sm:text-sm text-[#E2ECE5] leading-relaxed">
              Nhận ngay mã giảm giá đặc biệt, bí quyết chăm sóc da cho bé từ bác sĩ nhi khoa và quà tặng bất ngờ vào tháng sinh nhật của con yêu.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="text"
                placeholder="Nhập email hoặc số điện thoại..."
                className="px-4 py-3 rounded-2xl bg-white text-gray-900 text-xs placeholder:text-gray-400 outline-hidden flex-1"
              />
              <button
                onClick={() => alert('Mã khuyến mãi MAMKIDS10 đã được lưu vào đơn hàng của ba mẹ!')}
                className="px-6 py-3 bg-[#E6A23C] hover:bg-[#D4912B] text-white text-xs font-bold rounded-2xl transition-all shadow-xs cursor-pointer shrink-0"
              >
                Nhận quà ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
