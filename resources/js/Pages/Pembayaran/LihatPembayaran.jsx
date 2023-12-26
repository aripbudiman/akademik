import React, { useState } from 'react'
import App from '@/Layouts/App'
import Swal from 'sweetalert2'
import { Link } from '@inertiajs/react'
import { Icon } from '@iconify/react';
export default function LihatPembayaran({ pembayaran }) {
    console.log(pembayaran)
    const url = import.meta.env.VITE_URL
    return (
        <App title="Pembayaran">
            <h1 className="text-3xl font-semibold">Pembayaran</h1>
            <div className="mt-5">
                <Link href="/pembayaran/create" className="btn btn-primary">
                    <Icon className='text-xl' icon="line-md:uploading-loop" /> Tambah Pembayaran
                </Link>
                <button onClick={() => window.location.reload()} className='btn btn-warning ml-3'><Icon className='text-xl' icon="ooui:reload" /> Reload Page</button>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    );
}
