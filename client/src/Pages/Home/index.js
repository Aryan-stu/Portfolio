import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";



function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Intro />
            </div>
            <div className="px-36 md:px-10 sm:px-5 mt-[-42px]">
                <About />
            </div>
        </div>
    )
}

export default Home