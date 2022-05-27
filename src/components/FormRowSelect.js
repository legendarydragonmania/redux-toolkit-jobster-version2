import React from 'react'

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='form-row'>
      <label htmlFor='status' className='form-label'>
        {labelText || name}
      </label>
      <select
        value={value}
        onChange={handleChange}
        name={name}
        id={name}
        className='form-select'
      >
        {list.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
