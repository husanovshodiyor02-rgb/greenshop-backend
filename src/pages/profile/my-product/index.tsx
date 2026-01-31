
import { useState, useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useQueryHandler } from "../../../hooks/useQuery";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { getData } from "../../../redux/shop-slice";
import { useNavigate } from "react-router-dom";

interface ProductType {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price: string;
  detailed_images: string[];
  category?: string;
}

const MyProducts = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();

  const icon_style =
    "w-[35px] h-[35px] bg-white rounded-lg flex justify-center items-center text-[#353535] border border-white hover:border-nav hover:text-[#46A358] cursor-pointer shadow-md transition-all duration-300";

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "#46A358" }} spin />
  );

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  const { data: products, isLoading } = useQueryHandler({
    url: "user/products",
    pathname: "products",
    param: { search: debouncedSearch },
  });

  const handleViewDetail = (product: ProductType) => {
    const category = product.category || "house-plants";
    navigate(`/shop/${category}/${product._id}`);
  };

  return (
    <div className="container mx-auto px-5 py-10 max-w-[1260px]">

      {isLoading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Spin indicator={antIcon} />
        </div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item: ProductType) => (
            <div
              key={item._id}
              className="relative transition-all duration-300"
            >
         
              <div className="group hover:border-t-2 border-white hover:border-nav rounded-[9px] h-[260px] bg-[#f2f2f2] flex justify-center items-center relative overflow-hidden transition-all duration-300">
                {item.detailed_images?.length > 0 ? (
                  <img
                    src={item.detailed_images[0]}
                    alt={item.title}
                    className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No Image</span>
                )}

               
                <div className="absolute -bottom-10 group-hover:bottom-6 flex gap-3 justify-center items-center transition-all duration-300 w-full px-2">
                  <div
                    onClick={() => dispatch(getData(item))}
                    className={icon_style}
                  >
                    <i className="ri-shopping-cart-2-line text-xl"></i>
                  </div>

                  <div className={icon_style}>
                    <i className="ri-heart-line text-xl"></i>
                  </div>

                  <div
                    onClick={() => handleViewDetail(item)}
                    className={icon_style}
                  >
                    <i className="ri-search-line text-xl"></i>
                  </div>
                </div>
              </div>

             
              <div className="mt-3">
                <h3 className="text-[#3D3D3D] text-[16px] font-normal pt-2.5 pb-1 line-clamp-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3">
                  {item.discount ? (
                    <>
                      <h1 className="text-nav text-[18px] font-bold">
                        ${item.discount_price}
                      </h1>
                      <h1 className="font-light text-[#A5A5A5] text-[16px] line-through">
                        ${item.price}
                      </h1>
                    </>
                  ) : (
                    <h1 className="text-nav text-[18px] font-bold">
                      ${item.price}
                    </h1>
                  )}
                </div>
              </div>

              
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            alt="empty"
            className="mx-auto h-24 mb-4 opacity-50"
          />
          <p className="text-gray-500">
            No products found{search && ` for "${search}"`}
          </p>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
