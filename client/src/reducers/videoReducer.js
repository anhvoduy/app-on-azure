import {    
    INCREMENT, DECREMENT,
    START_LOADING, STOP_LOADING,
    GET_VIDEO_PENDING, GET_VIDEO_COMPLETED, GET_VIDEO_FAILED
} from '../common';

export const INITIAL_STATE = {
    count: 0,
    isLoading: false,    
    videoList: [],    
    videoDetail: {}
};

const videoReducer = function(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
    case START_LOADING:
        return {
            ...state,
            isLoading: true
        }
    case STOP_LOADING:
        return {
            ...state,
            isLoading: false
        }    
    case GET_VIDEO_PENDING:
        return {
            ...state, 
            videoList: []
        };
    case GET_VIDEO_COMPLETED:
        return {
            ...state,
            videoList: payload.videoList
        };
    case GET_VIDEO_FAILED:
        return {
            ...state,
            videoList: payload.err.message
        }       
    case INCREMENT:
        return {
            ...state,
            count: state.count + 1
        }
    case DECREMENT:
        return {
            ...state,
            count: state.count - 1
        }
    default:
        return state;
    }
}

export default videoReducer;