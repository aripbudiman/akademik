import React, { useState } from 'react'
import App from '@/Layouts/App'
import { Link, router } from '@inertiajs/react'
import Swal from 'sweetalert2'
import TextInput from '@/Customs/TextInput'
export default function Create({ errors, flash, siswa, kelas, mapel }) {
    const [values, setValues] = useState({
        siswa_id: '',
        kelas_id: '',
        mapel_id: '',
        tanggal: '',
        kehadiran: '',
    })

    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        router.post('/absensi', values, {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: flash.message
                })
            }
        })
    }
    return (
        <App title="Isi Absensi">
            <h1 className='text-3xl font-semibold'>Isi Absensi</h1>
            <div className='mt-5 xl:w-1/2 w-full'>
                <TextInput type='date' name='tanggal' label='Tanggal' value={values.tanggal} onChange={change} />
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nama Siswa</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="siswa_id"
                        onChange={change}
                        value={values.siswa_id}
                    >
                        <option>--Pilih Siswa--</option>
                        {siswa.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.nama}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Kelas</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="kelas_id"
                        onChange={change}
                        value={values.kelas_id}
                    >
                        <option>--Pilih Kelas--</option>
                        {kelas.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.nama_kelas}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Kelas</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="mapel_id"
                        onChange={change}
                        value={values.mapel_id}
                    >
                        <option>--Pilih Mata Pelajaran--</option>
                        {mapel.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.nama_mapel}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Kehadiran</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="kehadiran"
                        onChange={change}
                        value={values.kehadiran}
                    >
                        <option>--Pilih Kehadiran--</option>
                        <option value="Hadir">Hadir</option>
                        <option value="Sakit">Sakit</option>
                        <option value="Izin">Izin</option>
                        <option value="Alpa">Alpa</option>
                    </select>
                </label>
                <div className='mt-5 flex gap-x-3'>
                    <button onClick={submit} className='btn btn-primary'>Simpan</button>
                    <Link href='/absensi' className='btn btn-secondary'>Kembali</Link>
                </div>
            </div>
        </App>
    )
}
