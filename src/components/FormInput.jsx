import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        style={{
          WebkitTextFillColor: defaultValue ? "rgba(0, 0, 0, 0.3)" : "",
        }}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered `}
      />
    </div>
    // <>
    //   <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //     <label className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2">
    //       Name
    //       <input
    //         type="text"
    //         className="grow rounded-lg border border-gray-200 p-2"
    //         placeholder="Daisy"
    //       />
    //     </label>
    //     <label className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2">
    //       Email
    //       <input
    //         type="text"
    //         className="grow rounded-lg border border-gray-200 p-2"
    //         placeholder="daisy@site.com"
    //       />
    //     </label>
    //     <label className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2">
    //       <input
    //         type="text"
    //         className="grow rounded-lg border border-gray-200 p-2"
    //         placeholder="Search"
    //       />
    //       <kbd className="text-xs font-bold px-2 py-1 rounded-full bg-gray-200">
    //         {" "}
    //       </kbd>
    //       <kbd className="text-xs font-bold px-2 py-1 rounded-full bg-gray-200">
    //         K
    //       </kbd>
    //     </label>
    //     <label className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2">
    //       <input
    //         type="text"
    //         className="grow rounded-lg border border-gray-200 p-2"
    //         placeholder="Search"
    //       />
    //       <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-200 text-blue-600">
    //         Optional
    //       </span>
    //     </label>
    //   </div>
    // </>
  );
};

export default FormInput;
