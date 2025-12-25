function changeColor() {
  const colors = ['red', 'green', 'blue', 'orange'];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}
