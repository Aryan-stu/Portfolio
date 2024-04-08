import React from "react";
import {useSelector} from "react-redux";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";




function Home() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    return (
        <div>
            <div>
                <Header />
            </div>
            {portfolioData && (
                <div>
                    <div>
                        <Intro />
                    </div>
                    <div className="px-36 md:px-10 sm:px-5 mt-[-42px] mb-5">
                        <About />
                    </div>
                    <div className="bg-primary px-36 md:px-10 sm:px-5">
                        <Experiences />
                        <Projects />
                        <Contact />
                        <Footer />
                        <LeftSider />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home