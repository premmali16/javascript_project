const search=document.querySelector("#search")
const inputbox=document.querySelector(".inputbox")
const weather_image=document.querySelector(".weather-image")
const temp=document.querySelector(".temp")
const descrption=document.querySelector(".descrpition")
const humidity=document.querySelector("#humidity")
const wind_speed=document.querySelector("#wind-speed")
const lo=document.querySelector(".location")
const weather_body=document.querySelector(".weather-body")


 search.addEventListener('click',()=>{
  checkweather(inputbox.value)
 })
  async function checkweather(city){
const api_key= "001b0c6aa8be48f8b7a161806251006";
const url=`http://api.weatherapi.com/v1/current.json?key=001b0c6aa8be48f8b7a161806251006&q=${city}&aqi=yes`;
 const weather_data= await fetch(`${url}`).then(response=> response.json());
 if(weather_data.error?.code == 1006){
   lo.style.display ="flex";
   weather_body.style.display ="none";
  console.log("error");
  return;
  
 }
    lo.style.display ="none";
 weather_body.style.display ="flex";
console.log(weather_data);
   temp.innerHTML=`${weather_data.current.temp_c}°C`
   descrption.innerHTML=`${weather_data.current.condition.text}`
   humidity.innerHTML=`${weather_data.current.humidity}%`
   wind_speed.innerHTML=`${weather_data.current.wind_kph}km\h`
 const a=weather_data.current.condition.text;
   console.log(a);
   
  if(a.toLowerCase() === "clear" || a.toLowerCase() === "sunny"){
    weather_image.src = "./image/clear.png";
  }
  else if (a.toLowerCase().includes("mist") || a.toLowerCase().includes("fog")){
    weather_image.src = "./image/mist.png";
  }
  else if (a.toLowerCase().includes("rain") || a.toLowerCase().includes("drizzle")){
    weather_image.src = "./image/rain.png";
  }
  else if (a.toLowerCase().includes("snow") || a.toLowerCase().includes("sleet")){
    weather_image.src = "./image/snow.png";
  }
  else if (a.toLowerCase().includes("cloud") || a.toLowerCase().includes("overcast")){
    weather_image.src = "./image/cloud.png";
  }
  else if (a.toLowerCase().includes("thunder") || a.toLowerCase().includes("storm")){
    weather_image.src = "./image/storm.png";
  }
  else {
    weather_image.src = "./image/cloud.png"; // Default to cloud image if condition not matched
  }
 }