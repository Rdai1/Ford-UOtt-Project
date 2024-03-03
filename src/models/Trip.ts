// start location and end location
// plan route 
import dotenv from 'dotenv';
dotenv.config();

const apikey = process.env.GEO_KEY
console.log('API Key:', apikey);

class Trip {
    startLocation: string;
    endLocation: string;

    constructor(start: string, end: string){
        this.startLocation = start;
        this.endLocation = end;
    }

    public async calculateRoute(){
        //some code here

        var requestOptions = {
            method: 'GET',
          };
          
        var startInfo = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${this.startLocation}&apiKey=${process.env.GEO_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        var endInfo = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${this.endLocation}&apiKey=${process.env.GEO_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        var requestOptions2 = {
                method: 'GET',
              };
        return fetch(`https://api.geoapify.com/v1/routing?waypoints=${startInfo.results[0].lat}${startInfo.results[0].lon}|${endInfo.results[0].lat}${endInfo.results[0].lon}&mode=drive&apiKey=06750946a4dd424faf90dc6bc8507718`, requestOptions2)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    
    public getChargingStations(){
        //TODO::
        var requestOptions = {
            method: 'GET',
        };

        return fetch(`https://api.geoapify.com/v2/places?categories=service.vehicle.charging_station&filter=rect:${startInfo.results[0].lat}${startInfo.results[0].lon}|${endInfo.results[0].lat}${endInfo.results[0].lon}&limit=5&apiKey=YOUR_API_KEY
        `, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

}

let trip = new Trip("1125 Colonel By Dr, Ottawa, ON K1S 5B6","75 Laurier Ave E, Ottawa, ON K1N 6N5");
console.log(trip.calculateRoute());