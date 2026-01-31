
import { DeleteFilled } from "@ant-design/icons";
import type { ShopCartType } from "../../../../@types";
import type { FC } from "react";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { decrement, deleteData, increment } from "../../../../redux/shop-slice";

const Card: FC<ShopCartType> = (props) => {
  const { main_image, title, _id, price, counter, userPrice } = props;
  const dispatch = useReduxDispatch();

  return (
    <div className="my-5 bg-[#eee] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg gap-4 sm:gap-0">
 
      <div className="flex items-center gap-4 w-full sm:w-[40%]">
        <img
          className="w-20 h-20 object-contain rounded"
          src={main_image}
          alt={title}
        />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] text-[#3d3d3db5] font-normal pt-1 sm:pt-2 max-sm:text-[12px]">
            <span className="text-[#A5A5A5]">SKU: </span> {_id}
          </p>
        </div>
      </div>

    
      <div className="text-[#727272] text-[16px] font-medium w-full sm:w-[20%] text-left sm:text-center">
        ${price}
      </div>

      <div className="flex items-center gap-3 w-full sm:w-[20%] justify-start sm:justify-center">
        <button
          onClick={() => dispatch(decrement(_id))}
          className="w-6 h-6 sm:w-7 sm:h-7 bg-nav rounded-full text-white"
        >
          -
        </button>
        <span className="text-[17px]">{counter}</span>
        <button
          onClick={() => dispatch(increment(_id))}
          className="w-6 h-6 sm:w-7 sm:h-7 bg-nav rounded-full text-white"
        >
          +
        </button>
      </div>

    
      <div className="text-[#727272] text-[16px] font-medium w-full sm:w-[20%] text-left sm:text-center">
        {userPrice?.toFixed(2)}$
      </div>

      <div className="flex justify-start sm:justify-center w-full sm:w-auto">
        <DeleteFilled
          onClick={() => dispatch(deleteData(_id))}
          className="text-[#727272] hover:text-nav text-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Card;
