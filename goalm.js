const addRowBtn = document.getElementById("add-row-btn");
const expenseRows = document.getElementById("expense-rows");

function createExpenseRow() {
  const row = document.createElement("div");
  row.classList.add("row", "mb-3");

  const dateCol = document.createElement("div");
  dateCol.classList.add("col-md-4");
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
  occasionCol.classList.add("col-md-4");
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
  amountCol.classList.add("col-md-4");
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

  row.appendChild(dateCol);
  row.appendChild(occasionCol);
  row.appendChild(amountCol);

  return row;
}

addRowBtn.addEventListener("click", function() {
  const expenseRow = createExpenseRow();
  expenseRows.appendChild(expenseRow);
});
