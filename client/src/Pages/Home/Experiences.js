import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { useSelector } from "react-redux";


function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;
    
    return (
        <div className="bg-primary">
            <SectionTitle title="Experience" />
            <div className=" flex py-10 gap-20 md:flex-col">
                <div className="flex flex-col gap-10 border-l-2 border-[#fad939] w-1/3 md:flex-row md:overflow-x-scroll md:w-full">
                    {experiences.map((experience, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-4 w-full justify-center items-center
                            ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] md:ml-0 bg-[#fada393c] py-3 md:w-full'
                                    : 'text-white py-3'
                                }`}
                            >
                                {experience.period}
                            </h1>

                        </div>

                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secondary text-2xl font-semibold">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                    <p className="text-white">
                Finished three Python projects given by the HRs within a given period. Passed on three different criteria with my published packets on the company server.
Worked on given projects and completed them before 50% of the other interns.
                </p>
                </div>
                
            </div>
        </div>
    )
}

export default Experiences;
