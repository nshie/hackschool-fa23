async function getTo80WPM(didPractice) {
  return new Promise((resolve, reject) => {
    if (didPractice) {
      setTimeout(() => {
        resolve();
      }, 2000);
    } else {
      reject();
    }
  });
}

function practice() {
  return true;
}

function sleep() {
  return false;
}

function main() {
  getTo80WPM(sleep())
    .then(() => {
      console.log("You got to 80 WPM!");
    })
    .catch(() => {
      console.log("You didn't get to 80 WPM :((");
    })
}

main()