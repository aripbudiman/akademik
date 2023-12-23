import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import TextInput from "@/Customs/TextInput";
import App from "@/Layouts/App";
import Swal from "sweetalert2";
export default function EditGuru({ data, flash }) {
    const url = import.meta.env.VITE_URL;
    const [foto, setFoto] = useState(null);
    const [previewFoto, setPreviewFoto] = useState(`${url}/storage/${data.foto}`);
    const [values, setValues] = useState({
        id: data.id,
        nama: data.nama,
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
    function handleSubmit(e) {
        e.preventDefault();
        router.post("/guru/update", values, {
            forceFormData: true,
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: flash.message,
                });
            }
        });
    }
    return (
        <App title="Guru Create">
            <h1 className="text-3xl font-semibold">Perbaharui Data</h1>
            <div className="mt-5">
                <form className="grid grid-cols-2 gap-5">
                    <TextInput
                        label="nama"
                        name="nama"
                        value={values.nama}
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
                            <option value="laki-laki" selected={values.jenis_kelamin === "laki-laki"}>Laki-laki</option>
                            <option value="perempuan" selected={values.jenis_kelamin === "perempuan"}>Perempuan</option>
                        </select>
                    </label>
                    <TextInput
                        label="Tempat Lahir"
                        name="tempat_lahir"
                        value={values.tempat_lahir}
                        onChange={handleChange}
                    />
                    <TextInput
                        type="date"
                        label="Tanggal Lahir"
                        name="tanggal_lahir"
                        value={values.tanggal_lahir}
                        onChange={handleChange}
                    />
                    <TextInput label="NIK" name="nik" value={values.nik} onChange={handleChange} />
                    <TextInput
                        label="Agama"
                        name="agama"
                        value={values.agama}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Alamat"
                        name="alamat"
                        value={values.alamat}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="kecamatan"
                        name="kecamatan"
                        value={values.kecamatan}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="kabupaten"
                        name="kabupaten"
                        value={values.kabupaten}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="provinsi"
                        name="provinsi"
                        value={values.provinsi}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="no Hp"
                        name="no_hp"
                        value={values.no_hp}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Status"
                        name="status"
                        value={values.status}
                        onChange={handleChange}
                    />
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
                    <button onClick={handleSubmit} className="btn btn-primary">
                        Submit
                    </button>
                    <Link href="/guru" className="btn btn-secondary">
                        Cancel
                    </Link>
                </form>
            </div>
        </App>
    );
}
