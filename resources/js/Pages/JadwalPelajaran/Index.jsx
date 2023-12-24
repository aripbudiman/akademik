import React from "react";
import App from "@/Layouts/App";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Index({ jadwalPelajaran }) {
    return (
        <App title="Jadwal Pelajaran">
            <h1 className="text-3xl font-semibold">Jadwal Pelajaran</h1>
            <div className="mt-5">
                <Link
                    href="/jadwal_pelajaran/create"
                    className="btn btn-primary"
                >
                    Tambah Jadwal Pelajaran
                </Link>
                <div className="overflow-x-auto mt-5 bg-base-100 shadow-md rounded-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kurikulum</th>
                                <th>Kelas</th>
                                <th>Pelajaran</th>
                                <th>Hari</th>
                                <th>Jam Mulai</th>
                                <th>Jam Selesai</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jadwalPelajaran.map((jp, index) => (
                                <tr key={jp.id}>
                                    <th>{index + 1}</th>
                                    <td>{jp.kurikulum.nama_kurikulum}</td>
                                    <td>{jp.kelas.nama_kelas}</td>
                                    <td>{jp.matapelajaran.nama_mapel}</td>
                                    <td>{jp.hari}</td>
                                    <td>{jp.jam_mulai}</td>
                                    <td>{jp.jam_selesai}</td>
                                    <td className="flex gap-x-5">
                                        <Link
                                            className="text-primary"
                                            href={`/jadwal_pelajaran/${jp.id}/edit`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => {
                                                if (
                                                    confirm(
                                                        "Apakah Anda yakin ingin menghapus data ini?"
                                                    )
                                                ) {
                                                    router.delete(
                                                        `/jadwal_pelajaran/${jp.id}/delete`,
                                                        {
                                                            onSuccess: () => {
                                                                Swal.fire({
                                                                    icon: "success",
                                                                    title: "Success",
                                                                    text: "Data Berhasil dihapus",
                                                                });
                                                            },
                                                        }
                                                    );
                                                }
                                            }}
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
