import type { FC } from "react";
import type { ProductType } from "../../../../@types";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { getData } from "../../../../redux/shop-slice";
 
const Card: FC<ProductType> = (props) => {

    const icon_style =
      "w-[35px] h-[35px] bg-white rounded-lg flex justify-center items-center text-[#353535] border border-white hover:border-nav hover:text-[#46A358] hover:cursor-pointer shadow-md transition-all duration-300";
    const { } = useReduxSelector((state) => state.shopSlice);
    const dispatch = useReduxDispatch();
    return (
      <>
       
        <div className="relative transition-all duration-300">
        
          <div className="group hover:border-t-2 border-white hover:border-nav rounded-[9px] h-75 bg-[#f2f2f2] flex justify-center items-center relative overflow-hidden transition-all duration-300">
            <img
              src={props.main_image}
              alt={props.title}
              className="w-4/5 h-4/5 object-contain"
            />

          
            <div className="absolute -bottom-10 group-hover:bottom-6 flex gap-3 justify-center items-center transition-all duration-300 w-full px-2">
              <div onClick={() => dispatch(getData(props))} className={`${icon_style}`}>
                <i className="ri-shopping-cart-2-line text-xl"></i>
              </div>
              <div className={`${icon_style}`}>
                <i className="ri-heart-line text-xl"></i>
              </div>
              <div className={`${icon_style}`}>
                <i className="ri-search-line text-xl"></i>
              </div>
            </div>
          </div>

       
          <div className="mt-3">
            <h3 className="text-[#3D3D3D] text-[16px] font-normal pt-2.5 pb-1">
              {props.title}
            </h3>
            <div className="flex items-center gap-3">
              <h1 className="text-[#46A358] text-[18px] font-bold">
                ${props.price}
              </h1>
              {props.discount ? (
                <h1 className="font-light text-[#A5A5A5] text-[16px] line-through">
                  ${props.discount_price}
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>

   
          {props.discount && (
            <div className="absolute top-4 left-0 bg-nav text-white px-1.5 py-1 text-[13px] font-medium rounded-[0_5px_5px_0]">
              13 % OFF
            </div>
          )}
        </div>
      </>
    );
}

export default Card;