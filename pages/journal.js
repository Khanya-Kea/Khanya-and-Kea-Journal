const results = document.querySelector(".results");
const dialogEle = document.querySelector("#dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

let myJournal = JSON.parse(localStorage.getItem("journal")) || [];

function Journal(taskName, date, description, subject, emoji) {
  this.taskName = taskName;
  this.date = date;
  this.description = description;
  this.subject = subject;
  this.emoji = emoji;
}

function addEntryToJournal(taskName, date, description, subject, emoji) {
  const entry = new Journal(taskName, date, description, subject, emoji);
  myJournal.push(entry);
  saveJournalEntries();
  displayJournalEntries();
}

function displayJournalEntries() {
  results.innerHTML = "";

  myJournal.forEach((entry, index) => {
    const journalInfo = document.createElement("div");

    const taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = entry.taskName;
    journalInfo.appendChild(taskNameSpan);

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = entry.date;
    journalInfo.appendChild(dateSpan);

    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = entry.description;
    journalInfo.appendChild(descriptionSpan);

    const subjectSpan = document.createElement("span");
    subjectSpan.textContent = entry.subject;
    journalInfo.appendChild(subjectSpan);

    const emojiReact = document.createElement("span");
    emojiReact.classList.add("emoji");
    emojiReact.textContent = entry.emoji;
    journalInfo.appendChild(emojiReact);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.addEventListener("click", () => {
      deleteEntry(index);
    });
    journalInfo.appendChild(deleteBtn);

    results.appendChild(journalInfo);
  });

  if (myJournal.length === 0) {
    const emptyH2 = document.createElement("h2");
    emptyH2.textContent = "Empty";
    results.appendChild(emptyH2);
  }
}

function deleteEntry(index) {
  myJournal.splice(index, 1);
  saveJournalEntries();
  displayJournalEntries();
}

function saveJournalEntries() {
  localStorage.setItem("journal", JSON.stringify(myJournal));
}

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const taskName = document.querySelector("#task-name").value;
  const date = document.querySelector("#date").value;
  const description = document.querySelector("#description").value;
  const subject = document.querySelector("#subject").value;
  const selectedEmoji = document.querySelector("#selectEmoji").value; // Get selected emoji value

  if (taskName && date && description && subject && selectedEmoji) {
    addEntryToJournal(taskName, date, description, subject, selectedEmoji);
    dialogEle.close();
    clearModal();
  } else {
    dialogEle.close();
  }
});

showBtn.addEventListener("click", () => {
  dialogEle.showModal();
  clearModal();
});

closeBtn.addEventListener("click", () => {
  dialogEle.close();
  clearModal();
});

function clearModal() {
  document.querySelector("#task-name").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#subject").value = "";

  // Reset the emoji select to its default option
  const emojiSelect = document.querySelector("#selectEmoji");
  emojiSelect.selectedIndex = 0; // Set the default option as selected
}

displayJournalEntries();
