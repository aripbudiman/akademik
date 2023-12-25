import React from "react";
import App from "@/Layouts/App";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Index({ mataPelajaran }) {
    const destroy = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(`/mata_pelajaran/${id}/delete`, {
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
        <App title="Data Mata Pelajaran">
            <h1 className="text-3xl font-semibold">Data Mata Pelajaran</h1>
            <div className="mt-5">
                <Link className="btn btn-primary" href="/mata_pelajaran/create">
                    Tambah Mapel
                </Link>
                <div className="overflow-x-auto bg-base-100 mt-5 shadow-md rounded-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kode Mapel</th>
                                <th>Jml Jam</th>
                                <th>Nama Mapel</th>
                                <th>Guru</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mataPelajaran.map((mp, index) => (
                                <tr key={mp.id}>
                                    <th>{index + 1}</th>
                                    <td>{mp.kode_mapel}</td>
                                    <td>{mp.jumlah_jam}</td>
                                    <td>{mp.nama_mapel}</td>
                                    <td>{mp.guru.nama}</td>
                                    <td className="flex gap-x-5">
                                        <Link
                                            href={`/mata_pelajaran/${mp.id}/edit`}
                                            className="text-primary"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => destroy(mp.id)}
                                            className="text-secondary"
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
