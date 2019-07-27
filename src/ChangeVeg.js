import React, { useContext } from 'react';
import { VegContext } from './Store';

const ChangeVeg = () => {
  const [, setVeg] = useContext(VegContext)

  const vegChange = () => {
    const vegVal = document.querySelector('#enter_veg').value;
    setVeg(vegVal )
  }

  return (
    <div>
      <label htmlFor="enter_veg">Enter veg: </label>
      <input type="text" id="enter_veg" />
      <button onClick={ vegChange }>Update veg</button>
    </div>
  )
}

export default ChangeVeg
