import React from "react";
import App from "@/Layouts/App";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
export default function ControlPanel() {
    return (
        <App title="Control Panel">
            <div className="grid grid-cols-4 gap-5">
                <Link className="btn" href="/user">
                    <Icon className="text-4xl" icon="ph:user-bold" />
                    <h1 className="text-3xl">Data Siswa</h1>
                </Link>
                <Link className="btn" href="/user">
                    <Icon className="text-4xl" icon="ph:user-bold" />
                    <h1 className="text-3xl">Data Guru</h1>
                </Link>
                <Link className="btn" href="/user">
                    <Icon
                        className="text-4xl"
                        icon="healthicons:i-training-class"
                    />
                    <h1 className="text-3xl">Data Kelas</h1>
                </Link>
            </div>
        </App>
    );
}
