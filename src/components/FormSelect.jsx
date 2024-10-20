import React from "react";

const FormSelect = ({ label, name, type, defaultValue, size, list }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
        id={name}
      >
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
