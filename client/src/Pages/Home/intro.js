import React from "react";
import {useSelector} from "react-redux";


function Intro() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const {intro} = portfolioData;
    const {firstName, lastName, welcomeText, description, caption} = intro;
    return (
        <div className="relative  bg-primary">
          
            <div className="px-36 lg:px-20 sm:px-5">
                <div className="flex flex-row sm:flex-col sm:w-full">
                    <div className="h-[80vh] sm:h-[50vh] flex flex-col items-start justify-center gap-8 md:gap-4 w-1/2 sm:w-full relative mb-8"style={{ top: "-20px" }}>
                        <h1 className="text-white text-2xl md:text-1xl sm:mt-12 font-semibold">{welcomeText || ""}</h1>
                        <h1 className="text-7xl md:text-3xl text-secondary font-semibold">{firstName|| ''} {lastName || ''}</h1>
                        <h1 className="text-6xl md:text-3xl text-tertiary font-semibold">{caption ||''}</h1>
                        <p className="text-white font-semibold">{description||''}</p>


                    </div>
                    <div className="w-1/2 sm:w-full flex items-end justify-center relative">
                        <img className="w-full h-auto z-10 relative" src={https://imgur.com/a/XUYgK4q} alt="me" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white h-20 z-0 border-8 border-spacing-2 border-white "></div>
        </div>
    )
}

export default Intro;
