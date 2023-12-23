import React from "react";
import App from "@/Layouts/App";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
export default function ControlPanel() {
    return (
        <App title="Control Panel">
            <h1 className="text-3xl font-semibold">Control Panel</h1>
            <div className="grid grid-cols-4 gap-5 my-10">
                <Link className="bg-blue-500 text-white" href="/user">
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="ph:user-bold" />
                        <h1 className="text-lg">Data Siswa</h1>
                    </div>
                </Link>
                <Link className="btn" href="/user">
                    <Icon className="text-4xl" icon="ph:user-bold" />
                    <h1 className="text-lg">Data Guru</h1>
                </Link>
                <Link className="btn" href="/user">
                    <Icon
                        className="text-4xl"
                        icon="healthicons:i-training-class"
                    />
                    <h1 className="text-lg">Data Kelas</h1>
                </Link>
            </div>
        </App>
    );
}
