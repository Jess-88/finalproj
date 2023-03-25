const incomeInputs = document.querySelectorAll('#money-input');

incomeInputs.forEach((input) => {
  input.addEventListener('input', (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = inputValue;
  });
});


const incomeInput = document.getElementById('income-input');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', (event) => {
  if (incomeInput.value === "") {
    console.log("Button clicked");
    event.preventDefault();
  }
});
