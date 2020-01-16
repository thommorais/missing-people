import { combineReducers } from 'redux'

import missingPeople from './people'
import location from './location'

export default combineReducers({
  missingPeople,
  location
})
