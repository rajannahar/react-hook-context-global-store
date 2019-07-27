import React, { useContext } from 'react';
import { FruitContext } from './Store';
import ChangeFruit from './ChangeFruit'

const Fruit = () => {
  const [fruit, setFruit] = useContext(FruitContext);

  return (
    <div>
      <p>Today's fruit is: {fruit}</p>
      <button onClick={ () => setFruit('Mango') }>Change fruit to mango</button>
      <ChangeFruit />
    </div>
  )
}

export default Fruit
