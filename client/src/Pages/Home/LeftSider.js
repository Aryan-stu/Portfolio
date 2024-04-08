import React from "react";
function LeftSider(){
    return(
        <div className="fixed left-0 bottom-0 px-10 md:left-max md:static">
        <div className="flex flex-col items-center">
            <div className="flex flex-col gap-3 md:flex-row md:mb-5">
            <a href="https://www.linkedin.com/in/aryan-singh-485390252/" target="_blank"><i class="ri-linkedin-box-line text-2xl"></i></a>
            <a href="mailto:aryan1311002@gmail.com" target="_blank"><i class="ri-mail-line text-2xl"></i></a>
            <a href="https://www.instagram.com/a.ryan_singh/" target="_blank"><i class="ri-instagram-line text-2xl"></i></a>
            <a href="https://github.com/Aryan-stu" target="_blank"> <i class="ri-github-line text-2xl"></i></a>
            </div>
            <div className="w-[1px] h-44 bg-secondary md:hidden">
                           </div>
        </div>
        </div>
    )
}

export default LeftSider