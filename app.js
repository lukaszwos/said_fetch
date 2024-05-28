const axios = require("axios");

// OG way - Promises

// fetch("https://swapi.dev/api/people/") //Promise
//   .then((result) => { // Promise is fullfiled
//     return result.json(); // Response is consumed
//   })
//   .then((result) => {
//     console.log(result); // Your JSON object is ready
//   });

// Async Await way

async function giveMeData() {
  try {
    let response = await fetch("https://swapi.dev/api/people/", {
      method: "POST",
    });
    response = await response.json();
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

// giveMeData();

// axios way
async function getDataWithAxios() {
  try {
    let response = await axios.get("https://swapi.dev/api/people/");
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

// https://axios-http.com/docs/example

getDataWithAxios();

// sending POST with fetch

fetch("https://dummyjson.com/posts/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "I am in love with someone.",
    userId: 5,
    /* other post data */
    description: "this is just a test",
  }),
}).then((res) => res.json());
