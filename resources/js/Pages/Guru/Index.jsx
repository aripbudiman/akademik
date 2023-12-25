import React from "react";
import { Link } from "@inertiajs/react";
import App from "@/Layouts/App";
export default function Index({ guru }) {
    return (
        <App title="Guru">
            <h1 className="text-3xl font-semibold">Data Guru</h1>
            <div className="overflow-x-auto bg-base-100 my-7 shadow-md rounded-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guru.map((guru, index) => (
                            <tr key={guru.id}>
                                <th>{index + 1}</th>
                                <td>{guru.nama}</td>
                                <td>{guru.email}</td>
                                <td>
                                    <Link
                                        href={`/user/${guru.user_id}/edit`}
                                        className="text-secondary"
                                    >
                                        Update
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </App>
    );
}
