console.log("Client side javascript file is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`http://localhost:5000/weather?address=${encodeURIComponent(location)}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.error) {
        messageOne.textContent = json.error;
      } else {
        messageOne.textContent = json.location;
        messageTwo.textContent = json.forecast;
        // console.log(json.location);
        // console.log(json.forecast);
      }
    });
});
