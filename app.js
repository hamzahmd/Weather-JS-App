
function getCityName(){
  const city = document.querySelector("input.input-location").value;
  
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ef6e1d884b95c99db1a71a727fc19a1
`
fetch(api)
    .then(response => {
      return response.json();
    })
    .then((data) => {
       const temperature = ((data.main.temp)-273.15).toFixed(1);
       const icon = data.weather[0].icon;
       const description = data.weather[0].main;
       const humidity = data.main.humidity;
        const country = data.sys.country;
      console.log(data)
       document.querySelector(".city").innerHTML = city;
       document.querySelector(".temp").innerHTML = `${temperature}°C`;
       document.querySelector(".icon").src =  `https://openweathermap.org/img/wn/${icon}@2x.png`;
       document.querySelector(".humidity").innerHTML = humidity;
       document.querySelector(".description").innerHTML = description;
       document.querySelector(".country").innerHTML = country;
    })     
 
    }
getCityName();