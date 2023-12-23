import React, { useState } from "react";
import App from "@/Layouts/App";
import TextInput from "@/Customs/TextInput";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
export default function Create({ errors }) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        level: "siswa",
    });
    const change = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        router.post("/user", values);
    };
    return (
        <App title="Buat Akun">
            <h1 className="text-3xl font-semibold">Buat Akun Pengguna Baru</h1>
            <div className="mt-5">
                <form action="">
                    <TextInput
                        type="text"
                        name="name"
                        label="Username"
                        value={values.name}
                        onChange={change}
                    />
                    <p className="text-red-500 text-xs ml-2">{errors.name}</p>
                    <TextInput
                        type="email"
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={change}
                    />
                    <p className="text-red-500 text-xs ml-2">{errors.email}</p>
                    <TextInput
                        type="password"
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={change}
                    />
                    <p className="text-red-500 text-xs ml-2">
                        {errors.password}
                    </p>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Level</span>
                        </div>
                        <select
                            className="select select-bordered"
                            name="level"
                            onChange={change}
                        >
                            <option value="siswa">Siswa</option>
                            <option value="guru">Guru</option>
                        </select>
                    </label>
                    <div className="mt-5 grid grid-cols-2 gap-x-5">
                        <button
                            onClick={submit}
                            className="btn btn-primary"
                            href="#"
                        >
                            Buat
                        </button>
                        <Link className="btn btn-secondary" href="/user">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </App>
    );
}
