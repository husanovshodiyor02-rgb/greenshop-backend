import type { DiscountFlowerType, QueryType } from "../../../../@types";
import { useQueryHandler } from "../../../../hooks/useQuery"


const Discount = () => {
    const { data}:QueryType<DiscountFlowerType[]> = useQueryHandler({
        url:"features/discount",
        pathname:"discount",
    });
    console.log(data);
  return (
    <div className="flex flex-col justify-between items-center gap-2.5 text-center mt-4">
        <h3 className="text-nav text-[20px] font-normal leading-[120%]">{data?.title}</h3>
        <h2 className="text-[20px] font-bold text-[#3D3D3D]">UP TO {data?.discoount_up_to}% OFF</h2>
        <img src={data?.poster_image_url} alt="" />
    </div>
  )
}

export default Discount

