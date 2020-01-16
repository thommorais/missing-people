export const Types = {
  GET: 'transactionHistory/GET',
  LOADING: 'transactionHistory/LOADING',
  FAIL: 'transactionHistory/FAIL',
  SEARCH: 'transactionHistory/SEARCH',
  FAIL_SEARCH: 'transactionHistory/FAIL_SEARCH',
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
      loaded: true,
      loading: false,
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
  loading: false,
  failSearch: false,
  people : [],
  search: []
}

function missingPeople(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case Types.GET: {
      return { ...state, ...payload }
    }

    case Types.LOADING: {
      return { ...state, ...payload}
    }

    case Types.FAIL: {
      return { ...state, ...payload}
    }

    case Types.SEARCH: {
      return { ...state, ...payload}
    }

    case Types.FAIL_SEARCH: {
      return { ...state, ...payload}
    }


    default:
      return state
  }
}

export default missingPeople
