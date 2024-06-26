import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/sectionTitle";

function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { imageUrl, skills, description1, description2 } = about;
    return (
        <div className="-mt-20">
            <SectionTitle title="About" />
            <div className="flex md:flex-col w-full items-center">
                <div className="h-[70vh] w-1/2 md:w-full">
                    <lottie-player
                        src={imageUrl || ""}
                        background="##fff"
                        speed="1"
                        loop
                        autoplay>
                    </lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 md:w-full">
                    <p>
                        {description1 || ''}</p>
                    <p>
                        {description2 || ''}</p>
                </div>
            </div>
            <div className="py-5 w-full">
                <h1 className="text-secondary text-xl w-full"> Here are few technologies I been working with:
                </h1>
                <div className="flex flex-wrap gap-10 mt-5">
                    {skills.map((skills, index) => (
                        <div className="border border-secondary py-3 px-10">
                            <h1 className="text-secondary">{skills}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
