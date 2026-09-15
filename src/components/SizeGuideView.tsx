import React from 'react';
import { SIZE_CHART } from '../data/products';
import { GrowthEstimator } from './GrowthEstimator';
import { Ruler, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface SizeGuideViewProps {
  onGoToShop: (size?: string) => void;
}

export const SizeGuideView: React.FC<SizeGuideViewProps> = ({ onGoToShop }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title & Introduction */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] bg-[#EBF3EE] px-3 py-1 rounded-full uppercase tracking-wider">
          <Ruler className="w-3.5 h-3.5" /> Chuẩn vóc dáng bé Việt
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Bảng Tra Cứu Size Chuẩn (3 – 12 Tuổi)
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Được nghiên cứu và may đo tỉ mỉ dựa trên nhân trắc học thể trạng trẻ em Việt Nam, đảm bảo độ rộng rãi thoải mái tối đa mà không bị luộm thuộm.
        </p>
      </div>

      {/* Interactive Estimator Center Stage */}
      <div className="flex justify-center">
        <GrowthEstimator onFindProductsForSize={(size) => onGoToShop(size)} />
      </div>

      {/* Full Size Spec Table */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Bảng Thông Số Kích Thước Chi Tiết
            </h2>
            <p className="text-xs text-gray-500">
              Đối chiếu chiều cao và cân nặng để tìm được size chuẩn nhất cho con
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#5C7F67] bg-[#F2F7F4] px-3.5 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4" />
            <span>Cam kết đổi size tận nhà nếu bé mặc không vừa</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] text-gray-700 font-bold border-b border-[#E8E1D5]">
                <th className="py-3.5 px-4 rounded-l-2xl">Kích Cỡ</th>
                <th className="py-3.5 px-4">Độ Tuổi</th>
                <th className="py-3.5 px-4">Chiều Cao Chuẩn</th>
                <th className="py-3.5 px-4">Cân Nặng Phù Hợp</th>
                <th className="py-3.5 px-4">Vòng Ngực Áo</th>
                <th className="py-3.5 px-4 rounded-r-2xl">Đặc Điểm & Lời Khuyên</th>
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
                  <td className="py-3.5 px-4 font-black text-[#385942] text-sm">
                    {row.size}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-gray-800">{row.age}</td>
                  <td className="py-3.5 px-4 font-medium text-gray-700">{row.height}</td>
                  <td className="py-3.5 px-4 font-bold text-gray-900">{row.weight}</td>
                  <td className="py-3.5 px-4 text-gray-600">{row.chest}</td>
                  <td className="py-3.5 px-4 text-gray-500 italic">{row.advice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 Practical Measuring Tips */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">
          4 Mẹo Nhỏ Giúp Ba Mẹ Đo Chuẩn Xác Cho Bé Tại Nhà
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-[#ECE5DA] shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-xl bg-[#EBF3EE] text-[#5C7F67] font-bold text-xs flex items-center justify-center">
              01
            </span>
            <h4 className="font-bold text-xs text-gray-900">Đo Chiều Cao Đứng Thẳng</h4>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Cho bé đứng thẳng sát vách tường phẳng, gót chân chạm tường và không mang dép, đo từ đỉnh đầu xuống sàn.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#ECE5DA] shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-xl bg-[#EBF3EE] text-[#5C7F67] font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h4 className="font-bold text-xs text-gray-900">Cân Nặng Buổi Sáng</h4>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Cân vào lúc sáng sớm sau khi bé đã đi vệ sinh và chưa ăn quá no để có chỉ số cân nặng chuẩn nhất.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#ECE5DA] shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-xl bg-[#EBF3EE] text-[#5C7F67] font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h4 className="font-bold text-xs text-gray-900">Bé Mũm Mĩm Tăng 1 Size</h4>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Nếu bé có bụng tròn hoặc ba mẹ muốn con mặc rộng rãi thoáng mát thoải mái cho 2 mùa thì nên lấy tăng 1 size.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#ECE5DA] shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-xl bg-[#EBF3EE] text-[#5C7F67] font-bold text-xs flex items-center justify-center">
              04
            </span>
            <h4 className="font-bold text-xs text-gray-900">Đổi Size Tận Nhà Miễn Phí</h4>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Nếu lỡ chọn chưa vừa vặn, chỉ cần nhắn cho Mầm Kids, shipper sẽ giao size mới và thu hồi size cũ tại nhà.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-4">
        <button
          onClick={() => onGoToShop()}
          className="px-8 py-3.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
        >
          <span>Khám phá các mẫu trang phục đang có sẵn</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
