
import { Empty } from "antd"; 

const MyProducts = () => {
  return (
    <div className="w-full">
      
      <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-6 border-b border-[#46A358]/20 pb-3">
        My Products
      </h2>


      <div className="flex justify-center items-center h-[300px]">
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span className="text-[#3D3D3D] font-medium">
              Hozircha mahsulotlar yo'q
            </span>
          }
        />
      </div>
    </div>
  );
};

export default MyProducts;
