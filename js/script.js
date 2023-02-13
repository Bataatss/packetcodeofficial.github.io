const nob = document.querySelector("button.no-btn");
const yesb = document.querySelector("button.yes-btn");
const question = document.querySelector("h2.question");
const question1 = document.querySelector("h2.question1");
nob.addEventListener("mouseenter", moveHover);
yesb.addEventListener('click', () => {
  question.innerHTML = "ركبني المرجيحة";
  question1.innerHTML = "ركبني المرجيحة";
});
function moveHover() {
  const i = Math.floor(Math.random() * 200) + 1;
  const j = Math.floor(Math.random() * 200) + 1;

  nob.style.right = i + "px";
  nob.style.top = j + "px";
} 
