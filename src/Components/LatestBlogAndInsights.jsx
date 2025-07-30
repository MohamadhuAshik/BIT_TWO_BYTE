import { ArrowUpRight } from "lucide-react";
import AIDrivenData from "../assets/AIDrivenData.png";
import AIDecision from "../assets/AIDecision.jpg";
import AIHealthCare from "../assets/AIHealthCare.jpg";
import Button from "./Button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const LatestBlogAndInsights = () => {
  const AIData = [
    {
      img: AIHealthCare,
      nameAndDate: "Santhosh Kumar 09 MAY 2025",
      content:
        "AI in Healthcare: A Game-Changer for Data Analytics Consulting Firms",
    },
    {
      img: AIDecision,
      nameAndDate: "Santhosh Kumar 09 MAY 2025",
      content:
        "AI-Driven Decisions Are Shaping the Future of Data Analytics Consulting Services",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <div className=" p-10">
        <h1 className="text-4xl p-5 font-semibold text-[#012354] ">
          Latest Blogs and Industry Insights
        </h1>
        <div data-aos="fade-up" className=" bg-white rounded-3xl p-4 grid lg:grid-cols-4 ">
          <div className="col-span-2">
            <img
              src={AIDrivenData}
              className="  object-fit border  w-full lg:h-96 "
              loading="lazy"
              alt="AIDrivenData"
            />
          </div>
          <div className="space-y-8 col-span-2 p-10">
            <p className="text-xl">01 JUL 2025</p>
            <p className="text-2xl">
              Smarter Connections. Stronger Enterprises.
            </p>
            <p className="text-xl">
              At Bittwobyte, we design reliable, secure, and scalable IT
              infrastructure tailored to modern business needs. From intelligent
              networking to future-ready technologies, we empower enterprises to
              grow smarter.
            </p>
            <Button
              cls="px-6 flex justify-center items-center  gap-3 hover:bg-[green] hover:text-white bg-white rounded-full py-2 ring-1 ring-[green] text-[green]"
              content="Read Blag"
              img={<ArrowUpRight />}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 p-8">
        {AIData.map((data,index) => (
          <div key={index}  
          // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}  
          className=" bg-white rounded-3xl p-5">
            <img
              src={data.img}
              className="rounded-3xl object-cover"
              loading="lazy"
            />
            <div className="space-y-3 p-2">
              <p className="text-xl">{data.nameAndDate}</p>
              <p className="text-2xl">{data.content}</p>
              <Button
                cls="px-6 flex justify-center items-center  gap-3 hover:bg-[green] hover:text-white bg-white rounded-full py-2 ring-1 ring-[green] text-[green]"
                content="Read Blag"
                img={<ArrowUpRight />}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestBlogAndInsights;
