import React from 'react'

const Location = (handleChange) => {
  return (
    <div>
        <h4 className='text-bg font-medium mb-2'>Location</h4>
        <div>
            <label className='type="radio" name"test' id="test" value=""onChange={handleChange}>
            <span className='checkmark'></span>All
            </label>

            <InputField handleChange={handleChange} value="Pune" title="Pune" name="test"/>

        </div>
    </div>
  )
}

export default Location