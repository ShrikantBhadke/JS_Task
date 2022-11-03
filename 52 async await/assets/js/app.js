let cl = console.log;

const hrAdminCall = (cb, scb, tcb) => {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num >= 3) {
    setTimeout(() => {
      cl("Candidate Selected for Interview");
      cb(scb, tcb);
    }, 3000);
  } else {
    throw new Error("Candidate not Selected for Interview");
  }
};

const firstInterview = (scb, tcb) => {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num >= 3) {
    setTimeout(() => {
      cl("Candidate Selected in First Interview");
      scb(tcb);
    }, 2000);
  } else {
    throw new Error("Not selected In First Tech Interview");
  }
};

const secInterview = (tcb) => {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num >= 3) {
    setTimeout(() => {
      cl("Condidate Selected in Second Interview");
      tcb();
    }, 1000);
  } else {
    throw new Error("Not Selected In Second Tech Interview");
  }
};

const mlInterview = () => {
  let num = Math.floor(Math.random() * 10) + 1;
  if (num >= 3) {
    setTimeout(() => {
      cl("Candidate Got Job");
    }, 500);
  } else {
    throw new Error("Fail In Last Interview");
  }
};
hrAdminCall(firstInterview, secInterview, mlInterview);

// function hrAdminCall() {
//   let num = Math.floor(Math.random() * 10) + 1;
//   cl(num);
//   if (num >= 5) {
//     cl("first tech interview staduled ");
//     firstInterview();
//   } else {
//     throw new Error(
//       "Candidate is not Selected for First Interview Call next Candidate"
//     );
//   }
// }

// function firstInterview() {
//   let num = Math.floor(Math.random() * 10) + 1;
//   cl(num);
//   if (num >= 6) {
//     cl("Candidate Selected in First Interview");
//     secInterview();
//   } else {
//     throw new Error(
//       "Candidate Not Selected in First Round, call Next Candidate"
//     );
//   }
// }

// function secInterview() {
//   let num = Math.floor(Math.random() * 10) + 1;
//   cl(num);
//   if (num >= 6) {
//     cl("Candidate Selected in Second Interview");
//     mlInterview();
//   } else {
//     throw new Error(
//       "Candidate Not Selected in Second Round, Call Next Candidate"
//     );
//   }
// }

// function mlInterview() {
//   let num = Math.floor(Math.random() * 10) + 1;
//   cl(num);
//   if (num >= 6) {
//     cl("Candidate Selected in ML Interview");
//   } else {
//     throw new Error(
//       "Candidate is not Selected in ML Interview, Call Next Candidate"
//     );
//   }
// }
// hrAdminCall();
