import React from "react";

const InputBox = ({ handleChange, value, name }) => {
  const change = e => {
    e.preventDefault();
    handleChange(e.target.name, e.target.value);
  };
  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      value={value}
      onChange={e => change(e)}
    />
  );
};

export default InputBox;
