import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface AddressType {
  country: string;
  city: string;
  street: string;
  extra_address: string;
  state: string;
  zip: string;
}

const Address = () => {
  const [loading, setLoading] = useState(false);

  const [addressData, setAddressData] = useState<AddressType>({
    country: "",
    city: "",
    street: "",
    extra_address: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://your-api-url.com/api/user/address",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data) {
          setAddressData(response.data);
        }
      } catch (error) {
        console.log("Adres ma'lumotlari yo'q yoki xatolik:", error);
      }
    };

    fetchAddress();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");

      await axios.post("user/address", addressData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Address saved successfully!");
    } catch (error) {
      console.error("Saqlashda xatolik:", error);
      alert("Xatolik yuz berdi. Qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-[18px] font-bold text-[#3D3D3D] mb-5">
        Billing Address
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={addressData.country}
            onChange={handleInputChange}
            placeholder="Select your country / region..."
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Town city <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={addressData.city}
            onChange={handleInputChange}
            placeholder="Type your town city..."
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            State address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="street"
            value={addressData.street}
            onChange={handleInputChange}
            placeholder="Type your Street address..."
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Extra address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="extra_address"
            value={addressData.extra_address}
            onChange={handleInputChange}
            placeholder="Type your Extra address..."
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={addressData.state}
            onChange={handleInputChange}
            placeholder="Type your state..."
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Zip <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="zip"
            value={addressData.zip}
            onChange={handleInputChange}
            placeholder="Type your Extra zip..."
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>

        <div className="md:col-span-1 mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#46A358] sm:w-110 w-auto text-white px-10 py-2.5 rounded-[3px] font-medium transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#3d914d]"
            }`}
          >
            {loading ? "Saving..." : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
