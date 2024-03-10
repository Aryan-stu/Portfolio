import React from "react";
import SectionTitle from "../../components/sectionTitle";

function About() {
    const skills =     [
        "Python",
        "SQL",
        "Firebase",
        "MOngoDB",
        "Express",
        "React",
        "NodeJS",
        "JavaScript",
    ];
    return (
        <div>
            <SectionTitle title="About" />
            <div className="flex sm:flex-col w-full items-center">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <lottie-player
                        src="https://lottie.host/f53ad948-a7df-4873-b5b1-56eb0ebb2186/iAawkqDuLN.json"
                        background="##fff"
                        speed="1"
                        loop
                        autoplay>
                    </lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p>
                        Hello, I'm Aryan Singh, currently pursuing my B.Tech in Information Technology. My interest in coding sparked in 10th grade and has since blossomed into a passion. In past few years, I gained valuable hands-on experience, strengthening my skills in full-stack development, UI/UX, AI, ML, data analytics, networking, and more.
                    </p>
                    <p>
                    I thrive in collaborative environments where teamwork is valued and contributions are appreciated. Outside of coding, I enjoy creating digital sketches and artwork, which also helps me develop my skills in graphic design. I'm always eager to learn and grow, embracing new challenges and exploring emerging technologies. Let's connect and explore opportunities to work together.
                    </p>
                </div>
            </div>
<div className="py-5 w-full">
    <h1 className="text-tertiary text-xl w-full"> Here are few technologies I been working with:
    </h1>
    <div className="flex flex-wrap gap-10 mt-5">
{skills.map((skills,index)=>(
    <div className="border border-tertiary py-3 px-10">
        <h1 className="text-tertiary">{skills}</h1>
    </div>
))}
</div>
</div>
        </div>
    )
}

export default About