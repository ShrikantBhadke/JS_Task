let cl = console.log;

const hrAdminCall = () => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (num >= 5) {
        resolve("Candidate Selected for Interview");
      } else {
        reject("Candidate not Selected for Interview");
      }
    }, 3000);
  });
};

const firstInterview = () => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (num >= 3) {
        resolve("Candidate Selected in First Interview");
      } else {
        reject("Not selected In First Tech Interview");
      }
    }, 2000);
  });
};

const secInterview = () => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (num >= 5) {
        resolve("Condidate Selected in Second Interview");
      } else {
        reject("Not Selected In Second Tech Interview");
      }
    }, 1000);
  });
};

const mlInterview = () => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (num >= 3) {
        resolve("Candidate Got Job");
      } else {
        reject("Fail In Last Interview");
      }
    }, 500);
  });
};

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
  .then((res) => cl(res))
  .catch((err) => {
    throw new Error(err);
  });
