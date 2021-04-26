console.log("ok");

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

const inputElement = document.querySelector('input');
const task = inputElement.value;