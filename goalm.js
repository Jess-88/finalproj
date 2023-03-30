// const addRowBtn = document.getElementById("add-row-btn");
// const expenseRows = document.getElementById("expense-rows");
// const milestonesForm = document.getElementById("milestones-form");

// function createExpenseRow() {
//   const row = document.createElement("div");
//   row.classList.add("row", "mb-3");

//   const dateCol = document.createElement("div");
//   dateCol.classList.add("col-md-4");
//   const dateLabel = document.createElement("label");
//   dateLabel.setAttribute("for", "date-input");
//   dateLabel.classList.add("form-label");
//   dateLabel.textContent = "Date";
//   const dateInput = document.createElement("input");
//   dateInput.setAttribute("type", "date");
//   dateInput.classList.add("form-control", "date-input");
//   dateInput.setAttribute("name", "date[]");
//   dateCol.appendChild(dateLabel);
//   dateCol.appendChild(dateInput);

//   const occasionCol = document.createElement("div");
//   occasionCol.classList.add("col-md-4");
//   const occasionLabel = document.createElement("label");
//   occasionLabel.setAttribute("for", "occasion-input");
//   occasionLabel.classList.add("form-label");
//   occasionLabel.textContent = "Occasion";
//   const occasionInput = document.createElement("input");
//   occasionInput.setAttribute("type", "text");
//   occasionInput.classList.add("form-control", "occasion-input");
//   occasionInput.setAttribute("name", "occasion[]");
//   occasionCol.appendChild(occasionLabel);
//   occasionCol.appendChild(occasionInput);

//   const amountCol = document.createElement("div");
//   amountCol.classList.add("col-md-4");
//   const amountLabel = document.createElement("label");
//   amountLabel.setAttribute("for", "amount-input");
//   amountLabel.classList.add("form-label");
//   amountLabel.textContent = "Amount";
//   const amountInput = document.createElement("input");
//   amountInput.setAttribute("type", "number");
//   amountInput.classList.add("form-control", "amount-input");
//   amountInput.setAttribute("name", "amount[]");
//   amountCol.appendChild(amountLabel);
//   amountCol.appendChild(amountInput);

//   row.appendChild(dateCol);
//   row.appendChild(occasionCol);
//   row.appendChild(amountCol);

//   return row;
// }

// addRowBtn.addEventListener("click", function() {
//   const expenseRow = createExpenseRow();
//   expenseRows.appendChild(expenseRow);
// });

// // Save milestones data to the server when the form is submitted
// milestonesForm.addEventListener("submit", async function (event) {
//   event.preventDefault();

//   const dateInputs = document.querySelectorAll(".date-input");
//   const occasionInputs = document.querySelectorAll(".occasion-input");
//   const amountInputs = document.querySelectorAll(".amount-input");

//   const milestones = [];

//   for (let i = 0; i < dateInputs.length; i++) {
//     milestones.push({
//       date: dateInputs[i].value,
//       occasion: occasionInputs[i].value,
//       amount: parseFloat(amountInputs[i].value),
//     });
//   }

//   // Send the milestones data to the server
//   // console.log(milestones)
//   try {
//     const response = await fetch("http://localhost:8080/milestones", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(milestones),
//     });

//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);
//       alert("Milestones data has been successfully saved");
//       window.location.href = 'plan.html';
//     } else {
//       throw new Error("Failed to save milestones data");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while saving milestones data. Please try again.");
//   }
// });

// delete code 

const addRowBtn = document.getElementById("add-row-btn");
const expenseRows = document.getElementById("expense-rows");
const milestonesForm = document.getElementById("milestones-form");

function createExpenseRow() {
  const row = document.createElement("div");
  row.classList.add("row", "mb-3", "input-row");

  const dateCol = document.createElement("div");
  dateCol.classList.add("col-md-3");
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date-input");
  dateLabel.classList.add("form-label");
  dateLabel.textContent = "Date";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.classList.add("form-control", "date-input");
  dateInput.setAttribute("name", "date[]");
  dateCol.appendChild(dateLabel);
  dateCol.appendChild(dateInput);

  const occasionCol = document.createElement("div");
  occasionCol.classList.add("col-md-3");
  const occasionLabel = document.createElement("label");
  occasionLabel.setAttribute("for", "occasion-input");
  occasionLabel.classList.add("form-label");
  occasionLabel.textContent = "Occasion";
  const occasionInput = document.createElement("input");
  occasionInput.setAttribute("type", "text");
  occasionInput.classList.add("form-control", "occasion-input");
  occasionInput.setAttribute("name", "occasion[]");
  occasionCol.appendChild(occasionLabel);
  occasionCol.appendChild(occasionInput);

  const amountCol = document.createElement("div");
  amountCol.classList.add("col-md-3");
  const amountLabel = document.createElement("label");
  amountLabel.setAttribute("for", "amount-input");
  amountLabel.classList.add("form-label");
  amountLabel.textContent = "Amount";
  const amountInput = document.createElement("input");
  amountInput.setAttribute("type", "number");
  amountInput.classList.add("form-control", "amount-input");
  amountInput.setAttribute("name", "amount[]");
  amountCol.appendChild(amountLabel);
  amountCol.appendChild(amountInput);

  const deleteCol = document.createElement("div");
  deleteCol.classList.add("col-md-3");
  const deleteLabel = document.createElement("label");
  deleteLabel.classList.add("form-label");
  deleteLabel.textContent = "\u00A0";
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("form-control", "btn", "btn-danger", "delete-row-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    row.remove();
  };
  deleteCol.appendChild(deleteLabel);
  deleteCol.appendChild(deleteBtn);

  row.appendChild(dateCol);
  row.appendChild(occasionCol);
  row.appendChild(amountCol);
  row.appendChild(deleteCol);

  return row;
}

addRowBtn.addEventListener("click", function () {
  const expenseRow = createExpenseRow();
  expenseRows.appendChild(expenseRow);
});

// Save milestones data to the server when the form is submitted
milestonesForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const dateInputs = document.querySelectorAll(".date-input");
  const occasionInputs = document.querySelectorAll(".occasion-input");
  const amountInputs = document.querySelectorAll(".amount-input");

  const milestones = [];

  for (let i = 0; i < dateInputs.length; i++) {
    milestones.push({
      date: dateInputs[i].value,
      occasion: occasionInputs[i].value,
      amount: parseFloat(amountInputs[i].value),
    });
  }

      // Send the milestones data to the server
  try {
    const response = await fetch("http://localhost:8080/milestones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(milestones),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      alert("Milestones data has been successfully saved");
      window.location.href = 'plan.html';
    } else {
      throw new Error("Failed to save milestones data");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while saving milestones data. Please try again.");
  }
});

