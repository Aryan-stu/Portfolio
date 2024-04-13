import React from "react";
import SectionTitle from "../../components/sectionTitle";

import { useSelector } from "react-redux";

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className=" flex py-10 gap-20 md:flex-col">
                <div className="flex flex-col gap-10 md:gap-5 border-l-2 border-[#fad939] w-2/5 md:flex-row md:overflow-x-scroll md:w-full">
                    {projects.map((projects, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-4 justify-center items-center w-max
                            ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] md:ml-0 bg-[#fada393c] py-3 md:w-max'
                                    : 'text-white py-3'
                                }`}
                            >
                                {projects.title}
                            </h1>

                        </div>

                    ))}
                </div>
                <div className="flex-col items-center justify-center gap-10 md:flex-col">
                    <div className="flex justify-center">
                <img src={projects[selectedItemIndex].image} alt="" className=" max-h-64 h-auto w-auto  mb-5" /></div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-secondary text-2xl font-semibold">{projects[selectedItemIndex].title}</h1>
                        <p className="text-white">{projects[selectedItemIndex].description}</p>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Projects
