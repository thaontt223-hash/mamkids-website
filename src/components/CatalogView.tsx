import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { GrowthEstimator } from './GrowthEstimator';
import { Product, ProductCategory } from '../types';
import { Filter, SlidersHorizontal, RotateCcw, Sparkles, ChevronRight } from 'lucide-react';

interface CatalogViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  initialGender?: 'boy' | 'girl' | 'all';
  initialAge?: '3-6' | '7-12' | 'all';
  onQuickView: (product: Product) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  initialGender = 'all',
  initialAge = 'all',
  onQuickView
}) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'boy' | 'girl'>(initialGender);
  const [selectedAge, setSelectedAge] = useState<'all' | '3-6' | '7-12'>(initialAge);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [priceRange, setPriceRange] = useState<'all' | 'under150' | '150to250' | 'above250'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Gender filter
      if (selectedGender !== 'all') {
        if (p.gender !== 'unisex' && p.gender !== selectedGender) {
          return false;
        }
      }

      // Age filter
      if (selectedAge !== 'all') {
        if (p.ageRange !== 'both' && p.ageRange !== selectedAge) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Price filter
      if (priceRange === 'under150' && p.price >= 150000) return false;
      if (priceRange === '150to250' && (p.price < 150000 || p.price > 250000)) return false;
      if (priceRange === 'above250' && p.price <= 250000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedGender, selectedAge, selectedCategory, priceRange, sortBy]);

  const handleResetFilters = () => {
    setSelectedGender('all');
    setSelectedAge('all');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb & Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Trang chủ</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-bold">Tất cả sản phẩm</span>
          {selectedGender !== 'all' && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#5C7F67] font-semibold capitalize">
                {selectedGender === 'boy' ? 'Bé Trai' : 'Bé Gái'}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <span>Trang Phục Cho Bé Yêu</span>
              <span className="text-xs font-bold bg-[#EBF3EE] text-[#486B54] px-3 py-1 rounded-full">
                {filteredProducts.length} sản phẩm
              </span>
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Chất liệu 100% sợi hữu cơ tự nhiên, thoáng mát và dịu nhẹ cho da nhạy cảm
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#E2DDD5] rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 outline-hidden focus:border-[#5C7F67] cursor-pointer"
            >
              <option value="featured">Nổi bật nhất</option>
              <option value="rating">Đánh giá cao nhất</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
            </select>
          </div>
        </div>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#E8E1D5] shadow-2xs space-y-4">
        {/* Row 1: Gender & Age */}
        <div className="flex flex-wrap items-center gap-3 justify-between pb-3 border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-700 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#5C7F67]" /> Giới tính:
            </span>
            {(['all', 'boy', 'girl'] as const).map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGender === g
                    ? 'bg-[#5C7F67] text-white shadow-2xs'
                    : 'bg-[#FAF7F2] text-gray-600 hover:bg-[#F2EFE8]'
                }`}
              >
                {g === 'all' ? 'Tất Cả' : g === 'boy' ? 'Bé Trai' : 'Bé Gái'}
              </button>
            ))}

            <div className="h-4 w-px bg-gray-200 mx-2 hidden sm:block"></div>

            <span className="text-xs font-bold text-gray-700 mr-1">Độ tuổi:</span>
            {(['all', '3-6', '7-12'] as const).map((a) => (
              <button
                key={a}
                onClick={() => setSelectedAge(a)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedAge === a
                    ? 'bg-[#5C7F67] text-white shadow-2xs'
                    : 'bg-[#FAF7F2] text-gray-600 hover:bg-[#F2EFE8]'
                }`}
              >
                {a === 'all' ? 'Mọi Lứa Tuổi' : a === '3-6' ? '3 - 6 Tuổi' : '7 - 12 Tuổi'}
              </button>
            ))}
          </div>

          {(selectedGender !== 'all' || selectedAge !== 'all' || selectedCategory !== 'all' || priceRange !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>

        {/* Row 2: Category Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-gray-700 mr-1">Loại trang phục:</span>
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'vay', label: 'Váy / Đầm hoa' },
            { id: 'ao', label: 'Áo thun & Sơ mi' },
            { id: 'quan', label: 'Quần short / Jeans / Jogger' },
            { id: 'dobo', label: 'Đồ bộ mặc nhà' },
            { id: 'aokhoac', label: 'Áo khoác & Hoodie' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#EBF3EE] text-[#40614C] font-bold border border-[#C6DDD0]'
                  : 'bg-white border border-[#E9E4DB] text-gray-600 hover:bg-[#FAF7F2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Row 3: Price Brackets */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
          <span className="text-xs font-bold text-gray-700 mr-1">Mức giá:</span>
          {[
            { id: 'all', label: 'Tất cả giá' },
            { id: 'under150', label: 'Dưới 150.000đ' },
            { id: '150to250', label: '150.000đ - 250.000đ' },
            { id: 'above250', label: 'Trên 250.000đ' }
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setPriceRange(p.id as any)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                priceRange === p.id
                  ? 'bg-gray-800 text-white font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid Area */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E1D5] p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-gray-400 flex items-center justify-center mx-auto">
            <SlidersHorizontal className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">Không tìm thấy sản phẩm phù hợp</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Thử thay đổi bộ lọc giới tính, khoảng giá hoặc danh mục để tìm thấy trang phục ưng ý cho bé nhé.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}

      {/* Interactive Size Estimator Widget on Catalog page */}
      <div className="mt-12 bg-gradient-to-r from-[#F6FAF7] to-[#FAF8F3] rounded-3xl p-6 sm:p-8 border border-[#DCE8E0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#5C7F67] uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Tư vấn miễn phí
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">
              Chưa Chắc Chắn Bé Mặc Vừa Size Nào?
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Kéo thước đo chiều cao bên cạnh để xem size khuyên dùng theo tiêu chuẩn thể trạng trẻ em Việt Nam. Nếu bé tròn người, bố mẹ chỉ cần tăng lên 1 size nhé!
            </p>
          </div>
          <div className="lg:col-span-7">
            <GrowthEstimator compact={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
