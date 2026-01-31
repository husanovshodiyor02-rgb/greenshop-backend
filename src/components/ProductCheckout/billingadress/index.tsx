
import { useState, useEffect } from "react"; 
import type { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Modal, Radio, message } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../header/Header";
import Garden from "../../../pages/home/Garden";
import Footer1 from "../../footer/Footer1";
import Pay from "../../../assets/img/pay.png";
import type { ShopCartType } from "../../../@types";

const InputField = ({
  label,
  name, 
  value, 
  onChange,
  required = false,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label className="text-[15px] text-[#3D3D3D] font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      name={name}
      value={value} 
      onChange={onChange} 
      required={required}
      type={type}
      placeholder={placeholder}
      className="border border-[#EAEAEA] rounded-md p-3 text-[14px] focus:outline-none focus:border-nav focus:ring-1 focus:ring-nav placeholder:text-gray-400 transition-all"
    />
  </div>
);

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { data } = useSelector((state: any) => state.shopSlice);

  const { user } = useSelector(
    (state: any) => state.auth || state.authSlice || state.user || {}
  );

 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    comment: "",
  });

  
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.name || user.firstName || "",
        lastName: user.surname || user.lastName || "",
        email: user.email || "",
        phone: user.phone_number || user.phone || "",

      }));
    }
  }, [user]);

 
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subtotal =
    data?.reduce(
      (acc: number, item: ShopCartType) => acc + (item.userPrice || 0),
      0
    ) || 0;
  const shipping = 16.0;
  const total = subtotal + shipping;

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data || data.length === 0) {
      message.error("Your cart is empty!");
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="w-[90%] max-w-350 mx-auto mt-10 mb-20">
      
        <form
          onSubmit={handlePlaceOrder}
          className="flex flex-col lg:flex-row gap-10 xl:gap-20"
        >
         
          <div className="w-full lg:w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InputField
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                label="First Name"
                required
                placeholder="Enter your first name..."
              />
              <InputField
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                label="Last Name"
                required
                placeholder="Enter your last name..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InputField
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                label="Country / Region"
                required
                placeholder="Enter your country..."
              />
              <InputField
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                label="Town / City"
                required
                placeholder="Enter your town..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InputField
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                label="Street Address"
                required
                placeholder="Enter your street..."
              />
              <InputField
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                label="Apartment"
                placeholder="Enter your apartment..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InputField
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                label="State"
                required
                placeholder="Enter your state"
              />
              <InputField
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                label="Zip Code"
                required
                type="number"
                placeholder="Enter your zip code..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <InputField
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                label="Email address"
                required
                type="email"
                placeholder="Enter your email..."
              />

              <div className="flex flex-col gap-2">
                <label className="text-[15px] text-[#3D3D3D] font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex border border-[#EAEAEA] rounded-md overflow-hidden focus-within:border-nav focus-within:ring-1 focus-within:ring-nav transition-all">
                  <span className="p-3 border-r border-[#EAEAEA]">+998</span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    type="number"
                    placeholder="Enter your phone number..."
                    className="p-3 w-full focus:outline-none text-[14px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-[15px] text-[#3D3D3D] font-medium">
                Comment
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Enter your comment..."
                className="border border-[#EAEAEA] rounded-md p-3 h-30 text-[14px] focus:outline-none focus:border-nav focus:ring-1 focus:ring-nav resize-none transition-all"
              />
            </div>
          </div>

         
          <div className="w-full lg:w-[35%]">
            <div className="bg-[#FBFBFB] p-6 rounded-lg border border-[#EAEAEA] sticky top-5">
            
              <div className="flex flex-col gap-4 max-h-75 overflow-y-auto pr-2 custom-scrollbar mb-6">
                {data?.length > 0 ? (
                  data.map((item: ShopCartType) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center border-b border-[#EAEAEA] pb-3 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12.5 h-12.5 bg-white rounded-full border p-1 shrink-0">
                          <img
                            src={item.main_image}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-semibold text-[#3D3D3D] line-clamp-1 max-w-30">
                            {item.title}
                          </h4>
                          <p className="text-[12px] text-[#727272]">
                            SKU:{" "}
                            <span className="text-[#3D3D3D]">
                              {item._id.slice(0, 6)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#727272] text-[12px] font-medium">
                          x{item.counter}
                        </p>
                        <p className="text-nav font-bold text-[14px]">
                          ${(item.price * item.counter).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-4">
                    Cart is empty
                  </p>
                )}
              </div>

              
              <div className="flex flex-col gap-3 py-4 border-t border-[#EAEAEA]">
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-[#3D3D3D]">Subtotal</span>
                  <span className="font-medium text-[#3D3D3D]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-[#3D3D3D]">Shipping</span>
                  <span className="font-medium text-[#3D3D3D]">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#EAEAEA] mt-2">
                  <span className="text-[#3D3D3D] font-bold text-[16px]">
                    Total
                  </span>
                  <span className="font-bold text-nav text-[20px]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

             
              <div className="mt-6">
                <h3 className="font-bold text-[#3D3D3D] mb-3 text-[15px]">
                  Payment Method
                </h3>
                <Radio.Group
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  value={paymentMethod}
                  className="flex flex-col gap-3 w-full"
                >
                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      paymentMethod === "paypal"
                        ? "border-nav bg-nav/5"
                        : "border-[#EAEAEA]"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <Radio value="paypal" className="w-full">
                      <div className="flex items-center justify-between w-full pl-2">
                        <img src={Pay} alt="PayPal" className="h-4" />
                      </div>
                    </Radio>
                  </div>

                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      paymentMethod === "bank"
                        ? "border-nav bg-nav/5"
                        : "border-[#EAEAEA]"
                    }`}
                    onClick={() => setPaymentMethod("bank")}
                  >
                    <Radio value="bank" className="w-full">
                      <span className="text-[14px] font-medium pl-2">
                        Direct bank transfer
                      </span>
                    </Radio>
                  </div>

                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      paymentMethod === "cash"
                        ? "border-nav bg-nav/5"
                        : "border-[#EAEAEA]"
                    }`}
                    onClick={() => setPaymentMethod("cash")}
                  >
                    <Radio value="cash" className="w-full">
                      <span className="text-[14px] font-medium pl-2">
                        Cash on delivery
                      </span>
                    </Radio>
                  </div>
                </Radio.Group>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-nav text-white py-3 rounded-md text-[16px] font-bold hover:bg-[#357c44] transition-all shadow-md active:scale-95"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>

        
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          width={500}
          centered
          className="checkout-modal"
        >
          <div className="flex flex-col items-center pt-4 pb-2 text-center">
            <div className="w-20 h-20 bg-nav/10 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="success"
                className="w-10 opacity-80"
              />
            </div>
            <h2 className="text-[#3D3D3D] text-[18px] font-bold mb-1">
              Thank you!
            </h2>
            <p className="text-[#727272] text-[14px]">
              Your order has been received.
            </p>
          </div>

          <div className="bg-[#FBFBFB] rounded-lg p-4 mt-4 border border-[#EAEAEA]">
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
              <div>
                <p className="text-[#727272] text-[12px]">Order Number</p>
                <p className="font-semibold text-[#3D3D3D]">#19586687</p>
              </div>
              <div>
                <p className="text-[#727272] text-[12px]">Date</p>
                <p className="font-semibold text-[#3D3D3D]">{formattedDate}</p>
              </div>
              <div>
                <p className="text-[#727272] text-[12px]">Total</p>
                <p className="font-semibold text-[#3D3D3D]">
                  ${total.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-[#727272] text-[12px]">Payment Method</p>
                <p className="font-semibold text-[#3D3D3D] capitalize">
                  {paymentMethod === "cash"
                    ? "Cash on delivery"
                    : paymentMethod}
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-[16px] text-[#3D3D3D] mt-6 mb-3">
            Order Details
          </h3>

          <div className="flex flex-col gap-3 mb-6 max-h-50 overflow-y-auto pr-1 custom-scrollbar">
            {data?.map((item: ShopCartType) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b border-dashed pb-2 last:border-0"
              >
                <span className="text-sm text-[#3D3D3D]">
                  {item.title}{" "}
                  <span className="text-[#727272] text-xs">
                    x{item.counter}
                  </span>
                </span>
                <span className="font-bold text-nav text-sm">
                  ${(item.price * item.counter).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 mt-1 border-t">
              <span className="font-bold text-[#3D3D3D]">Total</span>
              <span className="font-bold text-nav text-[16px]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-nav text-white font-bold py-3 rounded-full hover:bg-[#357c44] transition-all"
          >
            Track your order
          </button>
        </Modal>
      </div>
      <Garden />
      <Footer1 />
    </div>
  );
};

export default CheckoutPage;