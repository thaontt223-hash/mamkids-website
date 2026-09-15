import React, { useState } from 'react';
import { BRAND_LOGO } from '../data/products';
import { Mail, Phone, MapPin, ShieldCheck, RefreshCw, Truck, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#2D3E33] text-[#E8ECE9] border-t border-[#3F5447] pt-16 pb-8">
      {/* Top Value Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#3F5447]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#35483C]/60 border border-[#445C4D]">
            <div className="w-12 h-12 rounded-xl bg-[#5C7F67] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#A7F3D0]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">100% Organic Cotton</h4>
              <p className="text-xs text-[#B9C7BE]">Chứng nhận an toàn OEKO-TEX Class 1 cho trẻ</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#35483C]/60 border border-[#445C4D]">
            <div className="w-12 h-12 rounded-xl bg-[#5C7F67] flex items-center justify-center text-white shrink-0">
              <RefreshCw className="w-6 h-6 text-[#FDE68A]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Đổi size 7 ngày tận nhà</h4>
              <p className="text-xs text-[#B9C7BE]">Shipper mang size mới đến tận cửa nhà</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#35483C]/60 border border-[#445C4D]">
            <div className="w-12 h-12 rounded-xl bg-[#5C7F67] flex items-center justify-center text-white shrink-0">
              <Truck className="w-6 h-6 text-[#93C5FD]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Freeship từ 399.000đ</h4>
              <p className="text-xs text-[#B9C7BE]">Giao hỏa tốc 2h tại TP.HCM & Hà Nội</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#35483C]/60 border border-[#445C4D]">
            <div className="w-12 h-12 rounded-xl bg-[#5C7F67] flex items-center justify-center text-white shrink-0">
              <Heart className="w-6 h-6 text-[#FCA5A5]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Đồng kiểm khi nhận</h4>
              <p className="text-xs text-[#B9C7BE]">Mở bọc sờ chất vải hài lòng mới trả tiền</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/90 p-2.5 rounded-2xl inline-block shadow-sm">
              <img src={BRAND_LOGO} alt="Mầm Kids" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-xs text-[#CAD4CD] leading-relaxed max-w-sm">
              Mầm Kids ra đời từ tình yêu thương của những người làm cha mẹ, hướng đến việc tạo ra trang phục thuần khiết, thoáng khí và êm dịu nhất cho hành trình khôn lớn tự nhiên của trẻ em Việt Nam từ 3 đến 12 tuổi.
            </p>
            <div className="space-y-2 text-xs text-[#CAD4CD]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A7F3D0] shrink-0 mt-0.5" />
                <span>Showroom: 168 Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                <span>Hotline: 1900 6868 (8:00 - 21:30 hàng ngày)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                <span>Email: chamsockhachhang@mamkids.vn</span>
              </div>
            </div>
          </div>

          {/* Column 2: Danh Mục */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Danh Mục</h4>
            <ul className="space-y-2.5 text-xs text-[#CAD4CD]">
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Tất cả trang phục
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Thời trang Bé Trai 3-12 tuổi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Thời trang Bé Gái 3-12 tuổi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Váy đầm xô Muslin mùa hè
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Áo thun cotton hữu cơ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Đồ bộ mặc nhà thoáng mát
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hỗ Trợ & Chính Sách */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Hỗ Trợ Khách Hàng</h4>
            <ul className="space-y-2.5 text-xs text-[#CAD4CD]">
              <li>
                <button onClick={() => onNavigate('sizeguide')} className="hover:text-white transition-colors cursor-pointer">
                  Bảng tra cứu size chuẩn bé
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commitments')} className="hover:text-white transition-colors cursor-pointer">
                  5 cam kết vàng từ Mầm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commitments')} className="hover:text-white transition-colors cursor-pointer">
                  Chính sách đổi hàng trong 7 ngày
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commitments')} className="hover:text-white transition-colors cursor-pointer">
                  Quy trình đồng kiểm khi nhận
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('commitments')} className="hover:text-white transition-colors cursor-pointer">
                  Hướng dẫn giặt ủi đồ cotton
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">CLB Mầm Nhỏ</h4>
            <p className="text-xs text-[#CAD4CD] leading-relaxed mb-3">
              Đăng ký nhận voucher 10% cho đơn hàng đầu tiên và quà tặng sinh nhật đặc biệt cho bé.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của ba mẹ..."
                  className="w-full px-3.5 py-2.5 bg-[#3A5042] border border-[#4D6756] rounded-xl text-xs text-white placeholder:text-[#9FB1A5] focus:outline-hidden focus:border-[#A7F3D0]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-[#5C7F67] hover:bg-[#6D947A] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Nhận Voucher 10%</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <div className="mt-2 text-[11px] text-[#A7F3D0] flex items-center gap-1.5 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Mã MAMKIDS10 đã được kích hoạt trong giỏ hàng của ba mẹ!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-6 border-t border-[#3F5447] text-xs text-[#95A69B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2025 Mầm Kids - Thời Trang Hữu Cơ Cho Trẻ Em Việt Nam. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Bảo mật thông tin</span>
          <span>Điều khoản dịch vụ</span>
          <span>Chứng chỉ OEKO-TEX Standard 100</span>
        </div>
      </div>
    </footer>
  );
};
