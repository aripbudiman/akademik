import React, { useState } from 'react'
import App from '@/Layouts/App'
import TextInput from '@/Customs/TextInput'
import { Icon } from '@iconify/react';
import { Link, router } from '@inertiajs/react'
export default function Create({ siswa, errors, kelas }) {
    const [values, setValues] = useState({
        kelas_id: '',
        nama_kelas: '',
        siswa_id: [],
        nama: []
    })

    const store = (e) => {
        e.preventDefault();
        router.post("/ruangan", values, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: flash.message,
                });
                setValues({
                    kelas_id: '',
                    nama_kelas: '',
                    siswa_id: [],
                    nama: []
                })
            },
        });
    }
    const [rows, setRows] = useState([values]); // Initial row

    const handleAddClick = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                kelas_id: '',
                nama_kelas: '',
                siswa_id: [],
                nama: [],
            },
        ]);
    };

    return (
        <App title="Set Ruangan">
            <h1 className='text-3xl font-semibold'>Create</h1>
            <div className='mt-5'>
                <button onClick={handleAddClick} className='btn btn-primary'><Icon className='text-xl' icon="zondicons:add-outline" /> Tambah Siswa</button>
                <div className='flex'>
                    <div className='w-full max-w-xs'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Kelas</span>
                            </div>
                            <select
                                className="select select-bordered"
                                name="kelas_id"
                                onChange={(e) => {
                                    const selectedKelasId = e.target.value;
                                    setValues((prevValues) => ({
                                        ...prevValues,
                                        kelas_id: selectedKelasId
                                    }))
                                    setValues((prevValues) => ({
                                        ...prevValues,
                                        nama_kelas: e.target.options[e.target.selectedIndex].text
                                    }))
                                }
                                }
                            >
                                <option>--Pilih Kelas--</option>
                                {kelas.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.nama_kelas}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div>
                            {rows.map((row, index) => (
                                <div key={index} className='flex items-end gap-x-2'>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Siswa</span>
                                        </div>
                                        <select
                                            className="select select-bordered"
                                            name="siswa_id"
                                            onChange={(e) => {
                                                const selectedSiswaId = e.target.value;
                                                if (!values.siswa_id.includes(selectedSiswaId)) {
                                                    setValues((prevValues) => ({
                                                        ...prevValues,
                                                        siswa_id: [...prevValues.siswa_id, selectedSiswaId],
                                                    }));
                                                    setValues((prevValues) => ({
                                                        ...prevValues,
                                                        nama: [...prevValues.nama, e.target.options[e.target.selectedIndex].text],
                                                    }))
                                                } else {
                                                    console.log('Siswa ID sudah ada dalam array.');
                                                }
                                            }}
                                        >
                                            <option>--Pilih Siswa--</option>
                                            {siswa.map((s) => (
                                                <option key={s.id} value={s.id}>
                                                    {s.nama}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-5'>
                        <h1 className='text-2xl font-semibold'>List Siswa Kelas {values.nama_kelas}</h1>
                        <div className="overflow-x-auto bg-base-100 shadow-md rounded-lg">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {values.siswa_id.map((siswaId, index) => (
                                        <tr key={siswaId}>
                                            <th>{index + 1}</th>
                                            <td>{values.nama[index]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={store} className='btn btn-primary mt-2 w-full'>Simpan</button>
                    </div>
                </div>
            </div>
        </App>
    )
}
