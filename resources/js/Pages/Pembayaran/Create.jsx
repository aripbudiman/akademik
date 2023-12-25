import React, { useState } from "react";
import App from "@/Layouts/App";
import TextInput from "@/Customs/TextInput";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import SelectInput from "@/Customs/SelectInput";

export default function Create({ flash, siswa, errors }) {
    const url = import.meta.env.VITE_URL;
    const [foto, setFoto] = useState(null);
    const [previewFoto, setPreviewFoto] = useState(null);
    const [values, setValues] = useState({
        siswa_id: "",
        semester: "",
        spp: 0,
        dsp: 0,
        jumlah: "",
        tanggal: "",
        foto: "",
    });
    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [name]: value,
        }));
        if (name === "spp" || name === "dsp") {
            setValues((prevValues) => ({
                ...prevValues,
                jumlah: parseInt(prevValues.spp) + parseInt(prevValues.dsp),
            }));
        }
    };

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
        router.post("/pembayaran", values, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: flash.message,
                });

                setValues({
                    siswa_id: "",
                    semester: "",
                    spp: 0,
                    dsp: 0,
                    jumlah: "",
                    tanggal: "",
                    foto: "",
                });
            },
        });
    };
    console.log(values);
    return (
        <App title="Create">
            <h1 className="text-3xl font-semibold">Create</h1>
            <div className="mt-5">
                <TextInput
                    type="date"
                    label="tanggal"
                    name="tanggal"
                    onChange={change}
                    value={values.tanggal}
                />
                <p className="text-red-500 text-xs ml-2">{errors.tanggal}</p>
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
                        <option>--Pilih siswa--</option>
                        {siswa.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.nama}
                            </option>
                        ))}
                    </select>
                </label>
                <p className="text-red-500 text-xs ml-2">{errors.siswa_id}</p>
                <TextInput
                    label="semester"
                    name="semester"
                    onChange={change}
                    value={values.semester}
                />
                <p className="text-red-500 text-xs ml-2">{errors.semester}</p>
                <TextInput
                    label="spp"
                    name="spp"
                    onChange={change}
                    value={values.spp}
                />
                <p className="text-red-500 text-xs ml-2">{errors.spp}</p>
                <TextInput
                    label="dsp"
                    name="dsp"
                    onChange={change}
                    value={values.dsp}
                />
                <p className="text-red-500 text-xs ml-2">{errors.dsp}</p>
                <TextInput
                    label="jumlah"
                    name="jumlah"
                    value={values.jumlah}
                    readonly
                />
                <p className="text-red-500 text-xs ml-2">{errors.jumlah}</p>
                <TextInput
                    label="konfirmasi"
                    name="konfirmasi"
                    onChange={change}
                    value={values.konfirmasi}
                />
                <p className="text-red-500 text-xs ml-2">{errors.konfirmasi}</p>
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
                <p className="text-red-500 text-xs ml-2">{errors.foto}</p>
                <div className="mt-5 flex gap-x-5">
                    <button className="btn btn-primary" onClick={submit}>
                        Simpan
                    </button>
                    <Link href="/pembayaran" className="btn btn-secondary">
                        Kembali
                    </Link>
                </div>
            </div>
        </App>
    );
}
