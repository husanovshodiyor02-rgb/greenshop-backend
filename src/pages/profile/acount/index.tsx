import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import axios from "axios";
import { UploadOutlined } from "@ant-design/icons"; 


interface UserDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  photoUrl: string | null;
}

const AccountDetails = () => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);


  const [formData, setFormData] = useState<UserDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    photoUrl: null,
  });


  useEffect(() => {

    const storedUser = localStorage.getItem("user_profile");
    if (storedUser) {
      setFormData(JSON.parse(storedUser));
    }


    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("access_token"); 
        const response = await axios.get("user/account-details", {
          headers: { Authorization: `Bearer ${token}` },
        });

 
        setFormData(response.data);
        localStorage.setItem("user_profile", JSON.stringify(response.data));
      } catch (error) {
        console.error("Ma'lumot yuklashda xatolik:", error);
      }
    };

    fetchUserData();
  }, []);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

   
      setFormData((prev) => ({
        ...prev,
        photoUrl: URL.createObjectURL(file),
      }));
    }
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");


      const dataToSend = new FormData();
      dataToSend.append("firstName", formData.firstName);
      dataToSend.append("lastName", formData.lastName);
      dataToSend.append("email", formData.email);
      dataToSend.append("phone", formData.phone);
      dataToSend.append("username", formData.username);
      if (imageFile) {
        dataToSend.append("photo", imageFile);
      }

  
      const response = await axios.put("user/account-details", dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", 
        },
      });

 
      alert("Changes saved successfully!");

  
      localStorage.setItem("user_profile", JSON.stringify(response.data));
      setFormData(response.data);
    } catch (error) {
      console.error("Saqlashda xatolik:", error);
      alert("Xatolik yuz berdi! Qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-5 text-[#3D3D3D]">
        Personal Information
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >

        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>


        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>


        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>


        <div className="flex flex-col gap-2">
          <label className="text-[15px] text-[#3D3D3D]">
            Phone number <span className="text-red-500">*</span>
          </label>
          <div className="flex border border-[#EAEAEA] rounded-[3px] overflow-hidden focus-within:border-[#46A358]">
            <span className="bg-gray-50 px-3 py-2 text-[#3D3D3D] border-r border-[#EAEAEA]">
              +998
            </span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number..."
              className="w-full px-3 py-2 outline-none"
            />
          </div>
        </div>

   
        <div className="flex flex-col gap-2 md:col-span-1">
          <label className="text-[15px] text-[#3D3D3D]">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username..."
            className="border border-[#EAEAEA] rounded-[3px] px-3 py-2 outline-none focus:border-[#46A358]"
          />
        </div>


        <div className="flex flex-col gap-2 md:col-span-1">
          <label className="text-[15px] text-[#3D3D3D]">
            Image <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">

            <div className="w-[50px] h-[50px] rounded-full bg-gray-100 border flex justify-center items-center overflow-hidden">
              {formData.photoUrl ? (
                <img
                  src={formData.photoUrl}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <i className="ri-image-line text-gray-400 text-xl"></i>
              )}
            </div>

     
            <label className="px-4 py-2 border border-[#46A358] text-[#46A358] rounded-[3px] hover:bg-[#46A358] hover:text-white transition-all text-sm font-medium cursor-pointer flex items-center gap-2">
              <UploadOutlined /> Upload
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

   
            {formData.photoUrl && (
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, photoUrl: null }))
                }
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            )}
          </div>
        </div>

    
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#46A358] sm:w-110 w-auto text-white px-6 py-2.5 rounded-[3px] font-medium transition-all ${
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

export default AccountDetails;
