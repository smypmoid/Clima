const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    } else {
        let location = resp.data.results[0];
        return {
            direccion: location.formatted_address,
            lng: location.geometry.location.lng,
            lat: location.geometry.location.lat
        };
    };
};

module.exports = {
    getLugarLatLng
}