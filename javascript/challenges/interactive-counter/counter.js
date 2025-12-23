let count = 0;
let step = 1;

const countEl = document.getElementById("count");

function updateDisplay() {
  countEl.textContent = count;

  if (count > 0) countEl.style.color = "green";
  else if (count < 0) countEl.style.color = "red";
  else countEl.style.color = "black";
}

function increment() {
  count += step;
  updateDisplay();
}

function decrement() {
  if (count - step >= 0) {
    count -= step;
  }
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function setStep(value) {
  step = value;
}
