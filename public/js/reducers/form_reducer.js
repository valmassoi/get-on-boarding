import { GET_STEP, SET_STEP, SAVE_FORM, FILE_UPLOAD } from '../actions/types'

export default function (state = { stepNumber: 1, forms: {}, uploadedFile: {} }, action) {
  switch (action.type) {
    case GET_STEP:// DELETE?
      return { ...state, stepNumber: action.payload }
    case SET_STEP:
      return { ...state, stepNumber: action.payload }
    case SAVE_FORM:
      return { ...state, forms: { ...state.forms, [action.name]: action.payload } }
    case FILE_UPLOAD:
      return { ...state, uploadedFile: action.payload }
    default:
  }
  return state
}
