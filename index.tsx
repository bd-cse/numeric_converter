import React from 'react';
import ReactDOM from 'react-dom';
import { displayNumericFormats } from './converter';

function App() {
  const [result, setResult] = React.useState<[number, string, string] | null>(null);

  const convert = () => {
    const inputNumber = (document.getElementById('inputNumber') as HTMLInputElement).value;
    const result = displayNumericFormats(inputNumber);

    if (result) {
      setResult(result);
    }
  };

  return (
    <div>
      <h1>Numeric Formats Converter</h1>
      <label htmlFor="inputNumber">Enter a number (binary, decimal, or hexadecimal): </label>
      <input type="text" id="inputNumber" name="inputNumber" required />
      <button type="button" onClick={convert}>Convert</button>
      {result && (
        <div style={{ marginTop: '20px' }}>
          <p>Decimal: {result[0]}</p>
          <p>Binary : {result[1]}</p>
          <p>Hex    : {result[2]}</p>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
