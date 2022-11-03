let cl = console.log;

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

function createBlogs(postObj) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (postObj.title && postObj.info && num >= 5) {
        posts.push(postObj);
        resolve(posts);
      } else {
        reject("Enter proper data");
      }
    }, 3000);
  });
}

function getdata(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num >= 5) {
        resolve(arr);
      } else {
        reject("Somthing went Wrong !!!");
      }
    }, 1000);
  });
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

createBlogs({
  title: "Es7 Features",
  info: "Async await is added over Promises",
})
  .then((res) => {
    return getdata(res);
  })
  .then((data) => {
    return templating(data);
  })
  .catch((rej) => {
    throw new Error(rej);
  });
