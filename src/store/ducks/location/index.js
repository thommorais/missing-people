export const Types = {
  GET: 'location/GET',
  LOADING: 'location/LOADING',
  FAIL: 'location/FAIL',
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
  loading: () => ({
    type: Types.LOADING,
    payload: {
      loading: true,
      loaded: false,
    },
  }),
}

const address = localStorage.getItem('address')

const initialState = {
  loaded: address ? true : false,
  loading: false,
  locations: address ? JSON.parse(address) : ''
}

function location(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case Types.GET: {
      return { ...state, locations: {...state.locations, ...payload.location} }
    }

    case Types.SEARCH: {
      return { ...state, ...payload}
    }

    case Types.LOADING: {
      return { ...state, ...payload}
    }

    case Types.FAIL: {
      return { ...state, ...payload}
    }

    default:
      return state
  }
}

export default location
