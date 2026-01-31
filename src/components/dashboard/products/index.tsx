import type { ProductType, QueryType } from "../../../@types";
import { useQueryHandler } from "../../../hooks/useQuery"
import Card from "./card";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";
import { loaderApi } from "../../../generic/loader";
import ProductsTitle from "./products_title";


const Products = () => {
    const { getParam } = useSearchParamsHandler();
    const category = getParam("category") || "house-plants";
    const range_min = getParam("range_min") || "0";
    const range_max = getParam("range_max") || "1000";
    const type = getParam("type") || "all-plants";
    const sort = getParam("sort") || "default-sorting";

    const { data, isLoading, isError }: QueryType<ProductType[]> =
      useQueryHandler({
        url: `flower/category/${category}`,
        pathname: `products-${category}-${range_min}-${range_max}-${type}-${sort}`,
        param: { range_min, range_max, type, sort, },
      });

      const { productLoader } = loaderApi();
 return (
   <div>
    <ProductsTitle />
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
       {isLoading || isError
         ? productLoader()
         : data?.map((value) => (
            <Card key={value._id} {...value} />
       ))}
     </div>
   </div>
 );
}

export default Products