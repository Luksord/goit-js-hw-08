import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    const formInput = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formInput));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const sentData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  if (sentData.email === '' || sentData.message === '') {
    alert('Both fields must be filled before sending');
  } else {
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});

try {
  const storedInput = localStorage.getItem(localStorageKey);
  if (storedInput) {
    const parsedInput = JSON.parse(storedInput);
    emailInput.value = parsedInput.email;
    messageInput.value = parsedInput.message;
  }
} catch (error) {
  console.log(error);
}

/*

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';

const defaultValue = localStorage.getItem(localStorageKey);

form.addEventListener(
  'input',
  throttle(() => {
    const formStatus = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formStatus));
  }, 500)
);

const storedFormStatus = localStorage.getItem(localStorageKey);
if (storedFormStatus) {
  const parsedFormStatus = JSON.parse(storedFormStatus);
  email.value = parsedFormStatus.email;
  message.value = parsedFormStatus.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});


*/
