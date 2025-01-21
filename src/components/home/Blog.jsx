import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    category: "UX Design",
    title: "The Future of UX Design in 2025",
    description:
      "Exploring emerging trends and technologies shaping the future of user experience design.",
    image: "/images/UX Design.png",
  },
  {
    id: 2,
    category: "Product Design",
    title: "Effective Website that Converts",
    description:
      "Exploring emerging trends and technologies shaping the future of user experience design.",
    image: "/images/Product design.png",
  },
  {
    id: 3,
    category: "Branding",
    title: "Brand Strategy Essentials",
    description:
      "Exploring emerging trends and technologies shaping the future of user experience design.",
    image: "/images/Branding.png",
  },
];

const Blog = () => {
  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
        <div className="flex flex-col text-center justify-center items-center gap-2">
          <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px]  xl:text-[32px] xl:leading-[28px] font-bold text-[#000000]">
            Latest Blog Posts
          </h1>
          <p className="text-sm md:text-base lg:text-base xl:text-base text-[#333333]">
            Stay updated with our latest insights and trends
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={article.image} alt={article.title} className="  " />
              <div className="px-1 py-6 lg:p-6">
                <p className="text-[#00CCCC] font-medium text-base mb-2">
                  {article.category}
                </p>
                <h3 className="text-[#333333] font-bold text-lg mb-3 ">
                  {article.title}
                </h3>
                <p className="text-[#5C5C5C]  font-medium text-base mb-4">
                  {article.description}
                </p>
                <Link
                  to="#"
                  className="text-[#00CCCC] text-lf font-medium hover:underline flex items-center gap-2"
                >
                  Read More{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
