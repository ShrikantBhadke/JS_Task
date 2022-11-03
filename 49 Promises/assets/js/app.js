let cl = console.log;

let candidate = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10) + 1;
  cl(num);
  if (num > 6) {
    resolve("Candidate is selected for Interview");
  } else {
    reject("Candidate is not selected for Interview");
  }
});

candidate.then((res) => cl(res)).catch((rej) => cl(rej));
