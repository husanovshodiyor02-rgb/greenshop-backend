import { Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";

const Shopping = () => {
  const navigate = useNavigate();
  const { data } = useReduxSelector((state) => state.shopSlice);
  return (
    <div>
      <div className="flex items-center justify-between text-start border-b border-[#46A358] pb-3">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[40%]">
          Products
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Price
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Total
        </h2>
        <h3>Delete</h3>
      </div>

     
      {data.length ? (
        data.map((value) => <Card key={value._id} {...value} />)
      ) : (
        <div className="flex justify-center flex-col items-center">
          <Empty />
          <button
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[10px]"
            onClick={() => navigate("/")}
          >
            Go shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;
