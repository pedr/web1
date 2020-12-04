
const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  const { title, duration } = getFormInfo();
  addNewMovie(title, minutesToHours(duration));
});

function getFormInfo() {

  const formTitle = document.querySelector("input#title");
  const formDuration = document.querySelector("input#duration");

  return {
    title: formTitle ? formTitle.value : "",
    duration: formDuration ? formDuration.value : ""
  }
}

function minutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);

  return `${hours} hora(s) e ${minutes % 60} minuto(s)`;
}

function addNewMovie(title, duration) {

  const pTitle = document.createElement("p");
  pTitle.textContent = title;
  
  const pDuration = document.createElement("p");
  pDuration.textContent = duration;

  const div = document.createElement("div");

  div.appendChild(pTitle);
  div.appendChild(pDuration);
  
  const movies = document.getElementById("movies");
  movies.appendChild(div);
}
