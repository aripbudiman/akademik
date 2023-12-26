import React, { useState } from 'react'
import App from '@/Layouts/App'
import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import TextInput from '@/Customs/TextInput';
import { Icon } from '@iconify/react';
export default function Edit({ errors, siswa, flash, berkas }) {
    const url = import.meta.env.VITE_URL;
    const [previewKK, setPreviewKK] = useState(url + "/storage/" + berkas.kk)
    const [previewKtpAyah, setPreviewKtpAyah] = useState(url + "/storage/" + berkas.ktp_ayah)
    const [previewKtpIbu, setPreviewKtpIbu] = useState(url + "/storage/" + berkas.ktp_ibu)
    const [previewAktaLahir, setPreviewAktaLahir] = useState(url + "/storage/" + berkas.akta_lahir)
    const [previewIjazah, setPreviewIjazah] = useState(url + "/storage/" + berkas.ijazah)
    const [values, setValues] = useState({
        tanggal: berkas.tanggal,
        siswa_id: berkas.siswa_id,
        kk: berkas.kk,
        ktp_ayah: berkas.ktp_ayah,
        ktp_ibu: berkas.ktp_ibu,
        akta_lahir: berkas.akta_lahir,
        ijazah: berkas.ijazah,
    })
    const handleKK = (e) => {
        const selectedFoto = e.target.files[0];
        setValues((values) => ({
            ...values,
            [e.target.name]: selectedFoto,
        }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewKK(reader.result);
        };
        if (selectedFoto) {
            reader.readAsDataURL(selectedFoto);
        }
    }
    const handleKtpAyah = (e) => {
        const selectedFoto = e.target.files[0];
        setValues((values) => ({
            ...values,
            [e.target.name]: selectedFoto,
        }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewKtpAyah(reader.result);
        };
        if (selectedFoto) {
            reader.readAsDataURL(selectedFoto);
        }
    }
    const handleKtpIbu = (e) => {
        const selectedFoto = e.target.files[0];
        setValues((values) => ({
            ...values,
            [e.target.name]: selectedFoto,
        }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewKtpIbu(reader.result);
        };
        if (selectedFoto) {
            reader.readAsDataURL(selectedFoto);
        }
    }
    const handleAktaLahir = (e) => {
        const selectedFoto = e.target.files[0];
        setValues((values) => ({
            ...values,
            [e.target.name]: selectedFoto,
        }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewAktaLahir(reader.result);
        };
        if (selectedFoto) {
            reader.readAsDataURL(selectedFoto);
        }
    }
    const handleIjazah = (e) => {
        const selectedFoto = e.target.files[0];
        setValues((values) => ({
            ...values,
            [e.target.name]: selectedFoto,
        }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewIjazah(reader.result);
        };
        if (selectedFoto) {
            reader.readAsDataURL(selectedFoto);
        }
    }
    const change = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    }
    const update = (e) => {
        e.preventDefault();
        router.post(`/berkas/${berkas.id}/update`, values, {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Berkas Berhasil',
                })
            },
            onError: () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    text: 'Gagal Upload Berkas',
                })
            }
        })
    }
    console.log(values)
    return (
        <App title="Upload Berkas">
            <h1 className='text-3xl font-semibold'>Upload Berkas</h1>
            <div className='mt-5'>
                <label className="form-control w-full max-w-md">
                    <div className="label">
                        <span className="label-text">Siswa</span>
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
                <TextInput type='date' name='tanggal' label='Tanggal' className="max-w-md" value={values.tanggal} onChange={change} />
                <div className='mt-5'>
                    <div className="grid grid-cols-2 gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Upload KK</span>
                            </div>
                            <input
                                type="file"
                                name="kk"
                                onChange={handleKK}
                                className="file-input file-input-ghost w-full"
                            />
                        </label>
                        {previewKK && (
                            <div>
                                <img
                                    src={previewKK}
                                    alt="Preview"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100px",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Upload Ktp Ayah</span>
                            </div>
                            <input
                                type="file"
                                name="ktp_ayah"
                                onChange={handleKtpAyah}
                                className="file-input file-input-ghost w-full"
                            />
                        </label>
                        {previewKtpAyah && (
                            <div>
                                <img
                                    src={previewKtpAyah}
                                    alt="Preview"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100px",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Upload Ktp Ibu</span>
                            </div>
                            <input
                                type="file"
                                name="ktp_ibu"
                                onChange={handleKtpIbu}
                                className="file-input file-input-ghost w-full"
                            />
                        </label>
                        {previewKtpIbu && (
                            <div>
                                <img
                                    src={previewKtpIbu}
                                    alt="Preview"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100px",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Upload Akta</span>
                            </div>
                            <input
                                type="file"
                                name="akta_lahir"
                                onChange={handleAktaLahir}
                                className="file-input file-input-ghost w-full"
                            />
                        </label>
                        {previewAktaLahir && (
                            <div>
                                <img
                                    src={previewAktaLahir}
                                    alt="Preview"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100px",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Upload Ijazah</span>
                            </div>
                            <input
                                type="file"
                                name="ijazah"
                                onChange={handleIjazah}
                                className="file-input file-input-ghost w-full"
                            />
                        </label>
                        {previewIjazah && (
                            <div>
                                <img
                                    src={previewIjazah}
                                    alt="Preview"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100px",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-5 flex gap-x-4">
                    <button
                        onClick={update}
                        className="btn btn-primary"
                    >
                        <Icon icon="material-symbols-light:save-outline" /> Update Berkas
                    </button>
                    <button onClick={() => window.history.back()}
                        className="btn btn-accent"
                    >
                        <Icon icon="icon-park-outline:back" /> Kembali
                    </button>
                </div>
            </div>
        </App>
    )
}
