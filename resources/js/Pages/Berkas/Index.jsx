import React from 'react'
import App from '@/Layouts/App'
import { Link, router } from '@inertiajs/react'
import Swal from 'sweetalert2';

export default function Index({ berkas }) {
    const url = import.meta.env.VITE_URL;
    return (
        <App title="Berkas">
            <h1 className='text-3xl font-semibold'>Berkas Siswa</h1>
            <div className='mt-5'>
                <Link href='/berkas/create' className='btn btn-primary'>Upload Berkas</Link>
                <div className="overflow-x-auto bg-base-100 mt-5 shadow-md rounded-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Nama Siswa</th>
                                <th>KK</th>
                                <th>KTP AYAH</th>
                                <th>KTP IBU</th>
                                <th>AKTA KELAHIRAN</th>
                                <th>IJAZAH</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {berkas.map((berkas, index) => (
                                <tr key={berkas.id}>
                                    <th>{index + 1}</th>
                                    <td>{berkas.tanggal}</td>
                                    <td>{berkas.siswa.nama}</td>
                                    <td><img className='w-16' src={url + "/storage/" + berkas.kk} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + berkas.ktp_ayah} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + berkas.ktp_ibu} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + berkas.akta_lahir} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + berkas.ijazah} /></td>
                                    <td className='flex gap-x-3'>
                                        <button className="text-accent">Show</button>
                                        <Link className='text-primary' href={`/berkas/${berkas.id}/edit`}>Edit</Link>
                                        <button className='text-secondary'>Delete</button>
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
