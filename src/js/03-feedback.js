import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

function formInput() {
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
}

form.addEventListener(
  'input',
  throttle(() => {
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

  const storedFormInput = localStorage.getItem(localStorageKey);
  const parsedFormImput = JSON.parse(storedFormInput);
  emailInput.value = parsedFormImput.email;
  messageInput.value = parsedFormImput.message;
});
