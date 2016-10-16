import { GET_STEP, SET_STEP } from '../actions/types'

export default function (state = { stepNumber: 1 }, action) {
  switch (action.type) {
    case GET_STEP:
      console.log("get step");
      return { ...state, stepNumber: action.payload }
    case SET_STEP:
      console.log("set step");
      return { ...state, stepNumber: action.payload }
    default:
  }
  return state
}
