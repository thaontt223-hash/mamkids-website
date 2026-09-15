import React, { useState } from 'react';
import { Ruler, Sparkles, ArrowRight } from 'lucide-react';

interface GrowthEstimatorProps {
  onFindProductsForSize?: (size: string) => void;
  compact?: boolean;
}

export const GrowthEstimator: React.FC<GrowthEstimatorProps> = ({
  onFindProductsForSize,
  compact = false
}) => {
  const [height, setHeight] = useState<number>(110);

  // Derive size from height
  const getRecommendation = (h: number) => {
    if (h < 95) {
      return {
        size: 'Size 90',
        weight: '11 - 13 kg',
        age: '2 - 3 tuổi',
        advice: 'Bé bắt đầu tập đi, phom áo thoải mái để mặc kèm tã/bỉm không bị cộm.'
      };
    } else if (h < 105) {
      return {
        size: 'Size 100',
        weight: '13 - 16 kg',
        age: '3 - 4 tuổi',
        advice: 'Chuẩn vóc dáng mầm non, dễ dàng tự mặc và cởi khi đi học.'
      };
    } else if (h < 115) {
      return {
        size: 'Size 110',
        weight: '16 - 19 kg',
        age: '4 - 5 tuổi',
        advice: 'Kích thước lý tưởng cho bé mẫu giáo lớn chuẩn bị vào lớp một.'
      };
    } else if (h < 125) {
      return {
        size: 'Size 120',
        weight: '19 - 23 kg',
        age: '6 - 7 tuổi',
        advice: 'Phom suông thoáng mát giúp bé tự do vận động giờ ra chơi ở trường.'
      };
    } else if (h < 135) {
      return {
        size: 'Size 130',
        weight: '24 - 28 kg',
        age: '7 - 8 tuổi',
        advice: 'Tôn dáng, may chỉn chu và độ bền vải cao cho lứa tuổi hiếu động.'
      };
    } else if (h < 145) {
      return {
        size: 'Size 140',
        weight: '28 - 33 kg',
        age: '9 - 10 tuổi',
        advice: 'Thiết kế chững chạc, lịch sự khi đi học và đi chơi cùng gia đình.'
      };
    } else {
      return {
        size: 'Size 150',
        weight: '33 - 38 kg',
        age: '11 - 12 tuổi',
        advice: 'Size lớn nhất cho bé tiền dậy thì, tôn dáng và cực kỳ mềm mại.'
      };
    }
  };

  const rec = getRecommendation(height);

  return (
    <div className={`rounded-3xl border border-[#E8E1D5] bg-white shadow-sm p-5 sm:p-6 transition-all ${compact ? 'max-w-md' : 'max-w-xl'}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-800">Trợ Lý Đo Ni Đóng Giày</h3>
            <p className="text-[11px] text-gray-500">Kéo chiều cao hiện tại của bé để xem gợi ý size chuẩn xác</p>
          </div>
        </div>
        <span className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-[#5C7F67] bg-[#F2F7F4] px-2.5 py-1 rounded-full">
          <Sparkles className="w-3 h-3 text-[#E6A23C]" /> Chuẩn tỷ lệ Việt Nam
        </span>
      </div>

      {/* Height Slider */}
      <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-2xl border border-[#EFE8DE]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-600">Chiều cao hiện tại của bé:</span>
          <span className="text-base font-extrabold text-[#5C7F67] bg-white px-3 py-1 rounded-xl shadow-2xs border border-[#E2DDD5]">
            {height} cm
          </span>
        </div>

        <input
          type="range"
          min={90}
          max={155}
          step={1}
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="w-full h-2 bg-[#E2DDD5] rounded-lg appearance-none cursor-pointer accent-[#5C7F67]"
        />

        <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
          <span>90 cm (2-3T)</span>
          <span>110 cm (4-5T)</span>
          <span>130 cm (7-8T)</span>
          <span>155 cm (11-12T)</span>
        </div>
      </div>

      {/* Recommendation Card */}
      <div className="mt-4 p-4 rounded-2xl bg-[#F4F9F6] border border-[#D5EADF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Size khuyên chọn:</span>
            <span className="text-lg font-black text-[#385942] tracking-wide bg-white px-3 py-0.5 rounded-lg border border-[#C2E0CE] shadow-2xs">
              {rec.size}
            </span>
          </div>
          <div className="text-xs text-gray-700 font-semibold flex items-center gap-2">
            <span>Cân nặng phù hợp: <strong className="text-[#385942]">{rec.weight}</strong></span>
            <span className="text-gray-300">•</span>
            <span>Độ tuổi: <strong className="text-[#385942]">{rec.age}</strong></span>
          </div>
          <p className="text-[11px] text-gray-600 italic">
            "{rec.advice}"
          </p>
        </div>

        {onFindProductsForSize && (
          <button
            onClick={() => onFindProductsForSize(rec.size)}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
          >
            <span>Xem đồ {rec.size}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
