import React, { useEffect, useState } from "react";
import Sale from "../../assets/img/sale.png"; // Rasm manzili to'g'ri ekanligiga ishonch hosil qiling

// --- Types (Tiplar) ---
interface Product {
  id: string;
  title: string;
  price: string;
  img: string;
}

// Sidebar ma'lumotlari (Kodni qisqartirish uchun massivga olindi)
const categories = [
  { name: "House Plants", count: 33, active: true },
  { name: "Potter Plants", count: 12 },
  { name: "Seeds", count: 65 },
  { name: "Small Plants", count: 39 },
  { name: "Big Plants", count: 23 },
  { name: "Succulents", count: 17 },
  { name: "Terrariums", count: 19 },
  { name: "Gardening", count: 13 },
  { name: "Accessories", count: 18 },
];

const sizes = [
  { name: "Small", count: 119 },
  { name: "Medium", count: 86 },
  { name: "Large", count: 78 },
];

const Category: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  // API dan ma'lumot olish
  useEffect(() => {
    fetch("https://69369720f8dc350aff316930.mockapi.io/green")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Xatolik yuz berdi:", err));
  }, []);

  // Context yo'q qilingani uchun vaqtincha funksiyalar
  const handleAddToCart = (item: Product) => {
    console.log("Savatga qo'shildi (Contextsiz):", item);
  };

  const handleAddToWishlist = (item: Product) => {
    console.log("Sevimlilarga qo'shildi (Contextsiz):", item);
  };

  return (
    <section className="container1 flex flex-col sm:flex-row gap-10">
      {/* --- Sidebar --- */}
      <div className="w-full sm:w-[260px] flex-shrink-0">
        <h2 className="text-lg font-bold text-[#3d3d3d] mb-4">Categories</h2>

        <ul className="space-y-3 text-[#3d3d3d]">
          {categories.map((cat, index) => (
            <li
              key={index}
              className={`flex justify-between cursor-pointer hover:text-[#46a358] transition ${
                cat.active ? "text-[#46a358] font-semibold" : ""
              }`}
            >
              <span>{cat.name}</span>
              <span>({cat.count})</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="font-bold text-[#3d3d3d] mb-2">Price Range</h3>
          <input
            type="range"
            min="39"
            max="1230"
            className="w-full accent-[#46a358]"
          />
          <p className="mt-1 text-sm font-medium">
            Price: <span className="text-[#46a358]">$39 – $1230</span>
          </p>
          <button className="mt-3 bg-[#46a358] text-white w-full py-2 rounded-md hover:bg-[#3d914d] transition">
            Filter
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-[#3d3d3d] mb-2">Size</h3>
          <ul className="space-y-2 text-[#3d3d3d]">
            {sizes.map((size, index) => (
              <li
                key={index}
                className="flex justify-between cursor-pointer hover:text-[#46a358]"
              >
                <span>{size.name}</span>
                <span>({size.count})</span>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={Sale}
          alt="sale banner"
          className="mt-8 w-full rounded-md object-cover"
        />
      </div>

      {/* --- Main Content --- */}
      <div className="flex-1">
        {/* Header: Tabs & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-2">
          <div className="flex gap-8 text-[#3d3d3d] font-medium mb-4 md:mb-0">
            <h3 className="border-b-2 border-[#46a358] pb-4 -mb-2.5 text-[#46a358] cursor-pointer">
              All Plants
            </h3>
            <h3 className="hover:text-[#46a358] cursor-pointer pb-4">
              New Arrivals
            </h3>
            <h3 className="hover:text-[#46a358] cursor-pointer pb-4">Sale</h3>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[#3d3d3d] text-sm">Sort by:</p>
            <select className="outline-none text-[#3d3d3d] font-medium bg-transparent cursor-pointer">
              <option>Default sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item.id} className="cursor-pointer group relative">
              {/* Image Container */}
              <div className="w-full h-[300px] bg-[#fbfbfb] flex items-center justify-center rounded-sm relative overflow-hidden transition-all group-hover:border-t-2 group-hover:border-[#46a358]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-contain h-[250px] transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Action Buttons */}
                <div className="absolute bottom-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-9 h-9 rounded-md bg-white text-[#3d3d3d] hover:text-[#46a358] shadow-md flex items-center justify-center transition"
                  >
                    <i className="ri-shopping-cart-2-line text-lg"></i>
                  </button>

                  <button
                    onClick={() => handleAddToWishlist(item)}
                    className="w-9 h-9 rounded-md bg-white text-[#3d3d3d] hover:text-[#46a358] shadow-md flex items-center justify-center transition"
                  >
                    <i className="ri-heart-line text-lg"></i>
                  </button>

                  <button className="w-9 h-9 rounded-md bg-white text-[#3d3d3d] hover:text-[#46a358] shadow-md flex items-center justify-center transition">
                    <i className="ri-search-line text-lg"></i>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-3">
                <h3 className="text-[#3d3d3d] font-normal text-base">
                  {item.title}
                </h3>
                <p className="text-[#46a358] font-bold mt-1 text-lg">
                  ${Number(item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
