const container = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

function updateText() {
  characterIndex++;
  article = careers[careerIndex][0] === "I" ? "an " : "a ";
  container.innerHTML =
    "<h1>I am " +
    article +
    careers[careerIndex].slice(0, characterIndex) +
    "</h1>";
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
updateText();
