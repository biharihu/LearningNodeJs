const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

if (process.argv[2]) {
  geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("Geo Error", error);
    }
    forecast(latitude, longitude, (error, response) => {
      if (error) {
        return console.log("forcast Error", error);
      }
      console.log(location);
      console.log(response);
    });
  });
} else {
  console.log("Please enter an address");
}
