import { useState } from "react";
import Bn1 from "../../assets/img/bn1.png";
import Bn2 from "../../assets/img/bn2.png";
const banners = [
  {
    id: 1,
    title: "SUMMER CACTUS & SUCCULENTS",
    text: "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: Bn1,
  },
  {
    id: 2,
    title: "STYLING TRENDS & MUCH MORE",
    text: "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: Bn2,
  },
  {
    id: 3,
    title: "BIG PLANTS & NEW ARRIVALS",
    text: "We are an online plant shop offering a wide range of cheap and trending plants",
    img: "https://github.com/husanovshodiyor02-rgb/imgs/blob/main/img/gul7.png?raw=true",
  },
  {
    id: 4,
    title: "HOUSE PLANTS & MORE",
    text: "We are an online plant shop offering a wide range of cheap and trending plants",
    img: "https://github.com/husanovshodiyor02-rgb/imgs/blob/main/img/gul8.png?raw=true",
  },
];

const Summer = () => {
  const [page, setPage] = useState(1);

  const perPage = 2;
  const totalPages = Math.ceil(banners.length / perPage);

  const pageData = banners.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="container1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
        {pageData.map((item) => (
          <div
            key={item.id}
            className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col sm:flex-row items-center gap-6"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[200px] h-[200px] object-contain"
            />

            <div>
              <h2 className="font-bold text-xl text-[#3d3d3d]">{item.title}</h2>
              <p className="text-[#727272] mt-2 w-[260px] leading-5">
                {item.text}
              </p>

              <button className="mt-5 bg-[#46a358] text-white px-6 py-2 rounded-md flex items-center gap-2">
                Find More <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 border rounded-md ${
              page === i + 1
                ? "bg-[#46a358] text-white border-[#46a358]"
                : "text-[#3d3d3d]"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => page < totalPages && setPage(page + 1)}
          className="w-10 h-10 border rounded-md"
        >
          <i className="ri-arrow-right-s-line text-xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Summer;
