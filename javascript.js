var apiKey = 'e6deb31fa7094f10faf5c62ec2714065';
var head = document.querySelector('.heading');
var weather = document.querySelector('.weather');
var cloudy = document.querySelector('.cloudy');
var humidity = document.querySelector('.humidity');
var windSpeed= document.querySelector('.wind-speed');
var search = document.querySelector('.search-btn');
var searchVal = document.querySelector('.search-bar');
var iconImg = document.querySelector('.icon');

search.addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+searchVal.value+'&appid='+apiKey)
    .then(res=>res.json())
    .then((data)=>{
     var cityName = data['name'];
     var tempValue = data['main']['temp'];
     var desc = data['weather'][0]['description'];
     var humid = data['main']['humidity'];   
     var windSp = data['wind']['speed'];
     var iconDis = data['weather'][0]['icon']

     head.innerHTML = "Weather In: "+cityName;
     weather.innerHTML = "Temperature: "+tempValue+"°C";
     cloudy.innerHTML = "Description: "+desc;
     humidity.innerHTML = "Humidity: "+humid;
     windSpeed.innerHTML = "Wind-Speed: "+windSp;
     iconImg.src = "https://openweathermap.org/img/wn/"+iconDis+"@2x.png";
    })
    .catch((e)=>{
        console.log("Wrong City!!");
    })
})






