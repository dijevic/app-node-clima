const axios = require('axios').default;
let token = 'pk.eyJ1IjoiZGlnaW5obyIsImEiOiJja2kwcm1pOTIyanNhMnluMzdweXhxZG0xIn0.gYbwjrVyHGU-04LA4brKdw';



const getPlaces = async(dir)=>{
    const encodeUrl = encodeURI(dir)

        const instance = axios.create({
           baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?`,
           params: {'access_token': token}
         });
       
        const resp = await instance.get();
        if(resp.data.features.length === 0){
            throw new Error(`el lugar ${dir} no existe en nuestra base de datos lo sentimos`)
        }
        console.log(resp.data.features[0].place_name);
        let direccion = resp.data.features[0].place_name
        let lat = resp.data.features[0].geometry.coordinates[0];
        let lng = resp.data.features[0].geometry.coordinates[1];
        return {
            lat,
            direccion,
            lng
            
        }
};

module.exports = {
    getPlaces
}

// resp.data.features[0].geometry.coordinates