document.getElementById("search").addEventListener("click",getCityName);

function showAlert(message, className){
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
    // Insert alert
    const form = document.querySelector('.weather');
    container.insertBefore(div,form);
  
    // Timeout after 2 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000);
  }



async function getCityName(e){
  let city = document.querySelector("input.input-location").value;
  if (city === ''){
    showAlert("No Entity found",'blank')
  }
  else {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ef6e1d884b95c99db1a71a727fc19a1`;
    

    await fetch(api)
    .then(response => {
      return response.json();
    })
    .then((data) => {
       const temperature = Math.floor((data.main.temp)-273.15);
       
       const icon = data.weather[0].icon;
       const description = data.weather[0].main;
       const humidity = data.main.humidity;
        const country = data.sys.country;

       document.querySelector(".city").innerHTML = city;
       document.querySelector(".temp").innerHTML = `${temperature}°C`;
       document.querySelector(".icon").src =  `https://openweathermap.org/img/wn/${icon}@2x.png`;
       document.querySelector(".humidity").innerHTML = humidity;
       document.querySelector(".description").innerHTML = description;
       document.querySelector(".country").innerHTML = country;
       document.querySelector("input.input-location").value = '';
    })
     .catch(function(){
       showAlert('No Record of City','error404')
       document.querySelector("input.input-location").value = '';
     })
  }
  
    e.preventDefault();
    }
