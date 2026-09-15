import React from 'react';
import { ShieldCheck, RefreshCw, Truck, Heart, Scissors, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { AVATAR_MOM } from '../data/products';

interface CommitmentsViewProps {
  onGoToShop: () => void;
}

export const CommitmentsView: React.FC<CommitmentsViewProps> = ({ onGoToShop }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C7F67] bg-[#EBF3EE] px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#E6A23C]" /> Trách nhiệm & Lương tâm
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          5 Cam Kết Vàng Từ Mầm Kids
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Chúng tôi không chỉ may những bộ quần áo xinh xắn, mà còn dệt nên sự an tâm trọn vẹn cho từng khoảnh khắc con khôn lớn.
        </p>
      </div>

      {/* 5 Commitments Detailed Cards */}
      <div className="space-y-6">
        {/* Commitment 1 */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#ECE5DA] shadow-xs flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-black text-xl shrink-0">
            01
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                100% Sợi Hữu Cơ Tự Nhiên Đạt Chuẩn OEKO-TEX Standard 100 Class 1
              </h3>
              <span className="text-[11px] font-bold text-[#42664E] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full">
                An toàn tuyệt đối cho trẻ nhỏ
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Toàn bộ vải của Mầm Kids là sợi bông hữu cơ, xô Muslin 2 lớp dệt thưa thoáng khí và sợi đũi lụa tự nhiên. Không chứa formaldehyde, thuốc nhuộm độc hại hay kim loại nặng gây dị ứng. Bé mặc suốt cả ngày năng động mà làn da vẫn được hít thở tự nhiên, không bao giờ bị rôm sảy hay ngứa ngáy.
            </p>
          </div>
        </div>

        {/* Commitment 2 */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#ECE5DA] shadow-xs flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-black text-xl shrink-0">
            02
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                May Đo Đo Ni Đóng Giày Theo Tỷ Lệ Cơ Thể Trẻ Em Việt Nam
              </h3>
              <span className="text-[11px] font-bold text-[#42664E] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full">
                Vừa vặn & Tôn dáng
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Trẻ em Việt Nam thường có vòng bụng tròn và lưng ngắn hơn các bạn nhỏ châu Âu. Mầm Kids thiết kế phom dáng hạ nách rộng rãi, đũng quần hạ sâu để đóng bỉm hoặc vận động không cộm, cùng cạp chun bản mềm bọc vải êm ái chống hằn ngấn bụng tối đa.
            </p>
          </div>
        </div>

        {/* Commitment 3 */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#ECE5DA] shadow-xs flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-black text-xl shrink-0">
            03
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                100% Không Nhãn Cổ Gây Ngứa & Đường May Giấu Chỉ Siêu Mềm
              </h3>
              <span className="text-[11px] font-bold text-[#42664E] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full">
                Chăm chút từng mũi chỉ
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Nhiều bé khóc quấy vì chiếc mác vải cọ xát vào gáy cổ. Tại Mầm Kids, 100% thông tin kích cỡ và thành phần vải được in nhiệt trực tiếp bằng mực gốc nước thuần chay. Các đường may bên trong được cuộn mí giấu chỉ kỹ thuật cao, bảo vệ làn da non nớt của bé từng milimet.
            </p>
          </div>
        </div>

        {/* Commitment 4 */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#ECE5DA] shadow-xs flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-black text-xl shrink-0">
            04
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Chính Sách Đổi Size Tận Nhà Miễn Phí Trong 7 Ngày
              </h3>
              <span className="text-[11px] font-bold text-[#42664E] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full">
                Shipper đổi tại cửa nhà
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Trẻ lớn nhanh theo từng tuần khiến ba mẹ đôi khi bối rối chọn size. Nếu nhận đồ bé thử chật hoặc rộng, ba mẹ chỉ cần nhắn cho Mầm Kids. Shipper sẽ mang size mới tới tận nhà giao cho ba mẹ và nhận lại size cũ, ba mẹ không cần chạy ra bưu cục gửi đồ phiền phức.
            </p>
          </div>
        </div>

        {/* Commitment 5 */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#ECE5DA] shadow-xs flex flex-col md:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center font-black text-xl shrink-0">
            05
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Đồng Kiểm Trước Khi Thanh Toán — Hài Lòng Mới Trả Tiền
              </h3>
              <span className="text-[11px] font-bold text-[#42664E] bg-[#EBF3EE] px-2.5 py-0.5 rounded-full">
                Minh bạch & Tin cậy
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Ba mẹ luôn được quyền mở gói hàng, chạm sờ vào chất vải bông xô muslin mát rượi, kiểm tra từng cúc áo gỗ dừa và đường kim mũi chỉ trước khi thanh toán cho nhân viên giao hàng. Nếu không hài lòng vì bất kỳ lý do gì, ba mẹ hoàn toàn có thể từ chối nhận mà không mất phí.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Story Box */}
      <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#ECE4D8] flex flex-col md:flex-row items-center gap-8">
        <img
          src={AVATAR_MOM}
          alt="Nhà sáng lập Mầm Kids"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-[#5C7F67]/20 shrink-0"
        />
        <div className="space-y-3 text-left">
          <span className="text-xs font-bold text-[#5C7F67] uppercase tracking-wider">
            Tâm sự từ Nhà Sáng Lập Mầm Kids
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            "Chúng tôi bắt đầu từ trăn trở của những người làm cha mẹ"
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
            "Mùa hè Việt Nam nắng nóng và độ ẩm cao, trẻ em chạy nhảy nhiều rất dễ toát mồ hôi và nổi rôm sảy nếu mặc quần áo chứa sợi nilông pha. Mầm Kids ra đời không nhằm chạy theo những xu hướng thời trang nhanh lộng lẫy tạm bợ, mà đặt trọng tâm vào chất liệu hữu cơ lành tính nhất để con luôn cười vui, sảng khoái và tự do khám phá thế giới xung quanh."
          </p>
          <div className="pt-1">
            <strong className="text-xs text-gray-900 block">Thảo Nguyễn</strong>
            <span className="text-[11px] text-gray-500">Mẹ của bé Nhím & Đồng sáng lập Mầm Kids</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={onGoToShop}
          className="px-8 py-3.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
        >
          <span>Khám phá các sản phẩm đạt cam kết</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
