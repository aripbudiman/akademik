import React, { useState } from "react";
import App from "@/Layouts/App";
import TextInput from "@/Customs/TextInput";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import SelectInput from "@/Customs/SelectInput";
export default function Edit({ guru, flash, errors, data }) {
    const [values, setValues] = useState({
        kode_mapel: data.kode_mapel,
        jumlah_jam: data.jumlah_jam,
        nama_mapel: data.nama_mapel,
        guru_id: data.guru_id,
    });
    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const update = (e) => {
        e.preventDefault();
        router.post(`/mata_pelajaran/${data.id}/update`, values, {
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
        <App title="Edit">
            <h1 className="text-3xl font-semibold">Edit</h1>
            <div className="mt-5">
                <TextInput
                    name="kode_mapel"
                    label="Kode Mapel"
                    onChange={change}
                    value={values.kode_mapel}
                />
                <p className="text-red-500 text-xs ml-2">{errors.kode_mapel}</p>
                <TextInput
                    name="jumlah_jam"
                    label="Jumlah Jam"
                    onChange={change}
                    value={values.jumlah_jam}
                />
                <p className="text-red-500 text-xs ml-2">{errors.jumlah_jam}</p>
                <TextInput
                    name="nama_mapel"
                    label="Nama Mapel"
                    onChange={change}
                    value={values.nama_mapel}
                />
                <p className="text-red-500 text-xs ml-2">{errors.nama_mapel}</p>
                <SelectInput
                    name="guru_id"
                    label="Guru"
                    data={guru}
                    onChange={change}
                    values={values.guru_id}
                />
                <p className="text-red-500 text-xs ml-2">{errors.guru_id}</p>
                <button onClick={update} className="btn btn-primary mt-5">
                    Simpan
                </button>
                <Link
                    href="/mata_pelajaran"
                    className="btn btn-secondary mt-5 ml-5"
                >
                    Kembali
                </Link>
            </div>
        </App>
    );
}
