let cl = console.log;
const postContainer = document.getElementById("postContainer");
// function print10() {
//   cl(10);
// }

// function print20(cb) {
//   setTimeout(() => {
//     cl(20);
//     cb();
//   }, 1000);
// }

// function print30() {
//   cl(30);
// }

// print10();
// print20(print30);
// // print30();

// function fetchData(cb) {
//   setTimeout(() => {
//     cl("Data get from Database Successfully");
//     cb();
//   }, 2000);
// }
// function templating() {
//   cl("ui is created!!");
// }
// fetchData(templating);
// // templating();

let posts = [
  {
    title: "Angular 14",
    info: "Angular 14 remove support for IE",
  },
  {
    title: "Angular 15",
    info: "Angular 15 we can creat Angular Routing with out Router Module",
  },
  {
    title: "Angular 15",
    info: "Angular 15 we can creat Angular HTTP call with out HTTPMudule Module",
  },
];

function createBlogs(postObj, cb) {
  setTimeout(() => {
    if (postObj.title && postObj.info) {
      posts.push(postObj);
      cl("Data send");
      cb();
    } else {
      throw new Error("Enter proper data");
    }
  }, 3000);
}

createBlogs(
  {
    title: "Es7 Features",
    info: "Async await is added over Promises",
  },
  getdata
);

function getdata() {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num >= 5) {
      let data = posts;
      templating(data);
    } else {
      throw new Error("Somthing went Wrong !!!");
    }
    cl("templating done");
  }, 1000);
}

function templating(arr) {
  let result = "";
  arr.forEach((post) => {
    result += `
      <div class="card">
        <div class="card-header">${post.title}</div>
        <div class="card-body">${post.info}</div>
      </div>
      `;
  });
  postContainer.innerHTML = result;
}
// getdata();
