import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function App({ children, title }) {
    return (
        <div className="flex">
            <div>
                <Head title={title} />
                <Sidebar />
            </div>
            <div className="w-full">
                <Navbar />
                <div className="p-5">{children}</div>
            </div>
        </div>
    );
}
