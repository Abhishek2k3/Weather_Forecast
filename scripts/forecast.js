// const key=N88pui6ERmnEgDiTtPndGCBkEogGN315;


// // function for api call of location
// const getCity = async (city)=>{
   
//    //creating api end point

//    const base='http://dataservice.accuweather.com/locations/v1/cities/search';

//    const query=`?apikey=${key}&q=${city}`;

//    //putting api end point in fetch
//    const response = await fetch(base + query);
//    const data = await response.json();
  
//    //returning the first related element from the object returned
//   return data[0];

// };

// // get weather information
// const getWeather = async (id) => {
  
//    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//    const query = `${id}?apikey=${key}`;
 
//    const response = await fetch(base + query);
//    const data = await response.json();
 
//    return data[0];
 
//  };