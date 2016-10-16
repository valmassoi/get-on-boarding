import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import formReducer from './form_reducer'

const rootReducer = combineReducers({
  form,
  step: formReducer,
})

export default rootReducer
