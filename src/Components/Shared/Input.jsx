import React from 'react';

export default function Input({ type, id, name, title, value, errors, placeholder, onChange, onBlur, touched, autocomplete }) {

  return (
    <React.Fragment>
      <input
        className='input-style mt-2 '
        type={type}
        id={id}
        name={name}
        title={title}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autocomplete}
      />
      {touched[name] && errors[name] && <p className='validation-message text-end w-100 m-0'>{errors[name]}</p>}
    </React.Fragment>
  );
}
