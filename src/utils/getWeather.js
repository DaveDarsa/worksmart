export const getWeather = async (place) => {
  const apikey = "Ncv3Cd8WB4lovhpkVj13zZ6uJRibtDIN";
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apikey}&q=${place}`;
  var res = await fetch(base + query);
  const data = await res.json();
  var key = typeof data[0] !== "undefined" ? data[0].Key : "328328";

  async function fetchweather() {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${key}?apikey=${apikey}`;

    var response = await fetch(base + query);
    const data = await response.json();
    return data[0].Temperature.Imperial.Value;
  }
  return fetchweather();
};
