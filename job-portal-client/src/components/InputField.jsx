
import React from 'react';

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container flex items-center gap-2 cursor-pointer">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        aria-label={title}
        className="accent-blue focus:ring-2 focus:ring-blue"
      />
      <span className="checkmark"></span>
      <span className="ml-2 text-primary/90">{title}</span>
    </label>
  );
};

export default InputField;
