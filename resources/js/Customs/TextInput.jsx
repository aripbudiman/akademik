import React from "react";

export default function TextInput({
    name,
    value,
    type = "text",
    label,
    ...props
}) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text first-letter:uppercase">
                    {label}
                </span>
            </div>
            <input
                type={type}
                placeholder={label}
                name={name}
                value={value}
                className="input input-bordered w-full"
                onChange={props.onChange}
            />
        </label>
    );
}
