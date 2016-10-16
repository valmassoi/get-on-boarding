import axios from 'axios'
import { GET_STEP, SET_STEP } from './types'

const saveForm = function (data) {
  console.log("saving form");
  return function (dispatch) {
    // dispatch({ type: })
  }
}

const setStep = function (step) {
  console.log("set step to:", step);
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
