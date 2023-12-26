import React from 'react'
import App from '@/Layouts/App'
export default function LihatAbsensi({ absensi }) {
    return (
        <App title="Absensi">
            <h1 className='text-3xl font-semibold'>Kehadiran</h1>
            <div className='mt-5'>
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
                            </tr>
                        </thead>
                        <tbody>
                            {absensi.map((absensi, index) => (
                                <tr key={absensi.id}>
                                    <th>{index + 1}</th>
                                    <td>{new Date(absensi.tanggal).toLocaleString('id-ID', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</td>
                                    <td>{absensi.siswa.nama}</td>
                                    <td>{absensi.kelas.nama_kelas}</td>
                                    <td>{absensi.mapel.nama_mapel}</td>
                                    <td>{absensi.kehadiran}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    )
}
