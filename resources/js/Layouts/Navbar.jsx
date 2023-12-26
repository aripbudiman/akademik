import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
export default function Navbar() {
    const url = import.meta.env.VITE_URL
    const { auth, d_siswa, d_guru } = usePage().props;
    return (
        <div className="navbar sticky top-0 right-0 left-0 w-full z-40 bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Akademik</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            {(auth.user.level) === "siswa" && (
                                <img
                                    alt="Photo Profile"
                                    src={url + 'storage/' + d_siswa.profile_siswa.foto}
                                />
                            )}
                            {(auth.user.level) === "guru" && (
                                <img
                                    alt="Photo Profile"
                                    src={url + 'storage/' + d_guru.profile_guru.foto}
                                />
                            )}
                            {(auth.user.level) === "admin" && (
                                <img className="border-2 rounded-full"
                                    alt="Photo Profile"
                                    src={url + 'default.jpg'}
                                />
                            )}
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                type="button"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
