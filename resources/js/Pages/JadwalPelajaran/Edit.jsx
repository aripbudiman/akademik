import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import TextInput from "@/Customs/TextInput";
import SelectInput from "@/Customs/SelectInput";
import App from "@/Layouts/App";
import Swal from "sweetalert2";
export default function Create({
    kurikulum,
    flash,
    errors,
    kelas,
    mataPelajaran,
    jadwalPelajaran,
}) {
    const [values, setValues] = useState({
        kurikulum_id: jadwalPelajaran.kurikulum_id,
        kelas_id: jadwalPelajaran.kelas_id,
        mata_pelajaran_id: jadwalPelajaran.mata_pelajaran_id,
        hari: jadwalPelajaran.hari,
        jam_mulai: jadwalPelajaran.jam_mulai,
        jam_selesai: jadwalPelajaran.jam_selesai,
    });
    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        router.post(`/jadwal_pelajaran/${jadwalPelajaran.id}/update`, values, {
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
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Kurikulum</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="kurikulum_id"
                        onChange={change}
                        value={values.kurikulum_id}
                    >
                        <option>--Pilih Kurikulum--</option>
                        {kurikulum.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.nama_kurikulum}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Kelas</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="kelas_id"
                        onChange={change}
                        value={values.kelas_id}
                    >
                        <option>--Pilih Kelas--</option>
                        {kelas.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.nama_kelas}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Mata Pelajaran</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="mata_pelajaran_id"
                        onChange={change}
                        value={values.mata_pelajaran_id}
                    >
                        <option>--Pilih Mata Pelajaran--</option>
                        {mataPelajaran.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.nama_mapel}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Hari</span>
                    </div>
                    <select
                        className="select select-bordered"
                        name="hari"
                        onChange={change}
                        value={values.hari}
                    >
                        <option>--Pilih Hari--</option>
                        <option value="senin">Senin</option>
                        <option value="selasa">Selasa</option>
                        <option value="rabu">Rabu</option>
                        <option value="kamis">Kamis</option>
                        <option value="jumat">Jumat</option>
                        <option value="sabtu">Sabtu</option>
                    </select>
                </label>
                <TextInput
                    label="Jam Mulai"
                    type="time"
                    name="jam_mulai"
                    onChange={change}
                    value={values.jam_mulai}
                />
                <TextInput
                    label="Jam Selesai"
                    type="time"
                    name="jam_selesai"
                    onChange={change}
                    value={values.jam_selesai}
                />
                <div className="mt-5 flex gap-x-5">
                    <button onClick={submit} className="btn btn-primary">
                        Simpan
                    </button>
                    <Link
                        href="/jadwal_pelajaran"
                        className="btn btn-secondary"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
        </App>
    );
}
