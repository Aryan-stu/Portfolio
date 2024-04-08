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
                <div className="flex flex-col gap-10 md:gap-5 border-l-2 border-[#fba66a] w-2/5 md:flex-row md:overflow-x-scroll md:w-full">
                    {projects.map((projects, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-4 justify-center items-center w-max
                            ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] md:ml-0 bg-[#f9741634] py-3 md:w-max'
                                    : 'text-white py-3'
                                }`}
                            >
                                {projects.title}
                            </h1>

                        </div>

                    ))}
                </div>
                <div className="flex items-center justify-center gap-10 md:flex-col">
                <img src={projects[selectedItemIndex].image} alt="" className="h-64 w-auto" />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-secondary text-2xl font-semibold">{projects[selectedItemIndex].title}</h1>
                        <p className="text-white">{projects[selectedItemIndex].description}</p>
                        <p className="text-white">
                            Finished three Python projects given by the HRs within a given period. Passed on three different criteria with my published packets on the company server.
                            Worked on given projects and completed them before 50% of the other interns.
                        </p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Projects