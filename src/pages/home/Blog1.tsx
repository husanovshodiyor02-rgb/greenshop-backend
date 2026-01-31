import Bl1 from "../../assets/img/bl1.png";
import Bl2 from "../../assets/img/bl2.png";
import Bl3 from "../../assets/img/bl3.png";
import Bl4 from "../../assets/img/bl4.png";


const Blog1 = () => {
  const blogs = [
    {
      img: Bl1,
      date: "September 12",
      time: "Read in 6 minutes",
      title: "Cactus & Succulent Care Tips",
      text: "Cacti are succulents are easy care plants for any home or patio.",
    },
    {
      img: Bl2,
      date: "September 13",
      time: "Read in 2 minutes",
      title: "Top 10 Succulents for Your Home",
      text: "Best in hanging baskets. Prefers medium to high light.",
    },
    {
      img: Bl3,
      date: "September 15",
      time: "Read in 3 minutes",
      title: "Cacti & Succulent Care Tips",
      text: "Cacti and succulents thrive in containers and because most are..",
    },
    {
      img: Bl4,
      date: "September 15",
      time: "Read in 2 minutes",
      title: "Best Houseplants Room By Room",
      text: "The benefits of houseplants are endless. In addition to..",
    },
  ];

  return (
    <section className="container1">
      <h2 className="text-center text-3xl font-semibold text-[#3d3d3d] pt-16">
        Our Blog Posts
      </h2>
      <p className="font-normal text-sm leading-[171%] text-center text-[#727272] mt-2">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-md transition rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt="blog-img"
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <p className="text-[#46a358] text-sm font-medium">
                {item.date} <span className="text-gray-400">| {item.time}</span>
              </p>

              <h3 className="text-lg font-semibold text-[#3d3d3d] mt-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">{item.text}</p>

              <button className="mt-3 text-[#46a358] font-medium flex items-center gap-1">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Blog1;
