const num = Math.floor(Math.random() * 10) + 1;

function check() {
  const guess = Number(document.getElementById('guess').value);
  document.getElementById('result').innerText =
    guess === num ? 'Correct!' : 'Try Again';
}
