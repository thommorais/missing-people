export const Types = {
  GET: 'location/GET',
  LOADING: 'location/LOADING',
  FAIL: 'location/FAIL',
  GET_COUNTRIES: 'location/GET_COUNTRIES',
  SET_COUNTRY: 'location/SET_COUNTRY',
}

export const Creators = {
  fail: () => ({
    type: Types.FAIL,
    payload: {
      loaded: false,
      loading: false,
    },
  }),
  get: location => ({
    type: Types.GET,
    payload: {
      location,
      loaded: true,
      loading: false,
    },
  }),
  getCountriesList: countries => ({
    type: Types.GET_COUNTRIES,
    payload: {
      countries
    },
  }),
  setCountry: country => ({
    type: Types.SET_COUNTRY,
    payload: {
      country
    },
  }),
  loading: () => ({
    type: Types.LOADING,
    payload: {
      loading: true,
      loaded: false,
    },
  }),
}


const country = localStorage.getItem('country')

const initialState = {
  loaded: false,
  loading: false,
  countries: [],
  country: country ? country : 'United States'
}

function location(state = initialState, action) {
  const { payload, type } = action

  switch (type) {

    case Types.GET: {
      return { ...state, locations: {...state.locations, ...payload.location} }
    }

    case Types.SEARCH:
    case Types.GET_COUNTRIES:
    case Types.SET_COUNTRY:
    case Types.LOADING:
    case Types.FAIL: {
      return { ...state, ...payload}
    }

    default:
      return state
  }
}

export default location
