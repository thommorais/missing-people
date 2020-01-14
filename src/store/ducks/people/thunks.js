import { Creators as people } from './index'

import mock from './mock'

const {
  get,
  search
} = people


export function setSearch(string){
  return (dispatch, getState) => {
    const {missingPeople} = getState()

    if (!string) {
      return dispatch(search([]))
    }

    const searched = missingPeople.people.filter(
      ({fullName}) => (fullName.toLowerCase().indexOf(string.toLowerCase() || '') >= 0)
    )

    dispatch(search(searched))
  }
}


export function fetchMissingPeople() {

  const formatedDate = mock.map(({description, height, gender, age, ...rest} ) => ({
    ...rest,
    id: `${rest.name}-${rest.lastName}`,
    description: {
      description,
      height,
      gender,
      age,
      picture: `https://i.pravatar.cc/340?img=${rest.index}`
    }
  }))

  return (dispatch, getState) => {
    // const state = getState()
    setTimeout(() => dispatch(get(formatedDate)), 1000)
  }
}
