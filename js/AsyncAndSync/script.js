//promises
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making req to ${location}`);
    if (location === "target") {
      resolve("target is reached");
    } else {
      reject("target not reached");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("process request starts");
    resolve(`extra response process after target ${response}`);
  });
}

// makeRequest("target")
//   .then((response) => {
//     console.log("response recieved");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => console.log(err));

//using async await version

async function doWork() {
  try {
    const response = await makeRequest("target"); // gets the resolved section of the promise
    console.log("response recieved");
    const proccessedResponse = await processRequest(response);
    console.log(proccessedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork(); // does same thing as make-request 
