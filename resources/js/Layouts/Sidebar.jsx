import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
export default function Sidebar() {
    const url = import.meta.env.VITE_URL
    const { auth, d_siswa, d_guru } = usePage().props;
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    return (
        <div>
            <button
                title="Side navigation"
                type="button"
                className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${isSideNavOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                    }`}
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? " true" : "false"}
                aria-controls="nav-menu-4"
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
                    ></span>
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                    ></span>
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                    ></span>
                </div>
            </button>
            <aside
                id="nav-menu-4"
                aria-label="Side navigation"
                className={`sticky top-0 bottom-0 left-0 z-40 xl:flex hidden xl:w-72 h-screen flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                    <div className="shrink-0">
                        <div
                            href="/"
                            className="relative avatar btn btn-ghost btn-circle flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            {auth.user.level === "siswa" && (
                                <img
                                    src={url + 'storage/' + d_siswa.profile_siswa.foto}
                                    alt="user name"
                                    title="user name"
                                    width="48"
                                    height="48"
                                    className="rounded-full object-cover"
                                />
                            )}
                            {auth.user.level === "guru" && (
                                <img
                                    src={url + 'storage/' + d_guru.profile_guru.foto}
                                    alt="user name"
                                    title="user name"
                                    width="48"
                                    height="48"
                                    className="rounded-full object-cover"
                                />
                            )}
                            {auth.user.level === "admin" && (
                                <img
                                    src={url + 'default.jpg'}
                                    alt="user name"
                                    title="user name"
                                    width="48"
                                    height="48"
                                    className="rounded-full border-2"
                                />
                            )}
                            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-sky-500 p-1 text-sm text-white">
                                <span className="sr-only"> online </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                        <h4 className="w-full truncate text-base text-slate-700">
                            {auth.user.name}
                        </h4>
                        <p className="w-full truncate text-sm text-slate-500">
                            {auth.user.email}
                        </p>
                        <p className="w-full truncate text-sm text-slate-500">
                            {auth.user.level}
                        </p>
                    </div>
                </div>
                <nav
                    aria-label="side navigation"
                    className="flex-1 divide-y divide-slate-100 overflow-auto"
                >
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            <li className="px-3">
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                >
                                    <div className="flex items-center self-center">
                                        <Icon
                                            className="text-xl"
                                            icon="radix-icons:dashboard"
                                        />
                                    </div>
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            {(auth.user.level == "admin") && (
                                <>
                                    <li className="px-3">
                                        <Link
                                            href="/user"
                                            className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                        >
                                            <div className="flex items-center self-center ">
                                                <Icon
                                                    className="text-xl"
                                                    icon="ph:users"
                                                />
                                            </div>
                                            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                                Users
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <a
                                            href="/control_panel"
                                            className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                        >
                                            <div className="flex items-center self-center ">
                                                <Icon
                                                    className="text-xl"
                                                    icon="ep:setting"
                                                />
                                            </div>
                                            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                                Control Panel
                                            </div>
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    {(auth.user.level == "admin" || auth.user.level == "guru") && (
                        <div>
                            <ul className="flex flex-1 flex-col gap-1 py-3">
                                <li className="px-3">
                                    <Link
                                        href="/jadwal_pelajaran"
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                    >
                                        <div className="flex items-center self-center">
                                            <Icon icon="simple-line-icons:calender" />
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            Jadwal Pelajaran
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                    >
                                        <div className="flex items-center self-center ">
                                            <Icon icon="material-symbols-light:edit-calendar-outline" />
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            Absen
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    {(auth.user.level == "siswa") && (
                        <div>
                            <ul className="flex flex-1 flex-col gap-1 py-3">
                                <li className="px-3">
                                    <Link
                                        href="/siswa/lihat_absen"
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                    >
                                        <div className="flex items-center self-center ">
                                            <Icon icon="material-symbols-light:edit-calendar-outline" />
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            Lihat Absen
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link
                                        href="/siswa/berkas"
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                    >
                                        <div className="flex items-center self-center">
                                            <Icon icon="bi:folder" />
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            Upload Berkas
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link
                                        href="/siswa/pembayaran"
                                        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                    >
                                        <div className="flex items-center self-center">
                                            <Icon icon="bi:folder" />
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                            Upload Bukti Pembayaran
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
                <footer className="border-t border-slate-200 p-3">
                    <a
                        href="#"
                        className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-sky-500 "
                    >
                        <div className="flex items-center self-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                aria-label="Dashboard icon"
                                role="graphics-symbol"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <Link href="/logout" as="button" method="post" className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                            Logout
                        </Link>
                    </a>
                </footer>
            </aside>
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
                    }`}
                onClick={() => setIsSideNavOpen(false)}
            ></div>
        </div>
    );
}
