async function fetchMilestones() {
  try {
    const response = await fetch("http://localhost:8080/milestones");

    if (response.ok) {
      const milestones = await response.json();
      return milestones;
    } else {
      throw new Error("Failed to fetch milestones data");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while fetching milestones data. Please try again.");
    return [];
  }
}

async function init() {
  const milestones = await fetchMilestones();

  // sort milestones by date
  milestones.sort((a, b) => new Date(a.date) - new Date(b.date));

  // function to calculate weeks between today and occasion date
  function weeksBetweenTodayAndOccasion(occasionDate) {
    const today = new Date();
    const oneWeekInMilliseconds = 1000 * 60 * 60 * 24 * 7;
    const millisecondsBetweenDates = new Date(occasionDate) - today;
    const weeks = millisecondsBetweenDates / oneWeekInMilliseconds;

    return Math.ceil(weeks);
  }

  // insert the milestones into the table
  const table = document.getElementById('savings-table');
  for (const milestone of milestones) {
    const row = table.insertRow();
    const occasionCell = row.insertCell();
    const dateCell = row.insertCell();
    const savingsCell = row.insertCell();
    occasionCell.textContent = milestone.occasion;
    dateCell.textContent = new Date(milestone.date).toDateString();
    savingsCell.textContent = '';
  }

  // calculate the savings per week for each occasion and updates the table
  function calculateSavingsPerWeekAndUpdateTable() {
    let savingsPerWeekArray = [];

    for (let i = 0; i < milestones.length; i++) {
      let savingsPerWeek = 0;
      for (let j = i; j < milestones.length; j++) {
        const weeksToMilestone = weeksBetweenTodayAndOccasion(milestones[j].date);
        if (weeksToMilestone > 0) {
          const currentMilestoneSavingsPerWeek = milestones[j].amount / weeksToMilestone;
          savingsPerWeek += currentMilestoneSavingsPerWeek;
        }
      }
      savingsPerWeekArray.push(savingsPerWeek);
    }

    // updates the savings per week column with calculated values
    const savingsCells = table.querySelectorAll('td:nth-child(3)');
    for (let i = 0; i < savingsCells.length; i++) {
      const cell = savingsCells[i];
      cell.textContent = '$' + savingsPerWeekArray[i].toFixed(2);
    }
  }

  calculateSavingsPerWeekAndUpdateTable();
}

init();
