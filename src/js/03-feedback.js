import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

function formInput() {
  const email = emailInput.value;
  const message = messageInput.value;
}

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(formInput));
  }, 500)
);

const storedFormInput = localStorage.getItem(localStorageKey);
if (storedFormInput) {
  const parsedFormImput = JSON.parse(storedFormInput);
  emailInput.value = parsedFormImput.email;
  messageInput.value = parsedFormImput.message;
}

form.addEventListener('submit', event => {
  localStorage.removeItem(localStorageKey);
  console.log('Formularz wysłany z danymi:', {
    email: emailInput.value,
    message: messageInput.value,
  });
});
