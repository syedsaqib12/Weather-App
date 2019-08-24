function getWeather () {

  let cityName=  document.querySelector("input").value;

    // Make a request for a user with a given ID
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9d31fa9a1daedb59edba270a0e28bc22`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}