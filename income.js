// const incomeInputs = document.querySelectorAll('#money-input');

// incomeInputs.forEach((input) => {
//   input.addEventListener('input', (event) => {
//     const inputValue = event.target.value.replace(/[^0-9]/g, '');
//     event.target.value = inputValue;
//   });
// });


// const incomeInput = document.getElementById('income-input');
// const nextButton = document.getElementById('next-button');

// nextButton.addEventListener('click', (event) => {
//   if (incomeInput.value === "") {
//     console.log("Button clicked");
//     event.preventDefault();
//   }
// });



// function calculateBudget() {
//     const income = document.getElementById('incomeInput').value;
//     const expense1 = document.getElementById('expense1Input').value;
//     const expense2 = document.getElementById('expense2Input').value;
//     const expense3 = document.getElementById('expense3Input').value;
//     const expense4 = document.getElementById('expense4Input').value;
//     const expense5 = document.getElementById('expense5Input').value;
//     const expense6 = document.getElementById('expense6Input').value;
//     const expense7 = document.getElementById('expense7Input').value;
//     const expense8 = document.getElementById('expense8Input').value;
//     const totalExpenses = parseInt(expense1) + parseInt(expense2) + parseInt(expense3) + parseInt(expense4) + parseInt(expense5)
//     + parseInt(expense6) + parseInt(expense7) + parseInt(expense8);
//     const remainingBudget = income - totalExpenses;
//     const resultDiv = document.getElementById('result');
//     document.getElementById('result').innerHTML = remainingBudget;
//   }
  
// new code

document.getElementById("next-button").addEventListener("click", function () {
  if (document.getElementById("incomeInput").value !== "") {
    localStorage.setItem("income", document.getElementById("incomeInput").value);
    window.location.href = "expenses.html";
  } else {
    alert("Please enter your monthly income.");
  }
});


const incomeInput = document.getElementById('income-input');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', (event) => {
  if (incomeInput.value === "") {
    console.log("Button clicked");
    event.preventDefault();
  } else {
    saveIncomeAndNavigate();
  }
});

function saveIncomeAndNavigate() {
  const income = incomeInput.value;
  localStorage.setItem('income', income);
  window.location.href = 'expenses.html';
}

function calculateBudget() {
  const income = localStorage.getItem('income');
  const expense1 = document.getElementById('expense1Input').value;
  const expense2 = document.getElementById('expense2Input').value;
  const expense3 = document.getElementById('expense3Input').value;
  const expense4 = document.getElementById('expense4Input').value;
  const expense5 = document.getElementById('expense5Input').value;
  const expense6 = document.getElementById('expense6Input').value;
  const expense7 = document.getElementById('expense7Input').value;
  const expense8 = document.getElementById('expense8Input').value;
  const totalExpenses = parseInt(expense1) + parseInt(expense2) + parseInt(expense3) + parseInt(expense4) + parseInt(expense5)
  + parseInt(expense6) + parseInt(expense7) + parseInt(expense8);
  const remainingBudget = income - totalExpenses;
  const resultDiv = document.getElementById('result');
  document.getElementById('result').innerHTML = remainingBudget;
}

// After calculating the remaining budget
var remainingBudget = // your calculated value
localStorage.setItem("remainingBudget", remainingBudget);
