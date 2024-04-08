import React from "react";
import SectionTitle from "../../components/sectionTitle";
import { useSelector } from "react-redux";

function Contact() {

    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    const excludedKey1 = "cvUrl";
    const excludedKey2 = "_id";

    return (
        <div>
            <SectionTitle title="Contact" />
            <div className="flex justify-between items-center h-80 sm:h-auto sm:flex-col-reverse sm:-mt-5">
                <div className="flex flex-col gap-2 text-tertiary font-semibold sm:mb-5">

                {Object.keys(contact).map((key) => (
                     key !== excludedKey1 && key!==excludedKey2 && (
                    <h1>
                        <span className="text-tertiary text-xl font-semibold">{key} : </span>
                        <span className="text-white text-xl font-semibold">{contact[key]}</span>
                    </h1>
                     )
                ))}
</div>
            <div className="h-[300px] w-1/2 sm:w-full">
                <lottie-player src="https://lottie.host/547e48b6-ece1-4ff6-8f03-5c9a3b09b73b/ZEc9dFI987.json" background="##fff"
                    speed="01"
                    loop
                    autoplay>
                </lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact