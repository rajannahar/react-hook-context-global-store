import React, { useContext } from 'react';
import { VegContext } from './Store';
import ChangeVeg from './ChangeVeg'

const Veg = () => {

  const [veg, setVeg] = useContext(VegContext)

  return (
    <div>
      <p>Today's veg is: {veg}</p>
      <button onClick={ () => setVeg('Peas') }>Change veg to peas</button>
      <ChangeVeg />
    </div>
  )
}

export default Veg;