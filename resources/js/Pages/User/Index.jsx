import React from "react";
import App from "@/Layouts/App";
import { Link } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Index({ users, errors, flash }) {
    if (flash.message) {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: flash.message,
        });
    }
    return (
        <App title="Data Pengguna">
            <h1 className="text-3xl font-semibold">Data Pengguna</h1>
            <div className="mt-5">
                <Link href="/user/create" className="btn btn-primary">
                    Buat Pengguna Baru
                </Link>
                <div className="overflow-x-auto shadow-md rounded-md mt-5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Level</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.level}</td>
                                    <td>
                                        <Link
                                            href={`/user/${user.id}/edit`}
                                            className="text-secondary"
                                        >
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    );
}
