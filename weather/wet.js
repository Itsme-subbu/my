const city=document.getElementById("input");
const API='d7759f2b6541abd11d8da4f000a87516';

function get(){
	
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${API}`)
	.then(response=>response.json())
	.then(json=>{
		console.log(json);
		const degree=document.getElementById("degrees");
		const cloud=document.getElementById("cloud");
		const textHumidity=document.getElementById("text");
		const textWind=document.getElementById("texts");
		degree.innerHTML=`${parseInt(json.main.temp)}<span>°<sup>c</sup></span>`;
		cloud.innerHTML=json.weather[0].description;
		textHumidity.innerHTML=`${json.main.humidity}%`;
		textWind.innerHTML=`${json.wind.speed}km/h`;
	})
		
	
}
	
	
	
    
