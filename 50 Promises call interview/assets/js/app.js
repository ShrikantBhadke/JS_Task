let cl = console.log;

function hrAdminCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num >= 4) {
        resolve("first tech interview staduled ");
      } else {
        reject(
          "Candidate is not Selected for First Interview Call next Candidate"
        );
      }
    }, 3000);
  });
}

function firstInterview() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num >= 4) {
        resolve("Candidate Selected in First Interview");
      } else {
        reject("Candidate Not Selected in First Round, call Next Candidate");
      }
    }, 2000);
  });
}

function secInterview() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;

      if (num >= 4) {
        resolve("Candidate Selected in Second Interview");
      } else {
        reject("Candidate Not Selected in Second Round, Call Next Candidate");
      }
    }, 500);
  });
}

function mlInterview() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num >= 4) {
        resolve("Candidate Selected in ML Interview");
      } else {
        reject(
          "Candidate is not Selected in ML Interview, Call Next Candidate"
        );
      }
    }, 0);
  });
}

hrAdminCall()
  .then((res) => {
    cl(res);
    return firstInterview();
  })
  .then((res) => {
    cl(res);
    return secInterview();
  })
  .then((res) => {
    cl(res);
    return mlInterview();
  })
  .then((res) => {
    cl(res);
  })
  .catch((rej) => {
    throw new Error(rej);
  });
