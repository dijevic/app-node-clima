const axios = require('axios').default

const weather = async (latitud,long)=>{

   const resp = await 
axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${long}&appid=2b313589e8d7b36c0efc0e97606430e8&units=metric`)
    

     return resp.data.main.temp
}

module.exports = {
    weather
}