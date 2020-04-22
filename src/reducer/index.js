import {
  FETCHING_FORECASTS,
  FETCH_FORECASTS_SUCCESS,
  FETCH_FORECASTS_ERROR
} from "../actions";

const initialState = {
  pending: false,
  forecasts: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_FORECASTS:
      return {
        ...state,
        pending: true
      };

    case FETCH_FORECASTS_SUCCESS:
      return {
        ...state,
        pending: false,
        forecasts: action.forecasts
      };

    case FETCH_FORECASTS_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
