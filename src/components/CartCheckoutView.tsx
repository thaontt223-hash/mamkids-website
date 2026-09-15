import React, { useState } from 'react';
import { CartItem, OrderInfo } from '../types';
import { ShoppingBag, Trash2, ShieldCheck, ArrowLeft, CheckCircle2, QrCode, CreditCard, Sparkles, Truck, Check } from 'lucide-react';

interface CartCheckoutViewProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
}

export const CartCheckoutView: React.FC<CartCheckoutViewProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping
}) => {
  const [couponCode, setCouponCode] = useState('MAMKIDS10');
  const [couponApplied, setCouponApplied] = useState(true);
  const [couponDiscountPercent, setCouponDiscountPercent] = useState(10);
  const [couponMessage, setCouponMessage] = useState('Đã áp dụng mã MAMKIDS10 giảm 10% đơn hàng đầu tiên!');

  // Form State
  const [form, setForm] = useState<OrderInfo>({
    fullName: '',
    phone: '',
    email: '',
    province: 'Hồ Chí Minh',
    district: 'Quận 3',
    address: '',
    note: 'Xin hãy gọi trước khi giao hàng 15 phút',
    paymentMethod: 'cod'
  });

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [generatedOrderCode, setGeneratedOrderCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = couponApplied ? Math.round((subtotal * couponDiscountPercent) / 100) : 0;
  const shippingFee = subtotal >= 399000 || subtotal === 0 ? 0 : 30000;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'MAMKIDS10') {
      setCouponApplied(true);
      setCouponDiscountPercent(10);
      setCouponMessage('Đã áp dụng mã MAMKIDS10 giảm 10% thành công!');
    } else if (couponCode.trim().toUpperCase() === 'FREESHIP') {
      setCouponApplied(true);
      setCouponDiscountPercent(0);
      setCouponMessage('Đã áp dụng mã miễn phí vận chuyển!');
    } else {
      setCouponApplied(false);
      setCouponMessage('Mã giảm giá không tồn tại hoặc đã hết hạn.');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.address.trim()) {
      alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `MK-${Math.floor(10000 + Math.random() * 90000)}`;
      setGeneratedOrderCode(code);
      setIsSubmitting(false);
      setOrderSuccess(true);
    }, 800);
  };

  if (cart.length === 0 && !orderSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-[#FAF7F2] text-[#5C7F67] rounded-full flex items-center justify-center mx-auto border border-[#E9E4DA]">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900">Giỏ hàng của bé đang trống</h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          Mầm Kids còn rất nhiều mẫu váy hoa muslin, áo thun cotton hữu cơ và đồ bộ thoáng mát đang chờ bé khám phá!
        </p>
        <button
          onClick={onContinueShopping}
          className="px-6 py-3.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white font-bold text-xs rounded-2xl transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Khám phá trang phục ngay</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onContinueShopping}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#5C7F67] hover:text-[#42614D] bg-[#F2F7F4] px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tiếp tục chọn đồ cho bé</span>
        </button>
        <span className="text-xs text-gray-500 font-semibold">
          Đơn hàng gồm ({cart.reduce((acc, i) => acc + i.quantity, 0)} món)
        </span>
      </div>

      {/* Free shipping progress bar */}
      <div className="bg-[#FAF8F5] border border-[#EBE3D7] p-4 rounded-2xl">
        <div className="flex items-center justify-between text-xs font-bold mb-2">
          <div className="flex items-center gap-2 text-[#466952]">
            <Truck className="w-4 h-4 text-[#5C7F67]" />
            <span>
              {subtotal >= 399000
                ? 'Tuyệt vời! Đơn hàng của bạn đã đủ điều kiện FREESHIP toàn quốc 🎉'
                : `Mua thêm ${(399000 - subtotal).toLocaleString('vi-VN')}đ để nhận FREESHIP toàn quốc!`}
            </span>
          </div>
          <span className="text-[#5C7F67]">
            {Math.min(100, Math.round((subtotal / 399000) * 100))}%
          </span>
        </div>
        <div className="w-full bg-[#E5DFD4] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#5C7F67] h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, (subtotal / 399000) * 100)}%` }}
          />
        </div>
      </div>

      {/* Main Layout: Left = Cart items + Delivery Form, Right = Order Summary & Payment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column: Cart items & Delivery Details */}
        <div className="lg:col-span-7 space-y-6">
          {/* Cart items list */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECE5DA] shadow-2xs space-y-4">
            <h2 className="font-extrabold text-base text-gray-900 flex items-center justify-between">
              <span>Sản phẩm trong giỏ</span>
              <button
                onClick={onClearCart}
                className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                Xóa tất cả
              </button>
            </h2>

            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="py-4 flex items-start gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-18 h-22 rounded-2xl object-cover bg-[#FAF7F2] shrink-0 border border-[#EFE8DE]"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 truncate">
                      {item.product.name}
                    </h3>
                    <div className="text-[11px] text-gray-500 flex items-center gap-3">
                      <span>Màu: <strong className="text-gray-700">{item.selectedColor}</strong></span>
                      <span>•</span>
                      <span>Kích cỡ: <strong className="text-gray-700">{item.selectedSize}</strong></span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#E5E0D8] rounded-xl bg-[#FAF8F5] p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs sm:text-sm font-extrabold text-[#385942]">
                          {(item.product.price * item.quantity).toLocaleString('vi-VN')}đ
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          title="Xóa sản phẩm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping form */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECE5DA] shadow-2xs space-y-4">
            <h2 className="font-extrabold text-base text-gray-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#5C7F67]" />
              <span>Thông tin nhận hàng của ba mẹ</span>
            </h2>

            <form id="shipping-form" className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Họ và tên phụ huynh *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vd: Nguyễn Thị Mai"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-[#5C7F67]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Số điện thoại nhận hàng *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Vd: 0912 345 678"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-[#5C7F67]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Tỉnh / Thành phố
                  </label>
                  <select
                    value={form.province}
                    onChange={(e) => setForm({ ...form, province: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-gray-900 focus:outline-hidden focus:border-[#5C7F67]"
                  >
                    <option value="Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Bình Dương">Bình Dương</option>
                    <option value="Đồng Nai">Đồng Nai</option>
                    <option value="Cần Thơ">Cần Thơ</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Quận / Huyện
                  </label>
                  <input
                    type="text"
                    value={form.district}
                    onChange={(e) => setForm({ ...form, district: e.target.value })}
                    placeholder="Vd: Quận 3 / Cầu Giấy"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-[#5C7F67]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Địa chỉ chi tiết (Số nhà, tên đường, phường/xã) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vd: 123/4 Nguyễn Thị Minh Khai, Phường 6"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-[#5C7F67]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Ghi chú cho shipper
                </label>
                <input
                  type="text"
                  placeholder="Vd: Giao sau 5h chiều hoặc gửi bác bảo vệ"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-[#5C7F67]"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Order Summary, Coupon & Payment Choice */}
        <div className="lg:col-span-5 space-y-6">
          {/* Voucher Box */}
          <div className="bg-white p-5 rounded-3xl border border-[#ECE5DA] shadow-2xs space-y-3">
            <label className="block text-xs font-bold text-gray-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E6A23C]" />
              <span>Mã giảm giá / Voucher Mầm Kids</span>
            </label>
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Nhập mã (vd: MAMKIDS10)"
                className="flex-1 px-3.5 py-2 bg-[#FAF8F5] border border-[#E5E0D8] rounded-xl text-xs uppercase font-bold tracking-wider outline-hidden focus:border-[#5C7F67]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#5C7F67] hover:bg-[#4B6954] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shrink-0"
              >
                Áp dụng
              </button>
            </form>
            {couponMessage && (
              <p
                className={`text-[11px] font-semibold ${
                  couponApplied ? 'text-[#3E704C]' : 'text-red-500'
                }`}
              >
                {couponMessage}
              </p>
            )}
          </div>

          {/* Payment Method Selector */}
          <div className="bg-white p-5 rounded-3xl border border-[#ECE5DA] shadow-2xs space-y-3">
            <h3 className="font-extrabold text-sm text-gray-900">
              Phương thức thanh toán
            </h3>

            <div className="space-y-2.5">
              {/* Option 1: COD */}
              <label
                onClick={() => setForm({ ...form, paymentMethod: 'cod' })}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  form.paymentMethod === 'cod'
                    ? 'border-[#5C7F67] bg-[#F2F7F4] ring-1 ring-[#5C7F67]'
                    : 'border-[#EBE4DA] bg-[#FAF8F5]'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={form.paymentMethod === 'cod'}
                  onChange={() => setForm({ ...form, paymentMethod: 'cod' })}
                  className="mt-1 text-[#5C7F67] focus:ring-[#5C7F67]"
                />
                <div className="text-xs">
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <span>Thanh toán khi nhận hàng (COD)</span>
                    <span className="text-[10px] font-bold text-[#5C7F67] bg-white px-2 py-0.5 rounded-md border border-[#C5DDD0]">
                      Đồng kiểm hàng
                    </span>
                  </div>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    Ba mẹ được mở bọc xem chất vải và đường may ưng ý rồi mới trả tiền cho shipper.
                  </p>
                </div>
              </label>

              {/* Option 2: VietQR Bank Transfer */}
              <label
                onClick={() => setForm({ ...form, paymentMethod: 'vietqr' })}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  form.paymentMethod === 'vietqr'
                    ? 'border-[#5C7F67] bg-[#F2F7F4] ring-1 ring-[#5C7F67]'
                    : 'border-[#EBE4DA] bg-[#FAF8F5]'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={form.paymentMethod === 'vietqr'}
                  onChange={() => setForm({ ...form, paymentMethod: 'vietqr' })}
                  className="mt-1 text-[#5C7F67] focus:ring-[#5C7F67]"
                />
                <div className="text-xs w-full">
                  <div className="font-bold text-gray-900 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-[#5C7F67]" />
                      <span>Chuyển khoản VietQR 24/7 (Khuyên dùng)</span>
                    </span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      Xác nhận tức thì
                    </span>
                  </div>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    Quét mã QR bằng ứng dụng ngân hàng bất kỳ, không lo gõ sai số tài khoản.
                  </p>

                  {form.paymentMethod === 'vietqr' && (
                    <div className="mt-3 p-3 bg-white rounded-xl border border-[#D1E5D8] space-y-2 animate-fade-in">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Ngân hàng:</span>
                        <strong className="text-gray-800">MBBank (Quân Đội)</strong>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Số tài khoản:</span>
                        <strong className="text-[#385942] font-mono text-xs">0988 6868 68</strong>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Chủ tài khoản:</span>
                        <strong className="text-gray-800">CTY CP THOI TRANG MAM KIDS</strong>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Nội dung chuyển:</span>
                        <strong className="text-[#E06B6B] font-mono">MAMKIDS {form.phone || 'SODIENTHOAI'}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="bg-white p-5 rounded-3xl border border-[#ECE5DA] shadow-2xs space-y-3 text-xs">
            <h3 className="font-extrabold text-sm text-gray-900 mb-2">Tóm tắt thanh toán</h3>

            <div className="flex items-center justify-between text-gray-600">
              <span>Tạm tính ({cart.reduce((a, b) => a + b.quantity, 0)} món):</span>
              <span className="font-bold text-gray-800">{subtotal.toLocaleString('vi-VN')}đ</span>
            </div>

            {couponApplied && discountAmount > 0 && (
              <div className="flex items-center justify-between text-[#385942]">
                <span>Giảm giá voucher (MAMKIDS10):</span>
                <span className="font-bold">-{discountAmount.toLocaleString('vi-VN')}đ</span>
              </div>
            )}

            <div className="flex items-center justify-between text-gray-600">
              <span>Phí vận chuyển toàn quốc:</span>
              <span className="font-bold">
                {shippingFee === 0 ? (
                  <span className="text-[#385942]">Miễn phí</span>
                ) : (
                  `${shippingFee.toLocaleString('vi-VN')}đ`
                )}
              </span>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-baseline justify-between">
              <div>
                <span className="text-sm font-extrabold text-gray-900">Tổng thanh toán:</span>
                <p className="text-[10px] text-gray-400">Đã bao gồm thuế VAT</p>
              </div>
              <span className="text-xl font-black text-[#385942]">
                {total.toLocaleString('vi-VN')}đ
              </span>
            </div>

            {/* Place Order CTA */}
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handlePlaceOrder}
              className="w-full mt-4 py-4 px-6 bg-[#5C7F67] hover:bg-[#4B6954] text-white font-extrabold text-sm rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Đang xử lý đơn hàng...</span>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  <span>Xác Nhận Đặt Hàng ({total.toLocaleString('vi-VN')}đ)</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5C7F67]" />
              <span>Bảo mật đơn hàng 100% • Hỗ trợ đổi size tận nhà trong 7 ngày</span>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER SUCCESS MODAL */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#E5DFD4] space-y-5 text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-[#EBF3EE] text-[#5C7F67] flex items-center justify-center mx-auto ring-8 ring-[#F3F8F5]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#5C7F67] uppercase tracking-wider">
                Đặt hàng thành công!
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                Cảm ơn ba mẹ đã tin chọn Mầm Kids
              </h2>
              <p className="text-xs text-gray-500">
                Mã đơn hàng: <strong className="text-[#385942] font-mono text-sm">{generatedOrderCode}</strong>
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#ECE5DA] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Người nhận:</span>
                <strong className="text-gray-800">{form.fullName || 'Khách hàng'}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Số điện thoại:</span>
                <strong className="text-gray-800">{form.phone}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Địa chỉ:</span>
                <strong className="text-gray-800 text-right truncate max-w-[200px]">
                  {form.address}, {form.district}, {form.province}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Phương thức:</span>
                <strong className="text-gray-800">
                  {form.paymentMethod === 'cod' ? 'Thanh toán COD khi nhận' : 'Chuyển khoản VietQR'}
                </strong>
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between font-bold">
                <span>Tổng tiền:</span>
                <span className="text-[#385942] font-extrabold text-sm">{total.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 leading-relaxed">
              Nhân viên tư vấn của Mầm Kids sẽ liên hệ xác nhận đơn hàng qua điện thoại trong vòng 15-30 phút. Kiện hàng sẽ được đóng gói cẩn thận kèm quà tặng nơ xinh cho bé yêu.
            </p>

            <button
              onClick={() => {
                onClearCart();
                setOrderSuccess(false);
                onContinueShopping();
              }}
              className="w-full py-3.5 bg-[#5C7F67] hover:bg-[#4B6954] text-white font-bold text-xs rounded-2xl transition-all cursor-pointer shadow-sm"
            >
              Tiếp tục dạo xem cửa hàng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
