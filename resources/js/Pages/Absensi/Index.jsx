import React from 'react'
import App from '@/Layouts/App'
import { Link, router } from '@inertiajs/react'
import Swal from 'sweetalert2'

export default function Index({ absensi }) {
    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            router.delete(`/absensi/${id}/delete`, {
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Data Berhasil dihapus",
                    });
                },
            });
        }
    }
    return (
        <App title="Absensi">
            <h1 className='text-3xl font-semibold'>Absensi</h1>
            <div className='mt-5'>
                <Link href='/absensi/create' className='btn btn-primary'>Isi Absen</Link>
                <div className="overflow-x-auto bg-base-100 mt-5 shadow-md rounded-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Nama Siswa</th>
                                <th>Kelas</th>
                                <th>Mata Pelajaran</th>
                                <th>Kehadiran</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {absensi.map((absensi, index) => (
                                <tr key={absensi.id}>
                                    <th>{index + 1}</th>
                                    <td>{absensi.tanggal}</td>
                                    <td>{absensi.siswa.nama}</td>
                                    <td>{absensi.kelas.nama_kelas}</td>
                                    <td>{absensi.mapel.nama_mapel}</td>
                                    <td>{absensi.kehadiran}</td>
                                    <td className='flex gap-x-3'>
                                        <Link
                                            href={`/absensi/${absensi.id}/edit`}
                                            className="text-primary"
                                        >
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(absensi.id)} className='text-secondary'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    )
}
