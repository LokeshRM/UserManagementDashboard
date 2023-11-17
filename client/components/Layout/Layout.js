import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MenuBarMobile from "./MenuBarMobile";

function Layout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <div className="min-h-screen">
                <div className="flex">
                    <MenuBarMobile setter={setShowSidebar} />
                    <Sidebar show={showSidebar} setter={setShowSidebar} />
                    <div className="flex-grow w-full min-h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
