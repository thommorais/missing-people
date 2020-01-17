export const Types = {
  GET: 'people/GET',
  GET_ONE_PERSON: 'people/GET_ONE_PERSON',
  SET_PERSON: 'people/SET_PERSON',
  SET_DATALOCATION: 'people/SET_DATALOCATION',
  LOADING: 'people/LOADING',
  FAIL: 'people/FAIL',
  SEARCH: 'people/SEARCH',
  FAIL_SEARCH: 'people/FAIL_SEARCH',
}

export const Creators = {

  failSearch: () => ({
    type: Types.FAIL_SEARCH,
    payload: {
      search: [],
      failSearch: true
    },
  }),

  fail: () => ({
    type: Types.FAIL,
    payload: {
      loaded: false,
      loading: false,
    },
  }),

  get: people => ({
    type: Types.GET,
    payload: {
      people,
      person: null,
      loaded: true,
      loading: false,
    },
  }),

  setPerson: person => ({
    type: Types.SET_PERSON,
    payload: {
      person,
      loaded: true,
      loading: false,
    },
  }),

  setDataLocation: dataLocation => ({
    type: Types.SET_DATALOCATION,
    payload: {
      dataLocation
    },
  }),

  search: search => ({
    type: Types.SEARCH,
    payload: {
      search,
      failSearch: false
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

const initialState = {
  loaded: false,
  loading: true,
  failSearch: false,
  person: null,
  people : [],
  search: [],
  dataLocation: ''
}

function missingPeople(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case Types.LOADING:
    case Types.SEARCH:
    case Types.FAIL:
    case Types.GET:
    case Types.FAIL_SEARCH:
    case Types.SET_DATALOCATION:
    case Types.SET_PERSON: {
      return { ...state, ...payload}
    }

    default:
      return state
  }
}

export default missingPeople
