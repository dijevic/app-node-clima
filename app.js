let resp = require('./lugar/getPlace').getPlaces
let clima = require('./clima/weather.api').weather
let argv = require('yargs')
           .options({
               direccion :{
                   alias: 'd',
                   demand : true,
                   desc: 'direccion de tu ciudad'
               }
           }).argv;

// resp(argv.direccion).then((resp)=>{
//     console.log(resp)
    
// }).catch((err)=>{
//     console.log(err)
// })


const getInfo =async (direccion)=>{

    
    
    try {
        const dataCordenadas = await resp(direccion)
        const temperatura = await clima(dataCordenadas.lng,dataCordenadas.lat)
        return (`el clima de ${dataCordenadas.direccion} es de ${temperatura} grados centigrados`)
    } catch (error) {
        console.log(`algo salio mal, la direccion ${direccion} no existe o no se puede verificar su clima`)
    }
    



}

getInfo(argv.direccion).then(console.log).catch(console.log)
