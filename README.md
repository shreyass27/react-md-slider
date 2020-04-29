# react-md-slider

> React draggable slider

[![NPM](https://img.shields.io/npm/v/react-md-slider.svg)](https://www.npmjs.com/package/react-md-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-md-slider
```

## Usage

```jsx
import React from 'react';
import './App.css';
import Slider from 'react-md-slider';
import 'react-md-slider/dist/index.css';

function App() {
  const [value, setValue] = useState(10);

  return (
    <div className="App">

      <h1>React Number Slider</h1>
      <h4>Value: {value}</h4>

      <div className='example-container'>
        <Slider
          onChange={setValue}
          value={value}
          max={200}
          min={10}
          step={10}
          label="Number slider"
          highlighted
        />
      </div>
    </div >
  );
}

export default App;

```

## License

MIT © [shreyass2709](https://github.com/shreyass27)
