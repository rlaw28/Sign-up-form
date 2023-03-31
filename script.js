const form = document.getElementById('main-form');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');
const formBtn = document.getElementById('form-btn');
const passwordMsg = document.getElementById('confirm-msg');


formBtn.addEventListener('click', () => {
 password === confirmPass ? passwordMsg.textContent = "Passwords match."
: passwordMsg.textContent = "Passwords do not match." })

