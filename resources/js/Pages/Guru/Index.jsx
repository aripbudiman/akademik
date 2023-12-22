import React from "react";
import { Link } from "@inertiajs/react";
import App from "@/Layouts/App";
export default function Index(props) {
    console.log(props);
    return (
        <App title="Guru">
            <h1 className="text-3xl font-semibold">Data Guru</h1>
            <Link href="/guru/create" className="btn btn-primary mt-5">
                Tambah Guru
            </Link>
            <div className="overflow-x-auto">
                <table className="table bg-base-100 my-7">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </App>
    );
}
