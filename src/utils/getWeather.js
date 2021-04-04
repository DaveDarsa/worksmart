export const getWeather = async (place) => {
  const apikey = "KT5zbAfw8vy1MVsmNnBHnICxMpsJFvlq";
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apikey}&q=${place}`;
  var res = await fetch(base + query);
  const data = await res.json();
  var key = data[0].Key;

  async function fetchweather() {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${key}?apikey=${apikey}`;

    var response = await fetch(base + query);
    const data = await response.json();
    return data[0].Temperature.Imperial.Value;
  }
  return fetchweather();
};
