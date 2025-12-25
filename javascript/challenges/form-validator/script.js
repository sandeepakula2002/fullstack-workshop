function validate() {
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg');

  msg.innerText = email.includes('@') ? 'Valid Email' : 'Invalid Email';
}
