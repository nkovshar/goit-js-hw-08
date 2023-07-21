import  throttle  from 'lodash.throttle';
let formData = {};

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle (onFormInput, 500));
populateForm();

function onFormInput(evt) { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        for (let key in formData) { 
            form[key].value = formData[key];
           
        }
    }
}

function onFormSubmit(evt) { 
    evt.preventDefault();

    console.log({ email: email.value, message: message.value });

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}
