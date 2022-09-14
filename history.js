const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, wordPerMinute, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
    <h3>${questionText}</h3>
    <div>
    <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
    <p>Your typing speed: <span class="bold">${wordPerMinute}</span> wpm</p>
    <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
    </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, wordPerMinute, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
      <h3>${test.questionText}</h3>
      <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
      <p>Your typing speed: <span class="bold">${test.wordPerMinute}</span> wpm</p>
      <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
