import {
  START_LOADING, STOP_LOADING,
  INCREMENT, DECREMENT, 
  GET_VIDEO_PENDING, GET_VIDEO_COMPLETED, GET_VIDEO_FAILED
} from '../common';


export const startLoading = () => {
  return { type: START_LOADING };
}

export const stopLoading = () => {
  return { type: STOP_LOADING };
}

export const doIncrement = () => {
  return { type: INCREMENT };
}

export const doDecrement = () => {
  return { type: DECREMENT };
}

export const getVideos = () => {
  return {
    type: GET_VIDEO_PENDING,
    payload: []
  }
}