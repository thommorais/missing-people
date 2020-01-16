import { Creators } from './index'
import {fetchPeople, fetchPeopleForCountry} from '../../../services'

const {
  get,
  search,
  loading,
  failSearch
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
  return async (dispatch) => {
    dispatch(loading())
    const people = await fetchPeople().then(e => e)
    const formatedDate = filterDataPeople(people)
    dispatch(get(formatedDate))
  }
}

export function getPeopleForCountry(country){
  return async (dispatch) => {
    dispatch(loading())
    const people = await fetchPeopleForCountry(country)
    const formatedDate = filterDataPeople(people)
    dispatch(get(formatedDate))
  }
}


