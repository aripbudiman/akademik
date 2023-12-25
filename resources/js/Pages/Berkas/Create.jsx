import React, { useState } from 'react'
import App from '@/Layouts/App'
import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import TextInput from '@/Customs/TextInput';

export default function Create({ errors, siswa, flash }) {
    const url = import.meta.env.VITE_URL;
    const [previewKK, setPreviewKK] = useState(null)
    const [previewKtpAyah, setPreviewKtpAyah] = useState(null)
    const [previewKtpIbu, setPreviewKtpIbu] = useState(null)
    const [previewAktaLahir, setPreviewAktaLahir] = useState(null)
    const [previewIjazah, setPreviewIjazah] = useState(null)
    const [values, setValues] = useState({
        tanggal: '',
        siswa_id: '',
        kk: '',
        ktp_ayah: '',
        ktp_ibu: '',
        akta_lahir: '',
        ijazah: '',
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
    const upload = (e) => {
        e.preventDefault();
        router.post('/berkas', values, {
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
                <div className="mt-5">
                    <button
                        onClick={upload}
                        className="btn btn-primary"
                    >
                        Upload Berkas
                    </button>
                </div>
            </div>
        </App>
    )
}
