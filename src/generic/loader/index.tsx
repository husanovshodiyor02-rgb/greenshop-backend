import { Skeleton } from "antd";


const loaderApi = () => {
    const categoryLoader = () => {
        return Array.from({ length: 9 }).map((_, index) => (
          <Skeleton.Input key={index} active block />
        ));
    }

    const productLoader = () => {
        return Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
                <Skeleton.Image active style={{ height: 280, width: "100%" }} />
                <Skeleton.Input active />
            </div>
            
        ));
    };

  return { categoryLoader, productLoader };
}

export { loaderApi };