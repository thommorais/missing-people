import { Creators } from './index'
import {fetchPeople, fetchPeopleForCountry, fetchPerson} from '../../../services'

export const {
  get,
  search,
  loading,
  failSearch,
  setDataLocation,
  getOnePerson,
  setPerson
} = Creators


function filterDataPeople(people){
   return people.map(({description, height, gender, age, ...rest} ) => ({
      ...rest,
      id: `${rest.first_name}-${rest.last_name}`,
      fullName: `${rest.first_name} ${rest.last_name}`,
      description: {
        description,
        height,
        gender,
        age,
        picture: `https://i.pravatar.cc/360?u=${rest.umid}`
      }
    }))
}

export function setSearch(string){
  return (dispatch, getState) => {
    const {missingPeople} = getState()

    if (!string) {
      return dispatch(search([]))
    }

    const searched = missingPeople.people.filter(
      ({fullName}) => (fullName.toLowerCase().indexOf(string.toLowerCase() || '') >= 0)
    )

    if(string && !searched.length){
      return dispatch(failSearch())
    }

    return dispatch(search(searched))
  }
}

export function getMissingPeople() {
  console.log('getting all the people')
  return async (dispatch) => {
    dispatch(loading())
    const people = await fetchPeople().then(e => e)
    const formatedData = filterDataPeople(people)
    dispatch(get(formatedData))
  }
}

export function getPeopleForCountry(country){
  console.log('getting people for country', country)
  return async (dispatch) => {
    dispatch(loading())
    const {data, headers} = await fetchPeopleForCountry(country)
    dispatch(setDataLocation(headers['x-powered-by']))
    const formatedData = filterDataPeople(data)
    dispatch(get(formatedData))
  }
}

export function getPerson(){

  const uid = localStorage.getItem('uid')

  return async (dispatch) => {
    dispatch(loading())

    if(!uid){
       return dispatch(setPerson(null))
    }

    const {data, headers} = await fetchPerson(uid)
    dispatch(setDataLocation(headers['x-powered-by']))
    const [formatedData] = filterDataPeople(data)
    return dispatch(setPerson(formatedData))
  }
}

export function setCurrentPerson(person){
  return async (dispatch) => {
    if(person){
      localStorage.setItem('uid', person.uid)
      dispatch(setPerson(person))
    }
  }
}