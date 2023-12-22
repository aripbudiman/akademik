import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import TextInput from "@/Customs/TextInput";
import App from "@/Layouts/App";
export default function Create(props) {
    console.log(props);
    const [foto, setFoto] = useState(null);
    const [previewFoto, setPreviewFoto] = useState(null);
    const [values, setValues] = useState({
        nama: "",
        jenis_kelamin: "laki-laki",
        tempat_lahir: "",
        tanggal_lahir: "",
        nik: "",
        agama: "",
        alamat: "",
        kecamatan: "",
        kabupaten: "",
        provinsi: "",
        no_hp: "",
        email: "",
        status: "",
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
        router.post("/guru", values, {
            forceFormData: true,
        });
    }
    console.log(values);
    return (
        <App title="Guru Create">
            <h1 className="text-3xl font-semibold">Create</h1>
            <div className="mt-5">
                <form className="grid grid-cols-2 gap-5">
                    <TextInput
                        label="nama"
                        name="nama"
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
                            <option value="laki-laki">Laki-laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                    </label>
                    <TextInput
                        label="Tempat Lahir"
                        name="tempat_lahir"
                        onChange={handleChange}
                    />
                    <TextInput
                        type="date"
                        label="Tanggal Lahir"
                        name="tanggal_lahir"
                        onChange={handleChange}
                    />
                    <TextInput label="NIK" name="nik" onChange={handleChange} />
                    <TextInput
                        label="Agama"
                        name="agama"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Alamat"
                        name="alamat"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="kecamatan"
                        name="kecamatan"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="kabupaten"
                        name="kabupaten"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="provinsi"
                        name="provinsi"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="no Hp"
                        name="no_hp"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Status"
                        name="status"
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
