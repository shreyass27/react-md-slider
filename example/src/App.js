import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-md-slider';
import 'react-md-slider/dist/index.css';

function App() {
  const [value, setValue] = useState(10);
  const [max, setMax] = useState(100);

  useEffect(() => {
    setTimeout(function () {
      setMax(200)
    }, 5000)
  }, [setValue, setMax])

  return (
    <div className="App">

      <h1>React Number Slider</h1>
      <h4>Value: {value}</h4>

      <div className='example-container'>
        <Slider
          onChange={setValue}
          value={value}
          max={max}
          min={10}
          step={10}
          label="Number slider"
          accent="green"
          highlighted
        />
      </div>
    </div >
  );
}

export default App;
