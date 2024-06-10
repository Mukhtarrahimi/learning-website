let username = document.querySelector('.username');
let number = document.querySelector('.number');
let title = document.querySelector('.title');
let submitBtn = document.querySelector('.submit-btn');
let signinupBtn = document.querySelector('.signinupBtn')

signinupBtn.addEventListener('click', () => {
    username.style.display = 'none';
    number.style.display = 'none';
    title.innerHTML = 'ورود'
    submitBtn.innerHTML = 'ورود'
})