export const displayNumericFormats = 
                          (input: string): [string, string, string] | null => {
  const sanitizedInput = input.replace(/\s/g, '');

  let decimalValue: string;
  let binaryValue: string;
  let hexadecimalValue: string;

  if (/^0b[01]+$/.test(sanitizedInput)) {
    decimalValue = parseInt(sanitizedInput.slice(2), 2).toString();
    binaryValue = sanitizedInput;
    hexadecimalValue = `0x${parseInt(decimalValue, 10).toString(16).toUpperCase()}`;
  } else if (/^[0-9]+$/.test(sanitizedInput)) {
    decimalValue = sanitizedInput;
    binaryValue = `0b${parseInt(decimalValue, 10).toString(2)}`;
    hexadecimalValue = `0x${parseInt(decimalValue, 10).toString(16).toUpperCase()}`;
  } else if (/^0x[0-9A-Fa-f]+$/.test(sanitizedInput)) {
    decimalValue = parseInt(sanitizedInput.slice(2), 16).toString();
    binaryValue = `0b${parseInt(decimalValue, 10).toString(2)}`;
    hexadecimalValue = sanitizedInput;
  } else {
    console.error('Invalid input. Please enter a valid binary, decimal, or hexadecimal number.');
    return null;
  }

  return [decimalValue, binaryValue, hexadecimalValue];
}