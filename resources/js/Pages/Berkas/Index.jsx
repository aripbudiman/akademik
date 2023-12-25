import React, { useState } from 'react'
import App from '@/Layouts/App'
import { Link, router } from '@inertiajs/react'
import Swal from 'sweetalert2';

export default function Index({ berkas }) {
    const url = import.meta.env.VITE_URL;
    const deleteBerkas = (id) => {
        Swal.fire({
            title: 'Apakah kamu yakin ingin menghapusnya?',
            text: "Hati-hati untuk melakukan ini",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/berkas/${id}/delete`, {
                    onSuccess: () => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }
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
                            {berkas.map((bks, index) => (
                                <tr key={bks.id}>
                                    <th>{index + 1}</th>
                                    <td>{bks.tanggal}</td>
                                    <td>{bks.siswa.nama}</td>
                                    <td><img className='w-16' src={url + "/storage/" + bks.kk} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + bks.ktp_ayah} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + bks.ktp_ibu} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + bks.akta_lahir} /></td>
                                    <td><img className='w-16' src={url + "/storage/" + bks.ijazah} /></td>
                                    <td className='flex gap-x-3'>
                                        <button onClick={() => document.getElementById(`my_modal_${index}`).showModal()} className="text-accent">Show</button>
                                        <Link className='text-primary' href={`/berkas/${bks.id}/edit`}>Edit</Link>
                                        <button onClick={() => deleteBerkas(bks.id)} className='text-secondary'>Delete</button>
                                    </td>
                                    <Modal index={index} content={bks} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </App>
    )
}
const Modal = ({ isOpen, closeModal, content, index }) => {
    return (
        <dialog id={`my_modal_${index}`} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Detail Berkas</h3>
                <div>
                    <p className="py-1 text-xl">Nama Siswa : {content.siswa.nama}</p>
                    <p className="py-1 text-xl">Tangal : {content.tanggal}</p>
                    <p className="py-4">KK : <img className='' src={import.meta.env.VITE_URL + "/storage/" + content.kk} /></p>
                    <p className="py-4">KTP AYAH : <img className='' src={import.meta.env.VITE_URL + "/storage/" + content.ktp_ayah} /></p>
                    <p className="py-4">KTP IBU : <img className='' src={import.meta.env.VITE_URL + "/storage/" + content.ktp_ibu} /></p>
                    <p className="py-4">AKTA KELAHIRAN : <img className='' src={import.meta.env.VITE_URL + "/storage/" + content.akta_lahir} /></p>
                    <p className="py-4">IJAZAH : <img className='' src={import.meta.env.VITE_URL + "/storage/" + content.ijazah} /></p>
                </div>
            </div>
        </dialog>
    );
};
