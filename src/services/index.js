import axios from 'axios'
const APIBASE = 'https://api.lab.dns-cloud.net/users'
const openCageApikey = '47ef20bdba604effbbc04ac1bfe75508'
const openCageAPI = 'https://api.opencagedata.com/geocode/v1/json'
// https://api.lab.dns-cloud.net/users/profile/{uid}


export function fetchPeople(){
 return fetch(`${APIBASE}`).then(res => res.json())
}

export function fetchListOfCountries(){
  return axios.get(`${APIBASE}/countries`)
}

export function fetchPeopleForCountry(country){
  return axios.get(`${APIBASE}/filter/${country}`)
}


export function fetchPerson(uid){
  return axios.get(`${APIBASE}/profile/${uid}`)
}

export function fetchLocation(lat, long){
  const URL = `${openCageAPI}?key=${openCageApikey}&q=${encodeURIComponent(`${lat},${long}`)}&pretty=1&no_annotations=1`
  return fetch(URL).then(res => res.json())
}
