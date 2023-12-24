import React from "react";

export default function SelectInput({ label, name, data, values, onChange }) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <select
                className="select select-bordered"
                name={name}
                onChange={onChange}
            >
                <option>--Pilih {label}--</option>
                {data.map((d) => (
                    <option key={d.id} value={d.id} selected={d.id === values}>
                        {d.nama}
                    </option>
                ))}
            </select>
        </label>
    );
}
