import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import App from "@/Layouts/App";

export default function Home({ children, title, berkas, siswa, guru }) {
    return <App title="Home">
        <div className="flex flex-wrap gap-5">
            <div className="stats shadow w-full max-w-xs">
                <div className="stat">
                    <div className="stat-title">Total Siswa</div>
                    <div className="stat-value">{siswa}</div>
                    <div className="stat-desc">Semua Siswa Aktif</div>
                </div>
            </div>
            <div className="stats shadow w-full max-w-xs">
                <div className="stat">
                    <div className="stat-title">Total Guru</div>
                    <div className="stat-value">{guru}</div>
                    <div className="stat-desc">Semua Guru Aktif</div>
                </div>
            </div>
            <div className="stats shadow w-full max-w-xs">
                <div className="stat">
                    <div className="stat-title">Total Berkas</div>
                    <div className="stat-value">{berkas}</div>
                    <div className="stat-desc">Semua siswa yg sudah upload berkas</div>
                </div>
            </div>
        </div>
    </App>;
}
