import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
export default function Sidebar() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    return (
        <>
            <button
                title="Side navigation"
                type="button"
                className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
                    isSideNavOpen
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
                className={`sticky top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
                    isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                }`}
            >
                <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                    <div className="shrink-0">
                        <a
                            href="#"
                            className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/40?img=7"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-sky-500 p-1 text-sm text-white">
                                <span className="sr-only"> online </span>
                            </span>
                        </a>
                    </div>
                    <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                        <h4 className="w-full truncate text-base text-slate-700">
                            Luke Skywalker
                        </h4>
                        <p className="w-full truncate text-sm text-slate-500">
                            Jedi warrior
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
                                    href="control_panel"
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
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            <li className="px-3">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
                                >
                                    <div className="flex items-center self-center">
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
                                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Documents
                                    </div>
                                </a>
                            </li>
                            <li className="px-3">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
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
                                                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Media & files
                                    </div>
                                </a>
                            </li>
                            <li className="px-3">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
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
                                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Storage
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
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
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                            Logout
                        </div>
                    </a>
                </footer>
            </aside>
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
                    isSideNavOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsSideNavOpen(false)}
            ></div>
        </>
    );
}
