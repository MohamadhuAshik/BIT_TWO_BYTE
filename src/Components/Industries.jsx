import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Transforming healthcare with data-driven insights that enhance decision-making, leading to more personalized patient care and positive health outcomes for all.",
    },
    {
      title: "Banking and Finance",
      description:
        "Helping financial institutions with advanced analytics. Our analytics and AI consultants company enables data-driven banking decisions that optimize investments and reduce risks",
    },
    {
      title: "Retail",
      description:
        "Boost retail success with data-driven intelligence for optimizing inventory management, forecasting sales, and personalized customer experiences to help you close more conversions and sales.",
    },
    {
      title: "Manufacturing",
      description:
        "Our AI data analytics company also serves manufacturers, helping you to optimize manufacturing processes, reduce equipment downtime, and increase quality control eectiveness.",
    },
    {
      title: "Media and Entertainment",
      description:
        "Enhance audience engagement, optimize your content strategy, boost ad performance, and make data-driven creative decisions that propel you to success via data and analytics consultancy. And much, much more!",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full  mx-auto px-4 py-10  bg-[#f9f9fb] rounded-t-[150px] ">
     <div className="p-10">
        <div>

      <h2 className="text-2xl font-semibold text-blue-900">
        Industry Experience & Expertise
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        We service many types of{" "}
        <span className="text-green-600 font-medium">agile businesses.</span>
      </p>
        </div>
      <div className="bg-white rounded-lg shadow-sm divide-y">
        {industries.map((industry, index) => (
          <div key={index}>
            <button
              onClick={() => toggleOpen(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-gray-50 transition"
            >
              <div className="flex h-10  items-center gap-4">
                <span className="text-gray-500 font-semibold text-sm w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-900 font-medium">
                  {industry.title}
                </span>
              </div>
              {openIndex === index ? (
                <Button
                  cls="bg-white  gap-2 flex justify-center items-center  hover:bg-green-600 hover:text-white hover:ring-2 hover:text-green text-green-600 font-semibold px-5 py-2 rounded-full"
                  content="Learn More"
                  img={<ArrowUpRight />}
                />
              ) : (
                <ArrowUpRight className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-14 pb-4 text-gray-700 text-sm">
                {industry.description}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Industries;
