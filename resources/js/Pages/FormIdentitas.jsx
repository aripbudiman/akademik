import App from "@/Layouts/App";
import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TextInput from "@/Customs/TextInput";
import Swal from "sweetalert2";
export default function FormIdentitas({ identitas }) {
    const [values, setValues] = useState({
        nama_sekolah: identitas.nama_sekolah,
        nama_kepala_sekolah: identitas.nama_kepala_sekolah,
        npsn: identitas.npsn,
        nss: identitas.nss,
        alamat_sekolah: identitas.alamat_sekolah,
        kode_pos: identitas.kode_pos,
        kabupaten: identitas.kabupaten,
        provinsi: identitas.provinsi,
        email: identitas.email,
        website: identitas.website,
    });

    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(`/identitas/${identitas.id}/update`, values, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Identitas Sekolah Berhasil",
                });
            },
        });
    }
    return (
        <App title="Form Identitas Sekolah">
            <h1 className="text-3xl font-semibold">Form Identitas Sekolah</h1>
            <div className="mt-5">
                <TextInput
                    label="Nama Sekolah"
                    name="nama_sekolah"
                    value={values.nama_sekolah}
                    onChange={change}
                />
                <TextInput
                    label="Nama Kepala Sekolah"
                    name="nama_kepala_sekolah"
                    value={values.nama_kepala_sekolah}
                    onChange={change}
                />
                <TextInput
                    label="NPSN"
                    name="npsn"
                    value={values.npsn}
                    onChange={change}
                />
                <TextInput
                    label="NSS"
                    name="nss"
                    value={values.nss}
                    onChange={change}
                />
                <TextInput
                    label="Alamat Sekolah"
                    name="alamat_sekolah"
                    value={values.alamat_sekolah}
                    onChange={change}
                />
                <TextInput
                    label="Kode POS"
                    name="kode_pos"
                    value={values.kode_pos}
                    onChange={change}
                />
                <TextInput
                    label="Kabupaten"
                    name="kabupaten"
                    value={values.kabupaten}
                    onChange={change}
                />
                <TextInput
                    label="Provinsi"
                    name="provinsi"
                    value={values.provinsi}
                    onChange={change}
                />
                <TextInput
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={change}
                />
                <TextInput
                    label="Website"
                    name="website"
                    value={values.website}
                    onChange={change}
                />
                <div className="mt-5 mb-5 flex gap-x-4">
                    <button onClick={submit} className="btn btn-primary">
                        <Icon className="text-xl" icon="carbon:save" />
                        Simpan
                    </button>
                    <Link href="/identitas" className="btn btn-secondary">
                        <Icon
                            className="text-xl"
                            icon="icon-park-outline:back"
                        />
                        Kembali
                    </Link>
                </div>
            </div>
        </App>
    );
}
