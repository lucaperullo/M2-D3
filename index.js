let nameLists = [];
let teams = 0;
const appendingTeams = document.querySelector("#teams-div");
const teamNumber = document.querySelector("#team-number").value;

//add a name
const addName = () => {
  let li = document.createElement("li");
  let ul = document.querySelector(".name-list");
  const name = document.querySelector("#input-name").value;
  if (name == "") {
    alert("Please insert a name in the name field.");
  } else {
    li.innerHTML = `<span>${name}</span>`;
    ul.appendChild(li);

    nameLists.push(name);
    console.log(nameLists);
  }
};

//generate teams
const createTeams = () => {
  const appendingTeams = document.querySelector("#teams-div");
  const teamNumber = document.querySelector("#team-number").value;
  teams += parseInt(teamNumber);
  for (let i = 0; i < teamNumber; i++) {
    let ul = document.createElement("ul");
    ul.innerText = `team${i + 1}`;
    ul.classList.add(`team-${i + 1}`);
    ul.classList.add(`col-xs-12`);
    ul.classList.add("col-sm-6");
    ul.classList.add("col-md-4");
    ul.classList.add("col-lg-3");
    appendingTeams.appendChild(ul);
  }
};

//randomize a name into a team
const randomizeUser = () => {
  let array = [Math.floor(Math.random() * nameLists)];
  console.log(array);
  const teamNumber = document.querySelector("#team-number").value;
  array.forEach((element) => {
    let li = document.querySelector();
    let ul = document.querySelector(
      `.team-${Math.floor(Math.random() * teamNumber)}`
    );
    ul.appendChild(li);
  });
};
