import React, {useState} from 'react';
import './index.scss'

function App() {
  const [count, setCount] = React.useState(0);

  let onClickPlus = () => {
    setCount(count + 1);
  }

  let onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счётчик</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
