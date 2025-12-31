let count = 0;

const countDisplay = document.getElementById("counterValue");
const incrementButton = document.getElementById("increase");
const decrementButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

// Update UI
const updateDisplay = () => {
  countDisplay.innerText = `${count}`;
};

// Increment / Decrement
incrementButton.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementButton.addEventListener("click", () => {
  count--;
  updateDisplay();
});

// Step buttons using array
[1, 5, 10].forEach(step => {
  document
    .getElementById(`step-${step}`)
    .addEventListener("click", () => {
      count += step;
      updateDisplay();
    });
});

// Reset
resetButton.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
