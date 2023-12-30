import React from 'react'
import App from '@/Layouts/App'
import { Link } from '@inertiajs/react'
import Swal from 'sweetalert2'
export default function Index({ flash, errors, ruangan }) {
    console.log(ruangan)
    if (flash.message) {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: flash.message,
        });
    }
    return (
        <App title="Ruangan">
            <h1 className='text-3xl font-semibold'>Ruangan</h1>
            <div>
                <Link href='/ruangan/create' className='btn btn-primary mt-5'>Buat Ruangan</Link>
                <div className='mt-5'>
                    <div className="overflow-x-auto bg-base-100 shadow-md rounded-md">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Kelas</th>
                                    <th>Jumlah Siswa</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ruangan.map((ruangan, index) => (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{ruangan.nama_kelas}</td>
                                        <td>{ruangan.total_siswa}</td>
                                        <td className='flex gap-x-3'>
                                            <Link
                                                href={`/ruangan/${ruangan.id}/ruangan`}
                                                className="text-secondary"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </App>
    )
}
