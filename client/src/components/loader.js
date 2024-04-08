import React from "react";

function loader(){
    return(
    <div className="h-screen flex items-center justify-center fixed inset-0 z-[10000] bg-primary">
        <div className =" flex gap-5 text-4xl  font-semibold ">
            <h1 className = "text-tertiary a">A</h1>
            <h1 className = "text-secondary s">S</h1>
        </div>
    </div>
)
}

export default loader;