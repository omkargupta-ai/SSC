document.querySelector('.register__form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Registered ✓';
  button.disabled = true;
});
