class WeatherAPI{
    constructor(){
        const api_key=process.env.API_KEY
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather"
        this.apikey = "api_key"
    }
    getWeatherInfo(cityname){
       return new Promise((resolve, reject)=>{
        fetch(`${this.baseURL}?q=${cityname}&appid=${this.apikey}&units=metric&lang=tr`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
       })
    }
}