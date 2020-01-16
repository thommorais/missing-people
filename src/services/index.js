const API = 'https://api.lab.dns-cloud.net/users'
const openCageApikey = '47ef20bdba604effbbc04ac1bfe75508'
var openCageAPI = 'https://api.opencagedata.com/geocode/v1/json'

export function getPeople(){
 return fetch(API).then(res => res.json())
}

export function getLocation(lat, long){
  const URL = `${openCageAPI}?key=${openCageApikey}&q=${encodeURIComponent(`${lat},${long}`)}&pretty=1&no_annotations=1`
  return fetch(URL).then(res => res.json())
}



