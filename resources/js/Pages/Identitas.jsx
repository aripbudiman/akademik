import React from "react";
import App from "@/Layouts/App";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
export default function Identitas({ identitas }) {
    console.log(identitas);
    return (
        <App title="Identitas Sekolah">
            <h1 className="text-3xl font-semibold">Identitas Sekolah</h1>
            <div className="overflow-x-auto w-1/2 mt-5 bg-base-100 shadow-md rounded-lg">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Nama Sekolah</td>
                            <td>: {identitas.nama_sekolah}</td>
                        </tr>
                        <tr>
                            <td>Nama Kepala Sekolah</td>
                            <td>: {identitas.nama_kepala_sekolah}</td>
                        </tr>
                        <tr>
                            <td>NPSN</td>
                            <td>: {identitas.npsn}</td>
                        </tr>
                        <tr>
                            <td>NSS</td>
                            <td>: {identitas.nss}</td>
                        </tr>
                        <tr>
                            <td>Alamat Sekolah</td>
                            <td>: {identitas.alamat_sekolah}</td>
                        </tr>
                        <tr>
                            <td>Kode POS</td>
                            <td>: {identitas.kode_pos}</td>
                        </tr>
                        <tr>
                            <td>Kabupaten</td>
                            <td>: {identitas.kabupaten}</td>
                        </tr>
                        <tr>
                            <td>Provinsi</td>
                            <td>: {identitas.provinsi}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>: {identitas.email}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>: {identitas.website}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-5 flex gap-x-3">
                <Link
                    href={`/identitas/${identitas.id}/edit`}
                    className="btn btn-accent"
                >
                    <Icon className="text-xl" icon="akar-icons:edit" />
                    Edit Or Setting
                </Link>
                <button className="btn btn-secondary">
                    <Icon className="text-xl" icon="icon-park-outline:back" />
                    Kembali
                </button>
            </div>
        </App>
    );
}
