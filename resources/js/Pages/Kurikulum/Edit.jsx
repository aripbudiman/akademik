import React, { useState } from "react";
import App from "@/Layouts/App";
import TextInput from "@/Customs/TextInput";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function Edit({ flash, kurikulum }) {
    const [values, setValues] = useState({
        nama_kurikulum: kurikulum.nama_kurikulum,
        status_kurikulum: kurikulum.status_kurikulum,
        tahun_akademik: kurikulum.tahun_akademik,
    });
    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        router.post("/kurikulum/" + kurikulum.id + "/update", values, {
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
        <App title="Create">
            <h1 className="text-3xl font-semibold">Create</h1>
            <div className="mt-5">
                <TextInput
                    name="nama_kurikulum"
                    label="Nama Kurikulum"
                    value={values.nama_kurikulum}
                    onChange={change}
                />
                <TextInput
                    name="status_kurikulum"
                    label="Status Kurikulum"
                    value={values.status_kurikulum}
                    onChange={change}
                />
                <TextInput
                    name="tahun_akademik"
                    label="Tahun Akademik"
                    value={values.tahun_akademik}
                    onChange={change}
                />
                <Link onClick={submit} className="btn btn-primary mt-5">
                    Simpan
                </Link>
                <Link href="/kurikulum" className="btn btn-secondary mt-5 ml-5">
                    Kembali
                </Link>
            </div>
        </App>
    );
}
