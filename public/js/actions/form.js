import axios from 'axios'
import { GET_STEP, SET_STEP, SAVE_FORM } from './types'

const saveForm = function (data, step) {
  console.log(data)
  return function (dispatch) {
    dispatch({ type: SAVE_FORM, name: `form${step}`, payload: data })
  }
}

const setStep = function (step) {
  console.log('set step to:', step)
  return function (dispatch) {
    dispatch({ type: SET_STEP, payload: step })
  }
}
const getStep = function () {
  return function (dispatch) {
    dispatch({ type: GET_STEP })
  }
}

module.exports = {
  saveForm,
  setStep,
  getStep,
}
