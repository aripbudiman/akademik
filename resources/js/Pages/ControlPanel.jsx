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
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/identitas"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="fa-solid:university" />
                        <h1 className="text-lg">Identitas Sekolah</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/siswa"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="mdi:account-student" />
                        <h1 className="text-lg">Data Siswa</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/guru"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon
                            className="text-4xl"
                            icon="healthicons:i-training-class"
                        />
                        <h1 className="text-lg">Data Guru</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/kelas"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="game-icons:teacher" />
                        <h1 className="text-lg">Data Kelas</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/kurikulum"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon
                            className="text-4xl"
                            icon="material-symbols:school-rounded"
                        />
                        <h1 className="text-lg">Data Kurikulum</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/mata_pelajaran"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="basil:book-solid" />
                        <h1 className="text-lg">Mata Pelajaran</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/kurikulum"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="entypo:folder" />
                        <h1 className="text-lg">Berkas</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/kurikulum"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="ph:calendar-fill" />
                        <h1 className="text-lg">Absensi</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/pembayaran"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon className="text-4xl" icon="ion:card" />
                        <h1 className="text-lg">Pembayaran</h1>
                    </div>
                </Link>
                <Link
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-10"
                    href="/jadwal_pelajaran"
                >
                    <div className="flex flex-col justify-center items-center">
                        <Icon
                            className="text-4xl"
                            icon="mingcute:checkbox-fill"
                        />
                        <h1 className="text-lg">Jadwal Pelajaran</h1>
                    </div>
                </Link>
            </div>
        </App>
    );
}
