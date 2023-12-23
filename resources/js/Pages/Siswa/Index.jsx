import React from "react";
import { Link } from "@inertiajs/react";
import App from "@/Layouts/App";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Index({ siswa }) {
    const handleDelete = (id) => {
        router.delete(`/siswa/${id}/delete`, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Data Berhasil dihapus",
                });
            },
        });
    };
    return (
        <App title="Data Siswa">
            <h1 className="text-3xl font-semibold">Data Siswa</h1>
            <div className="overflow-x-auto bg-white shadow-md mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {siswa.map((siswa, index) => (
                            <tr key={siswa.id}>
                                <th>{index + 1}</th>
                                <td>{siswa.nama}</td>
                                <td>{siswa.email}</td>
                                <td className="flex gap-x-5">
                                    <Link
                                        href={`/user/${siswa.user_id}/edit`}
                                        className="text-primary"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(siswa.id)}
                                        className="text-secondary"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </App>
    );
}
