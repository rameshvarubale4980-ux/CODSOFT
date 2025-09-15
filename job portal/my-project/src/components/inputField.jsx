import React from 'react'

const inputField = ({handleChange,value,title,name}) => {
  return (
   <label>
    <input
    type='radio'
    name={name}
    value={value}
    onChange={handleChange}
    />
    <span className='checkmark'></span>{title}

   </label>
  )
}

export default inputField