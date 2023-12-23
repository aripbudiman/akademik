import React from "react";
import App from "@/Layouts/App";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Index({ kurikulum }) {
    const destroy = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            router.delete(`/kurikulum/${id}/delete`, {
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Data Berhasil dihapus",
                    });
                },
            });
        }
    };
    return (
        <App title="Kurikulum">
            <h1 className="text-3xl font-semibold">Kurikulum</h1>
            <div className="mt-5">
                <Link href="/kurikulum/create" className="btn btn-primary">
                    Tambah Kurikulum
                </Link>
                <div className="overflow-x-auto bg-base-100 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Kurikulum</th>
                                <th>Status Kurikulum</th>
                                <th>Tahun Akademik</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kurikulum.map((kurikulum, index) => (
                                <tr key={kurikulum.id}>
                                    <th>{index + 1}</th>
                                    <td>{kurikulum.nama_kurikulum}</td>
                                    <td>{kurikulum.status_kurikulum}</td>
                                    <td>{kurikulum.tahun_akademik}</td>
                                    <td className="flex gap-x-5">
                                        <Link
                                            href={`/kurikulum/${kurikulum.id}/edit`}
                                            className="text-primary"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="text-secondary"
                                            onClick={() =>
                                                destroy(kurikulum.id)
                                            }
                                        >
                                            Delete
                                        </button>
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
