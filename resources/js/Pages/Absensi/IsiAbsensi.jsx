import React, { useState, useEffect } from 'react'
import App from '@/Layouts/App'
import TextInput from '@/Customs/TextInput'
import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function IsiAbsensi({ data, mapel }) {
    const [values, setValues] = useState({
    });
    useEffect(() => {
        if (data.length > 0) {
            const newData = data.map((item) => ({
                siswa_id: item.siswa_id,
                nama: item.siswa.nama,
                kehadiran: 'Hadir',
            }));
            setValues((prevValues) => ({
                ...prevValues,
                siswa: newData,
                kelas_id: data[0].kelas_id,
                nama_kelas: data[0].kelas.nama_kelas,
                mapel_id: mapel.id,
                mapel: mapel
            }));
        }
    }, [data]);

    const isiAbsensi = (e) => {
        e.preventDefault();
        router.post('/guru/isi_absen', values, {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Absensi Berhasil'
                })
            }
        })
    }
    console.log(values)
    return (
        <App title="Isi Absensi">
            <h1 className='text-3xl font-semibold'>Isi Absensi</h1>
            <div className='mt-10'>
                <div className='flex mb-3 justify-between max-w-4xl'>
                    <div className='flex items-center gap-x-3'>
                        <label htmlFor="default-search" className="text-xl font-medium text-gray-600 ">Kelas</label>
                        <TextInput className="mb-2 max-w-xs" name="kelas_id" value={values.nama_kelas} disabled />
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <label htmlFor="default-search" className="text-xl font-medium text-gray-600 ">Tanggal</label>
                        <TextInput name="tanggal" onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })} className="mb-2 max-w-xs" type='date' />
                    </div>
                    {values.mapel && values.mapel.jumlah_jam && (
                        <div className='flex items-center gap-x-3'>
                            <label htmlFor="default-search" className="text-xl font-medium text-gray-600 ">Pelajaran</label>
                            <TextInput className="mb-2 max-w-xs" name="mapel_id" value={values.mapel.nama_mapel} disabled />
                        </div>
                    )}
                </div>
                <div className="overflow-x-auto bg-base-100 shadow-md max-w-4xl w-full">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Siswa</th>
                                <th>Kehadiran</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(values.siswa && values.siswa.length > 0) && values.siswa.map((data, index) => (
                                <tr key={data.siswa_id}>
                                    <th>{index + 1}</th>
                                    <td>{data.nama}</td>
                                    <td>
                                        <select onChange={(e) =>
                                            setValues({
                                                ...values,
                                                siswa: values.siswa.map((item, i) => i === index ? { ...item, kehadiran: e.target.value } : item),
                                            })} name='kehadiran' defaultValue="Hadir" className="select w-full max-w-xs">
                                            <option value="Hadir">Hadir</option>
                                            <option value="Izin">Izin</option>
                                            <option value="Sakit">Sakit</option>
                                            <option value="Alpa">Alpa</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex gap-x-3 justify-center max-w-3xl'>
                    <button onClick={isiAbsensi} className='btn btn-primary mt-5'>Isi Absensi</button>
                    <button className='btn btn-secondary mt-5'>Kembali</button>
                </div>
            </div>
        </App >
    )
}
