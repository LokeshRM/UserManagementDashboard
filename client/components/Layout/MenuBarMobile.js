import React from "react";
import { FiMenu as Icon } from "react-icons/fi";

function MenuBarMobile({ setter }) {
    return (
        <div className="md:hidden bg-black fixed top-0 left-0 h-[60px] w-screen flex items-center z-10">
            <button
                className="text-4xl flex text-white ml-2"
                onClick={() => {
                    setter((show) => !show);
                }}
            >
                <Icon />
            </button>
            <h1 className=" text-white/90 font-medium text-xl mx-auto">
                User Management DashBoard
            </h1>
        </div>
    );
}

export default MenuBarMobile;
