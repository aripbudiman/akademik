import React from "react";
import App from "@/Layouts/App";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
export default function ControlPanel() {
    return (
        <App title="Control Panel">
            <h1 className="text-3xl font-semibold">Control Panel</h1>
            <div className="grid grid-cols-4 gap-5 my-10">
                <Link
                    className="bg-slate-200 text-slate-800 py-10"
                    href="/siswa"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="ph:user-bold" />
                        <h1 className="text-lg">Data Siswa</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 text-slate-800 py-10"
                    href="/guru"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="ph:user-bold" />
                        <h1 className="text-lg">Data Guru</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 text-slate-800 py-10"
                    href="/kelas"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon
                            className="text-4xl"
                            icon="healthicons:i-training-class"
                        />
                        <h1 className="text-lg">Data Kelas</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 text-slate-800 py-10"
                    href="/kurikulum"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="tdesign:education" />
                        <h1 className="text-lg">Data Kurikulum</h1>
                    </div>
                </Link>
            </div>
        </App>
    );
}
