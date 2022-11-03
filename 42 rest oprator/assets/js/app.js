let cl = console.log;

let info = ["jhon doe", "jhon@gmail.com", 454778797];

// let fullName = info[0];
// let email = info[1];
// let contact = info[2];

// let [fullName, email, contact] = info;

// cl("fullName", fullName, "email", email, "contact", contact);

let data = "Cricket, Kapil Dev, 1983";

let [sports, captain, year] = data.split(", ");
cl(sports, captain, year);

let team = ["viru", "virat", "sachin", "bhaji", "yuvi", "kumbale"];

let [cap, vc, ...players] = team;

cl(cap, vc, players);

let skills = ["HTML", "CSS", "javaScript", "Angular"];
cl(...skills);
let featuerd = ["Deep Dish", "Papperoni"];
let speciality = ["Mearz", "Indian Tandoor", "Margarita"];

let allPizza = [...featuerd, "Poha", ...speciality];

cl(allPizza);

let infoDiv = document.querySelectorAll("#info p");
infoDiv = Array.from(infoDiv);
infoDiv = infoDiv.map((ele) => ele.innerText);
cl(infoDiv);
