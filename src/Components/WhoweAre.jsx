
import { ArrowUpRight } from "lucide-react"
import WhoweAreImg from "../assets/WhoWeAreImage.png"

import db from "../assets/dbimg.png"
import html from "../assets/htmlimg.png"
import lightbulb from "../assets/svg/lightbulbsvg.svg"
import Button from "./Button"
const WhoweAre = () => {
   const dataWithImg = [
        {
            img: db,
            content: "Analyze your Data"
        },
        {
            img: html,
            content: "Customized Plan"
        },
        {
            img: lightbulb,
            content: "Implement Solution"
        }
    ]
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 bg-white rounded-t-3xl p-10 ">
                <img src={WhoweAreImg} loading="lazy" />
                <div className="space-y-3">

                    <h1 className="text-3xl font-semibold">Who We Are</h1>
                    <p className="text-xl">A cutting-edge data analytics services company that provides actionable insights, predictive modeling, and AI-driven solutions to help you hack growth and drive eciency.</p>
                    <p className="text-xl"> We specialize in converting raw data into valuable, data-driven insights. Our expertise spans predictive analytics, AI-driven solutions, and business intelligence, helping organizations optimize operations, enhance decision-making, and drive growth.</p>
                    <p className="text-xl">We empower businesses across industries with data-driven strategies for improved eciency, profitability, and innovation</p>
                    <div className="grid lg:grid-cols-3 grid-cols-2     p-3 space-x-16 w-full ">
                        {dataWithImg?.map((data) => (
                            <div className="flex flex-col max-w-28  gap-3  w-full items-start justify-center">

                                <img src={data.img} alt="db" loading="lazy" className="" />
                                <p>
                                    {data.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Button
                        cls="bg-green-600 flex gap-2  hover:bg-white hover:text-[green] hover:ring-2 hover:ring-[green] hover:text-green text-white font-semibold px-5 py-2 rounded-md"
                        content="About us"
                        img = {<ArrowUpRight />}
                    />
                </div>
            </div>
        </div>
    )
}

export default WhoweAre
