import axios from 'axios'
import { GET_STEP, SET_STEP, SAVE_FORM, FILE_UPLOAD } from './types'

const saveForm = function (data, step) {
  return function (dispatch) {
    dispatch({ type: SAVE_FORM, name: `form${step}`, payload: data })
  }
}
const uploadedFile = function (file) {
  console.log('action', file)
  return function (dispatch) {
    dispatch({ type: FILE_UPLOAD, payload: file })
  }
}

const setStep = function (step) {
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
  uploadedFile,
}
