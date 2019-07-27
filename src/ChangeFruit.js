import React, { useContext } from 'react';
import { FruitContext } from './Store';

const ChangeFruit = () => {
  const [, setFruit] = useContext(FruitContext)

  const fruitChange = () => {
    const fruitVal = document.querySelector('#enter_fruit').value;
    setFruit(fruitVal )
  }

  return (
    <div>
      <label htmlFor="enter_fruit">Enter fruit: </label>
      <input type="text" id="enter_fruit" />
      <button onClick={ fruitChange }>Update fruit</button>
    </div>
  )
}

export default ChangeFruit
