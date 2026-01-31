import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image, Rate, message } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useQueryHandler } from "../../hooks/useQuery";
import { useReduxDispatch } from "../../hooks/useRedux"; 
import { getData } from "../../redux/shop-slice"; 
import { loaderApi } from "../../generic/loader";
import type { ProductType, QueryType } from "../../@types";
import Header from "../../components/header/Header";
import Footer1 from "../../components/footer/Footer1";
import Garden from "../home/Garden";
import { CiCircleChevLeft } from "react-icons/ci";

const DetailPage = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { categoryLoader } = loaderApi();


  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize] = useState<string>("S");
  const [quantity] = useState<number>(1); 


  const {
    data: product,
    isLoading,
    isError,
  }: QueryType<ProductType> = useQueryHandler({
 
    url: `flower/category/${category}/${id}`,
    pathname: `product-details-${id}`,
  });


  if (isLoading)
    return <div className="flex justify-center mt-20">{categoryLoader()}</div>;

 
  if (isError || !product)
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-4">
        <h2 className="text-red-500 font-bold text-xl">Product not found!</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-[#46A358] text-white px-6 py-2 rounded-md hover:bg-[#357a40] transition-all"
        >
           Back to Home
        </button>
      </div>
    );


  const images = product.detailed_images?.length
    ? product.detailed_images
    : [product.main_image];

  const currentImage = selectedImage || product.main_image;


  const handleAddToCart = () => {
    dispatch(getData({ ...product, counter: quantity, size: selectedSize }));
    message.success("Added to cart!");
  };

 
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/shop"); 
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-10 mt-6 mb-20 max-w-[1440px]">
   
        <div className="mb-8 text-sm text-[#3D3D3D] flex items-center">
          <span
            onClick={() => navigate("/")}
            className="font-bold cursor-pointer text-[#46A358] transition-colors flex items-center gap-0.5"
          >
            <CiCircleChevLeft className="text-nav text-lg" /> back to products
          </span>
         
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
       
          <div className="flex flex-col-reverse md:flex-row gap-4 h-fit">
     
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:h-[450px] scrollbar-hide py-2 md:py-0">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`
                  w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-[#fbfbfb] cursor-pointer 
                  border transition-all duration-300 flex justify-center items-center rounded-lg
                  ${
                    currentImage === img
                      ? "border-[#46A358] shadow-md scale-95"
                      : "border-transparent hover:border-[#46A358]"
                  }
                `}
                >
                  <img
                    src={img}
                    alt={`thumb-${idx}`}
                    className="w-full h-full object-contain p-1 mix-blend-multiply"
                  />
                </div>
              ))}
            </div>

      
            <div className="flex-1 bg-[#FBFBFB] border border-[#EAEAEA] rounded-lg relative overflow-hidden h-[350px] md:h-[450px] flex items-center justify-center group">
              <div className="w-full h-full flex items-center justify-center p-6 transition-transform duration-500 hover:scale-105">
                <Image
                  src={currentImage}
                  alt={product.title}
                  className="object-contain !h-full !w-full mix-blend-multiply"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gray-500 text-xs">Zoom</span>
              </div>
            </div>
          </div>

         
          <div className="flex flex-col">
            <h1 className="text-[20px] md:text-[24px] font-bold text-[#3D3D3D] leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4 mt-3">
              <span className="text-[#46A358] text-[20px] font-bold">
                ${product.price}
              </span>
              <div className="flex items-center gap-2">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={product.rate}
                  className="text-[#FFAC0C] text-[14px]"
                />
                <span className="text-[13px] text-[#3D3D3D]">
                  ({product.views} Reviews)
                </span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-semibold text-[#3D3D3D] text-[15px] mb-2">
                Short Description:
              </h3>
              <p className="text-[#727272] text-[14px] leading-6 line-clamp-3">
                {product.short_description ||
                  "No description available for this product."}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[#3D3D3D] text-[15px] mb-2">
                Size:
              </h3>
              
              <div className="flex gap-3">
                <p className="hover:text-nav border border-[#EAEAEA] text-[#727272] rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-semibold hover:border-nav">S</p>
                <p className="hover:text-nav border border-[#EAEAEA] text-[#727272] rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-semibold hover:border-nav">M</p>
                <p className="hover:text-nav border border-[#EAEAEA] text-[#727272] rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-semibold hover:border-nav">L</p>
                <p className="hover:text-nav border border-[#EAEAEA] text-[#727272] rounded-full w-9 h-9 flex items-center justify-center text-[14px] font-semibold hover:border-nav">XL</p>
              </div>
            </div>

      
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
         

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 sm:w-[130px] bg-[#46A358] text-white py-3 rounded-[6px] font-bold transition-all uppercase text-sm shadow-lg shadow-green-100"
                >
                  Buy Now
                </button>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 sm:w-[130px] border border-[#46A358] text-[#46A358] py-3 rounded-[6px] font-bold transition-all uppercase text-sm"
                >
                  Add to Cart
                </button>

                <button className="w-11 h-11 border rounded-[9px] flex items-center justify-center text-nav border-nav transition-all">
                  <HeartOutlined style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>

        
            <div className="mt-8 text-[14px] text-[#727272] flex flex-col gap-2">
              <p>
                <span className="text-[#A5A5A5] w-24 inline-block">SKU:</span>{" "}
                {product._id}
              </p>
              <p>
                <span className="text-[#A5A5A5] w-24 inline-block">
                  Category:
                </span>{" "}
                <span className="capitalize text-[#3D3D3D] font-medium">
                  {product.category}
                </span>
              </p>
              <p>
                <span className="text-[#A5A5A5] w-24 inline-block">Tags:</span>{" "}
                {product.tags.length > 0
                  ? product.tags.join(", ")
                  : "Home, Garden, Plants"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex gap-8 border-b border-[#EAEAEA] mb-6">
            <h3 className="font-bold text-[17px] border-b-2 text-[#605f5f] border-[#46A358] pb-4 cursor-pointer">
              Product Description
            </h3>
          </div>

          <div
            className="text-[#727272] leading-7 text-sm md:text-base max-w-4xl"
            dangerouslySetInnerHTML={{
              __html:
                product.description ||
                "<p>No detailed description available.</p>",
            }}
          />
        </div>
      </div>
      <Garden />
      <Footer1 />
    </div>
  );
};

export default DetailPage;
