import React, { useState, createContext } from 'react'


export const FruitContext = createContext('Apple');
export const VegContext = createContext('Cauliflower');

const Store = ({children}) => {
  const [fruit, setFruit] = useState('Apple');
  const [veg, setVeg] = useState('Carrot');


  return (
    <FruitContext.Provider value={[fruit, setFruit]}>
      <VegContext.Provider value={[veg, setVeg]}>
        {children}
      </VegContext.Provider>
    </FruitContext.Provider>
  )
}

export default Store
