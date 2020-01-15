export const Types = {
  GET: 'transactionHistory/GET',
  SEARCH: 'transactionHistory/SEARCH',
  LOADING: 'transactionHistory/LOADING',
  FAIL: 'transactionHistory/FAIL',
}

export const Creators = {
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
      loaded: true,
      loading: false,
    },
  }),
  search: search => ({
    type: Types.SEARCH,
    payload: {
      search,
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
  loading: false,
  people : [],
  search: []
}

function missingPeople(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case Types.GET: {
      return { ...state, ...payload }
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

export default missingPeople
