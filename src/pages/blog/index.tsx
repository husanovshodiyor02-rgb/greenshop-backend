import { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiEye,
  FiHeart,
  FiMessageSquare,
  FiSearch,
} from "react-icons/fi";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Footer1 from "../../components/footer/Footer1";
import Header from "../../components/header/Header";
import { useQueryHandler } from "../../hooks/useQuery";
import Garden from "../home/Garden";
import MonetizeBanner from "./MonetizeBanner";

interface BlogType {
  _id: string;
  title: string;
  short_description: string;
  content: string;
  views: number;
  created_by: string;
}


const VIEW_KEY = "viewedBlogs";
const getViewedBlogs = (): { [key: string]: number } => {
  const stored = localStorage.getItem(VIEW_KEY);
  return stored ? JSON.parse(stored) : {};
};
const saveViewedBlogs = (data: { [key: string]: number }) => {
  localStorage.setItem(VIEW_KEY, JSON.stringify(data));
};

const Blog = () => {
  
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);


  const [viewIncrements, setViewIncrements] = useState<{
    [key: string]: number;
  }>(getViewedBlogs());


  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);


  const { data: blogs, isLoading } = useQueryHandler({
    url: "user/blog",
    pathname: "blog",
    param: { search: debouncedSearch },
  });

 
  const handleCardClick = (blog: BlogType) => {
    setSelectedBlog(blog);

  
    setViewIncrements((prev) => {
      if (prev[blog._id]) return prev;

      const newState = { ...prev, [blog._id]: 1 };
      saveViewedBlogs(newState);
      return newState;
    });

    window.scrollTo(0, 0);
  };

  
  const handleBack = () => {
    setSelectedBlog(null);
  };


  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "#46A358" }} spin />
  );

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container mx-auto px-5 py-10 max-w-[1440px]">
        <MonetizeBanner />

        {selectedBlog ? (
         
          <div className="animate-fade-in max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-[#46A358] font-bold mb-6 hover:underline transition-all"
            >
              <FiArrowLeft size={20} /> Back to Blog
            </button>

            <div className="bg-[#FBFBFB] p-8 rounded-xl border border-gray-100 shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-500 text-sm mb-8 border-b pb-4">
                <span className="flex items-center gap-1 text-[#46A358]">
                  <FiEye />
                  {(selectedBlog.views || 0) +
                    (viewIncrements[selectedBlog._id] || 0)}{" "}
                  views
                </span>
                <span className="flex items-center gap-1">
                  <FiMessageSquare /> 0 comments
                </span>
                <span className="flex items-center gap-1">
                  <FiHeart /> 0 likes
                </span>
              </div>

              <div
                className="prose max-w-none text-[#727272] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>
          </div>
        ) : (
         
          <>
         
            <div className="flex justify-center mb-12">
              <div className="relative w-full max-w-[500px]">
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-[45px] pl-4 pr-12 border border-[#EAEAEA] rounded-[6px] focus:outline-none focus:border-[#46A358] text-sm text-[#3D3D3D] shadow-sm"
                />
                <button className="absolute right-0 top-0 h-full w-[50px] bg-[#46A358] rounded-r-[6px] flex items-center justify-center text-white cursor-pointer hover:bg-[#357a40] transition-all">
                  {isLoading ? (
                    <LoadingOutlined spin />
                  ) : (
                    <FiSearch size={20} />
                  )}
                </button>
              </div>
            </div>

           
            {isLoading ? (
              <div className="flex justify-center items-center h-[300px]">
                <Spin indicator={antIcon} />
              </div>
            ) : blogs && blogs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {blogs.map((item: BlogType) => (
                  <div
                    key={item._id}
                    onClick={() => handleCardClick(item)}
                    className="bg-[#FBFBFB] rounded-[10px] p-5 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-[280px] border border-transparent hover:border-[#46A358]/20 group"
                  >
                    <h3 className="font-bold text-[#3D3D3D] text-[17px] mb-3 line-clamp-2 leading-tight group-hover:text-[#46A358] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#727272] text-[13px] leading-6 line-clamp-4 flex-grow">
                      {item.short_description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#EAEAEA] flex justify-between items-center text-[#727272] text-[12px]">
                      <div className="flex items-center gap-1.5 hover:text-[#46A358] transition-colors">
                        <FiEye size={14} />
                        <span>
                          {(item.views || 0) + (viewIncrements[item._id] || 0)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-[#46A358] transition-colors">
                        <FiMessageSquare size={14} /> <span>0</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                        <FiHeart size={14} /> <span>0</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <img
                  src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  alt="empty"
                  className="mx-auto h-24 mb-4 opacity-50"
                />
                <p className="text-gray-500">
                  No blogs found matching "{search}"
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Garden />
      <Footer1 />
    </div>
  );
};

export default Blog;
