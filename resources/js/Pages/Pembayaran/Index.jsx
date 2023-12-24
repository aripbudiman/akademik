import React from "react";
import App from "@/Layouts/App";
import Swal from "sweetalert2";
import { Link, router } from "@inertiajs/react";

export default function Index({ pembayaran, flash }) {
    const url = import.meta.env.VITE_URL;
    const destroy = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            router.delete(`/pembayaran/${id}/delete`, {
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: flash.message,
                    });
                },
            });
        }
    };
    return (
        <App title="Pembayaran">
            <h1 className="text-3xl font-semibold">Pembayaran</h1>
            <div className="mt-5">
                <Link href="/pembayaran/create" className="btn btn-primary">
                    Tambah Pembayaran
                </Link>
                <div className="overflow-x-auto bg-base-100 mt-5 shadow-md rounded-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>NISN</th>
                                <th>Nama Siswa</th>
                                <th>Semester</th>
                                <th>SPP</th>
                                <th>DSP</th>
                                <th>Jumlah</th>
                                <th>Tanggal</th>
                                <th>Foto</th>
                                <th>Konfirmasi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pembayaran.map((pem, index) => (
                                <tr key={pem.id}>
                                    <th>{index + 1}</th>
                                    <td>{pem.siswa.nisn}</td>
                                    <td>{pem.siswa.nama}</td>
                                    <td>{pem.semester}</td>
                                    <td>
                                        {parseFloat(pem.spp).toLocaleString(
                                            "id"
                                        )}
                                    </td>
                                    <td>
                                        {parseFloat(pem.dsp).toLocaleString(
                                            "id"
                                        )}
                                    </td>
                                    <td>
                                        {parseFloat(pem.jumlah).toLocaleString(
                                            "id"
                                        )}
                                    </td>
                                    <td>
                                        {" "}
                                        {new Date(
                                            pem.tanggal
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "numeric",
                                            year: "numeric",
                                        })}
                                    </td>
                                    <td>
                                        <img
                                            className="w-20"
                                            src={url + "/storage/" + pem.foto}
                                        />
                                    </td>
                                    <td>{pem.konfirmasi}</td>
                                    <td className="flex gap-x-5">
                                        <Link
                                            href={`/pembayaran/${pem.id}/edit`}
                                            className="text-primary"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => destroy(pem.id)}
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
