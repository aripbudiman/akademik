import React, { useState } from "react";
import App from "@/Layouts/App";
import { Link, router } from "@inertiajs/react";
import TextInput from "@/Customs/TextInput";
import Swal from "sweetalert2";
export default function Edit({ flash, kelas }) {
    const [values, setValues] = useState({
        kelas: kelas.kelas,
        nama_kelas: kelas.nama_kelas,
    });
    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(`/kelas/${kelas.id}/update`, values, {
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
            <h1 className="text-3xl font-semibold">Tambah Kelas Baru</h1>
            <div className="mt-5">
                <TextInput
                    name="kelas"
                    label="Kelas"
                    onChange={change}
                    value={values.kelas}
                />
                <TextInput
                    name="nama_kelas"
                    label="Nama Kelas"
                    onChange={change}
                    value={values.nama_kelas}
                />
                <div className="flex gap-x-5 mt-5">
                    <button onClick={submit} className="btn btn-primary">
                        Simpan
                    </button>
                    <Link href="/kelas" className="btn btn-secondary">
                        Kembali
                    </Link>
                </div>
            </div>
        </App>
    );
}
