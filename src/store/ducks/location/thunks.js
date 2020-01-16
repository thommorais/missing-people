import { Creators } from './index'
import {fetchLocation, fetchListOfCountries} from '../../../services'

const {
  get,
  loading,
  getCountriesList,
  setCountry
} = Creators


export function getLocation(lat, long) {
  return async (dispatch) => {
    dispatch(loading())
    const address = await fetchLocation(lat, long).then(e => e)
    const latLong = {...address.results[0].components}
    localStorage.setItem('address', JSON.stringify(address.results[0].components));
    dispatch(get(latLong))
  }
}

export function getCountries() {
  return async (dispatch) => {
    dispatch(loading())
    const countries = await fetchListOfCountries().then(e => e)
    dispatch(getCountriesList(countries))
  }
}

export function chooseCountry(country) {
  return (dispatch) => {
    dispatch(setCountry(country))
  }
}

getCountries()