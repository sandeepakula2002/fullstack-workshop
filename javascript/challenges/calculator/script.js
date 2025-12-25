function calc(op) {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  let res = 0;

  if (op === '+') res = a + b;
  if (op === '-') res = a - b;
  if (op === '*') res = a * b;
  if (op === '/') res = b !== 0 ? a / b : 'Error';

  document.getElementById('result').innerText = res;
}
