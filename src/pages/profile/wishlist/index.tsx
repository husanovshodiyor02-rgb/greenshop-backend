
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { useReduxSelector, useReduxDispatch } from "../../../hooks/useRedux";
import { getData, removeFromWishlist } from "../../../redux/shop-slice";
import { notificationApi } from "../../../generic/notificationApi"; 
import { Empty } from "antd";

const Wishlist = () => {
  const dispatch = useReduxDispatch();
  const wishlist = useReduxSelector((state) => state.shopSlice.wishlist || []);
  const notify = notificationApi(); 
  const icon_style =
    "w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center text-[#353535] border border-white shadow-md transition-all duration-300";

  const handleCart = (item: any) => {
    dispatch(getData(item));
    notify("cart_add"); 
  };

  const handleRemove = (item: any) => {
    dispatch(removeFromWishlist(item._id));
    notify("wishlist_remove"); 
  };

  const handleView = (item: any) => {
    window.location.href = `/shop/${item.category || "house-plants"}/${item._id}`;
  };

  if (wishlist.length === 0) {
    return (
      <div className="w-full">
        <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-6 border-b border-nav/20 pb-3">
          Wishlist
        </h2>
        <div className="flex justify-center items-center h-75">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={<span className="text-[#3D3D3D] font-medium">Hozircha mahsulotlar yo'q</span>}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-6 border-b border-nav/20 pb-3">
        Wishlist
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((item: any) => (
          <div
            key={item._id}
            className="relative transition-all duration-300 bg-[#FBFBFB] rounded-[10px] p-4 hover:shadow-lg hover:-translate-y-1 flex flex-col"
          >
           
            <div className="relative h-52 flex justify-center items-center bg-[#f2f2f2] rounded-md overflow-hidden mb-3 group">
              <img
                src={item.main_image || item.detailed_images?.[0]}
                alt={item.title}
                className="object-contain w-4/5 h-4/5"
              />

              <div
                className={`absolute bottom-3 flex gap-3 justify-center w-full transition-all duration-300
                  md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0
                  opacity-100
                `}
              >
                <div onClick={() => handleCart(item)} className={icon_style}>
                  <FiShoppingCart size={18} />
                </div>

                <div onClick={() => handleRemove(item)} className={icon_style}>
                  <FiHeart size={18} className="text-red-500" />
                </div>

                <div onClick={() => handleView(item)} className={icon_style}>
                  <FiSearch size={18} />
                </div>
              </div>
            </div>

            
            <h3 className="text-[#3D3D3D] text-[16px] font-normal pt-2.5 pb-1 line-clamp-2">
              {item.title}
            </h3>

        
            <div className="flex items-center gap-3">
              <h1 className="text-nav text-[18px] font-bold">${item.price}</h1>
              {item.discount && (
                <h1 className="font-light text-[#A5A5A5] text-[16px] line-through">
                  ${item.discount_price}
                </h1>
              )}
            </div>

            {item.discount && (
              <div className="absolute top-4 left-0 bg-nav text-white px-1.5 py-1 text-[13px] font-medium rounded-[0_5px_5px_0]">
                13% OFF
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
