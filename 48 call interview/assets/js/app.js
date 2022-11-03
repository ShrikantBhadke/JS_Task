let cl = console.log;

function hrAdminCall() {
  let num = Math.floor(Math.random() * 10) + 1;
  cl(num);
  if (num >= 5) {
    cl("first tech interview staduled ");
    firstInterview();
  } else {
    throw new Error(
      "Candidate is not Selected for First Interview Call next Candidate"
    );
  }
}

function firstInterview() {
  let num = Math.floor(Math.random() * 10) + 1;
  cl(num);
  if (num >= 6) {
    cl("Candidate Selected in First Interview");
    secInterview();
  } else {
    throw new Error(
      "Candidate Not Selected in First Round, call Next Candidate"
    );
  }
}

function secInterview() {
  let num = Math.floor(Math.random() * 10) + 1;
  cl(num);
  if (num >= 6) {
    cl("Candidate Selected in Second Interview");
    mlInterview();
  } else {
    throw new Error(
      "Candidate Not Selected in Second Round, Call Next Candidate"
    );
  }
}

function mlInterview() {
  let num = Math.floor(Math.random() * 10) + 1;
  cl(num);
  if (num >= 6) {
    cl("Candidate Selected in ML Interview");
  } else {
    throw new Error(
      "Candidate is not Selected in ML Interview, Call Next Candidate"
    );
  }
}
hrAdminCall();
