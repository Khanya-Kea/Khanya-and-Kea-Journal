const logout = document.querySelector(".logout-btn");
const logo = document.querySelector(".logo img");

logo.addEventListener("click", () => {
  window.location.href = "./timetable.html";
})

logout.addEventListener("click", () => {
  window.location.href = "../index.html";
});

const subjects = document.querySelectorAll(".subject");
subjects.forEach((subject) => {
  const subjectName = subject.textContent.split(" ")[0].trim();

  console.log(subjectName);

  switch (subjectName) {
    case "Mathematics":
      subject.style.backgroundColor = "#ff5733"; // Orange
      subject.style.color = "white";
      break;
    case "English":
      subject.style.backgroundColor = "#3498db"; // Blue
      subject.style.color = "white";
      break;
    case "Afrikaans":
      subject.style.backgroundColor = "#27ae60"; // Green
      subject.style.color = "white";
      break;
    case "Robotics":
      subject.style.backgroundColor = "#f39c12"; // Yellow
      subject.style.color = "white";
      break;
    case "Praise":
      subject.style.backgroundColor = "#9b59b6"; // Purple
      subject.style.color = "white";
      break;
    case "Biblical":
      subject.style.backgroundColor = "#e74c3c"; // Red
      subject.style.color = "white";
      break;
    case "Life":
      subject.style.backgroundColor = "#16a085"; // Teal
      subject.style.color = "white";
      break;
    case "Sport":
      subject.style.backgroundColor = "#e67e22"; // Orange
      subject.style.color = "white";
      break;
    case "Assembly":
      subject.style.backgroundColor = "#8e44ad"; // Violet
      subject.style.color = "white";
      break;
    case "Natural":
      subject.style.backgroundColor = "#2ecc71"; // Emerald
      subject.style.color = "white";
      break;
    case "EMS":
      subject.style.backgroundColor = "#A65E2E"; 
      subject.style.color = "white";
      break;
    case "Social":
      subject.style.backgroundColor = "#f39c12"; // Yellow
      subject.style.color = "white";
      break;
    case "Technology":
      subject.style.backgroundColor = "#F6F0ED"; // Turquoise
      subject.style.color = "black";
      break;
    case "Culture":
      subject.style.backgroundColor = "#C2948A"; 
      subject.style.color = "black";
      break;
    case "Arts":
      subject.style.backgroundColor = "#FF6B6C"; 
      subject.style.color = "black";
      break;
    default:
      // For other subjects not specified, apply a default style
      subject.style.backgroundColor = "lightgray";
      subject.style.color = "black";
      break;
  }
});


const menuBtn = document.querySelector(".menu-btn");
const mobileDialog = document.querySelector(".mobile-dialog");
const mobileCloseBtn = document.querySelector(".mobile-close-btn");

menuBtn.addEventListener("click", () => {
  mobileDialog.showModal();
});

mobileCloseBtn.addEventListener("click", () => {
  mobileDialog.close();
});


const paras = document.querySelectorAll(".results > div span");

for (const para of paras) {
  para.scroll(100, 0);
}




