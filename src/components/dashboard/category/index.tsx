import type { CategoryType, QueryType } from "../../../@types";
import { loaderApi } from "../../../generic/loader";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";
import { useQueryHandler } from "../../../hooks/useQuery";
import Discount from "./discount";
import Price from "./price";





const Category = () => {
    const { setParam, getParam } = useSearchParamsHandler();
    const category = getParam("category") || "house-plants";
    const range_min = getParam("range_min") || "0";
    const range_max = getParam("range_max") || "1000";
    const type = getParam("type") || "all-plants";
    const sort = getParam("sort") || "default-sorting";

    const { data, isLoading, isError }: QueryType<CategoryType[]> = useQueryHandler(
    {url: "flower/category",
    pathname: "category",}
    );
     const { categoryLoader } = loaderApi();
  return (
    <div className="bg-[#f2f2f2] p-4 h-225 rounded-[5px]">
        <h2 className="text-[#3d3d3d] font-bold">Categories</h2>
        <div className="p-2 flex flex-col gap-2.5">
            {isLoading || isError ? categoryLoader() : data?.map((value) => (
                <div onClick={() => setParam({ category: value.route_path, range_max, range_min, type, sort, })} key={value._id}
                 className={`flex items-center justify-between hover:text-nav cursor-pointer text-[#3d3d3d] text-[15px] font-medium ${category === value.route_path ? "text-nav font-bold" : ""}`}>
                    <h3>{value.title}</h3>
                    <h3>({value.count})</h3>
                </div>
            ))}
        </div>
        <Price />
        <Discount />
    </div>
  )
}

export default Category