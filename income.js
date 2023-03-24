const incomeInput = document.getElementById('income-input');

incomeInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.replace(/[^0-9]/g, '');
  event.target.value = inputValue;
});
