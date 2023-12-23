import React from "react";
import App from "@/Layouts/App";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Index({ kelas }) {
    const destroy = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            router.delete(`/kelas/${id}/delete`, {
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
        <App title="Data Kelas">
            <h1 className="text-3xl font-semibold">Data Kelas</h1>
            <div className="mt-5">
                <Link className="btn btn-primary" href="/kelas/create">
                    Tambah Kelas
                </Link>
                <div className="overflow-x-auto mt-5 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kelas</th>
                                <th>Nama Kelas</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kelas.map((kls, index) => (
                                <tr key={kls.id}>
                                    <th>{index + 1}</th>
                                    <td>{kls.kelas}</td>
                                    <td>{kls.nama_kelas}</td>
                                    <td className="flex gap-x-5">
                                        <Link
                                            className="text-primary"
                                            href={`/kelas/${kls.id}/edit`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="text-secondary"
                                            onClick={() => destroy(kls.id)}
                                        >
                                            Hapus
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
