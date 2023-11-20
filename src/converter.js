function displayNumericFormats(input) {
  const sanitizedInput = input.replace(/\s/g, '');

  let decimalValue;
  let binaryValue;
  let hexadecimalValue;

  if (/^0b[01]+$/.test(sanitizedInput)) {
    decimalValue = parseInt(sanitizedInput.slice(2), 2);
    binaryValue = sanitizedInput;
    hexadecimalValue = `0x${decimalValue.toString(16).toUpperCase()}`;
  } else if (/^[0-9]+$/.test(sanitizedInput)) {
    decimalValue = parseInt(sanitizedInput, 10);
    binaryValue = `0b${decimalValue.toString(2)}`;
    hexadecimalValue = `0x${decimalValue.toString(16).toUpperCase()}`;
  } else if (/^0x[0-9A-Fa-f]+$/.test(sanitizedInput)) {
    decimalValue = parseInt(sanitizedInput.slice(2), 16);
    binaryValue = `0b${decimalValue.toString(2)}`;
    hexadecimalValue = sanitizedInput;
  } else {
    console.error('Invalid input. Please enter a valid binary, decimal, or hexadecimal number.');
    return null;
  }

  return [decimalValue.toString(), binaryValue, hexadecimalValue];
}

function convert() {
  const inputNumber = document.getElementById('inputNumber').value;
  const resultDiv = document.getElementById('result');
  const result = displayNumericFormats(inputNumber);

  if (result) {
    resultDiv.innerHTML = `
      <p>Decimal: ${result[0]}</p>
      <p>Binary : ${result[1]}</p>
      <p>Hex    : ${result[2]}</p>
    `;
  }
}