import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import TextInput from "@/Customs/TextInput";
import App from "@/Layouts/App";
import Swal from "sweetalert2";
export default function EditSiswa({ data, flash }) {
    const url = import.meta.env.VITE_URL;
    console.log(data);
    const [foto, setFoto] = useState(null);
    const [previewFoto, setPreviewFoto] = useState(
        `${url}/storage/${data.foto}`
    );

    const [values, setValues] = useState({
        id: data.id,
        nama: data.nama,
        nis: data.nis,
        nisn: data.nisn,
        jenis_kelamin: data.jenis_kelamin,
        tempat_lahir: data.tempat_lahir,
        tanggal_lahir: data.tanggal_lahir,
        nik: data.nik,
        agama: data.agama,
        alamat: data.alamat,
        kecamatan: data.kecamatan,
        kabupaten: data.kabupaten,
        provinsi: data.provinsi,
        no_hp: data.no_hp,
        email: data.email,
        status: data.status,
        nama_ayah: data.nama_ayah,
        tanggal_lahir_ayah: data.tanggal_lahir_ayah,
        pendidikan_ayah: data.pendidikan_ayah,
        nama_ibu: data.nama_ibu,
        tanggal_lahir_ibu: data.tanggal_lahir_ibu,
        pendidikan_ibu: data.pendidikan_ibu,
        no_hp_wali: data.no_hp_wali,
        foto: "",
    });
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [name]: value,
        }));
    }

    const handleFoto = (e) => {
        const selectedFoto = e.target.files[0];
        setFoto(selectedFoto);
        setValues((values) => ({
            ...values,
            foto: selectedFoto,
        }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewFoto(reader.result);
        };
        if (selectedFoto) {
            reader.readAsDataURL(selectedFoto);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        router.post("/siswa/update", values, {
            forceFormData: true,
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: flash.message,
                });
            },
        });
    };
    return (
        <App title="Perbaharui Data">
            <h1 className="text-3xl font-semibold">Perbaharui Data</h1>
            <div className="grid grid-cols-2 gap-5 mt-5">
                <TextInput
                    name="nama"
                    label="Nama"
                    value={values.nama}
                    onChange={handleChange}
                />
                <TextInput
                    name="nis"
                    label="nis"
                    value={values.nis}
                    onChange={handleChange}
                />
                <TextInput
                    name="nisn"
                    label="nisn"
                    value={values.nisn}
                    onChange={handleChange}
                />
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Jenis Kelamin</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="jenis_kelamin"
                        onChange={handleChange}
                    >
                        <option
                            value="laki-laki"
                            selected={values.jenis_kelamin === "laki-laki"}
                        >
                            Laki-laki
                        </option>
                        <option
                            value="perempuan"
                            selected={values.jenis_kelamin === "perempuan"}
                        >
                            Perempuan
                        </option>
                    </select>
                </label>
                <TextInput
                    name="tempat_lahir"
                    label="tempat Lahir"
                    value={values.tempat_lahir}
                    onChange={handleChange}
                />
                <TextInput
                    name="tanggal_lahir"
                    type="date"
                    label="Tanggal Lahir"
                    value={values.tanggal_lahir}
                    onChange={handleChange}
                />
                <TextInput
                    name="agama"
                    label="Agama"
                    value={values.agama}
                    onChange={handleChange}
                />
                <TextInput
                    name="alamat"
                    label="Alamat"
                    value={values.alamat}
                    onChange={handleChange}
                />
                <TextInput
                    name="kecamatan"
                    label="Kecamatan"
                    value={values.kecamatan}
                    onChange={handleChange}
                />
                <TextInput
                    name="kabupaten"
                    label="Kabupaten"
                    value={values.kabupaten}
                    onChange={handleChange}
                />
                <TextInput
                    name="provinsi"
                    label="provinsi"
                    value={values.provinsi}
                    onChange={handleChange}
                />
                <TextInput
                    name="no_hp"
                    label="no Hp"
                    value={values.no_hp}
                    onChange={handleChange}
                />
                <TextInput
                    name="email"
                    label="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <TextInput
                    name="nama_ayah"
                    label="Nama Ayah"
                    value={values.nama_ayah}
                    onChange={handleChange}
                />
                <TextInput
                    name="tanggal_lahir_ayah"
                    type="date"
                    label="tanggal Lahir Ayah"
                    value={values.tanggal_lahir_ayah}
                    onChange={handleChange}
                />
                <TextInput
                    name="pendidikan_ayah"
                    label="Pendidikan Ayah"
                    value={values.pendidikan_ayah}
                    onChange={handleChange}
                />
                <TextInput name="nama_ibu" label="Nama Ibu" />
                <TextInput name="tanggal_lahir_ibu" label="Tanggal Lahir Ibu" />
                <TextInput name="pendidikan_ibu" label="Pendidikan Ibu" />
                <TextInput name="no_hp_wali" label="No Hp Wali" />
                <div className="grid grid-cols-2 gap-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Foto</span>
                        </div>
                        <input
                            type="file"
                            name="foto"
                            onChange={handleFoto}
                            className="file-input file-input-ghost w-full"
                        />
                    </label>
                    {previewFoto && (
                        <div>
                            <img
                                src={previewFoto}
                                alt="Preview"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        </div>
                    )}
                </div>
                <div></div>
                <Link onClick={submit} className="btn btn-primary">
                    Perbaharui Data
                </Link>
                <Link href="/siswa" className="btn btn-secondary">
                    Kembali
                </Link>
            </div>
        </App>
    );
}
