// start location and end location
// plan route 
interface GeoapifyResponse {
    features: {
      properties: {
        lat: number;
        lon: number;
      };
    }[];
}

interface Route {
    features: {
        properties: {
            units: string;
            distance: number;
            time: number;
            legs: {
                distance: number;
                time: number;
                steps: {
                    // Adjust the types as needed based on the actual structure of your steps
                    instruction: {
                        text: string;
                    };
                    // Add other properties if present in the actual data
                }[];
            }[];
        }
    }[];
}

class Trip {
    startLocation: string;
    endLocation: string;

    constructor(start: string, end: string){
        this.startLocation = start;
        this.endLocation = end;
    }

    async getCord(location: string) {
        const response =  await fetch(`https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=06750946a4dd424faf90dc6bc8507718`, requestOptions)
        
        const result = await response.json();
    
        return result;
    }
    
    async calculateRoute(startLocationIn: string, endLocationIn: string){
    
        const startLocation = await this.getCord(startLocationIn) as GeoapifyResponse;
        const endLocation = await this.getCord(endLocationIn) as GeoapifyResponse;
    
        console.log("start location: " + startLocation.features[0].properties.lat);
    
        const response = await fetch(`https://api.geoapify.com/v1/routing?waypoints=${startLocation.features[0].properties.lat},${startLocation.features[0].properties.lon}|${endLocation.features[0].properties.lat},${endLocation.features[0].properties.lon}&mode=drive&apiKey=06750946a4dd424faf90dc6bc8507718`, requestOptions);
    
        const route = await response.json() as Route;
    
        console.log(route.features[0].properties.legs[0].steps.forEach(step => {
            console.log(step.instruction.text);
        }));
        return route;
        
    }
    
    async getChargingStations(startLocationLat: string, startLocationLon: string, endLocationLat: string, endLocationLon: string){
        var requestOptions = {
            method: 'GET',
        };

        const response = fetch(`https://api.geoapify.com/v2/places?categories=service.vehicle.charging_station&filter=rect:${startLocationLat},${startLocationLon}|${endLocationLat},${endLocationLon}&limit=5&apiKey=06750946a4dd424faf90dc6bc8507718`, requestOptions);

        const stations = (await response).json();

        return stations;
    }

}

let trip = new Trip("1125 Colonel By Dr, Ottawa, ON K1S 5B6","75 Laurier Ave E, Ottawa, ON K1N 6N5");
console.log(trip.calculateRoute());