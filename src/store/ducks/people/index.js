export const Types = {
  GET: 'transactionHistory/GET',
  SEARCH: 'transactionHistory/SEARCH',
}

export const Creators = {
  get: people => ({
    type: Types.GET,
    payload: {
      people,
      loaded: true,
    },
  }),
  search: search => ({
    type: Types.SEARCH,
    payload: {
      search,
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

    default:
      return state
  }
}

export default missingPeople
