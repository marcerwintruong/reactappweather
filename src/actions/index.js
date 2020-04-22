export const FETCHING_FORECASTS = "FETCHING_FORECASTS";
export const FETCH_FORECASTS_SUCCESS = "FETCH_FORECASTS_SUCCESS";
export const FETCH_FORECASTS_ERROR = "FETCH_FORECASTS_ERROR";

function fetchingForecasts() {
  return {
    type: FETCHING_FORECASTS
  };
}

function fetchForecastsSuccess(forecasts) {
  return {
    type: FETCH_FORECASTS_SUCCESS,
    forecasts
  };
}

function fetchForecastsError(error) {
  return {
    type: FETCH_FORECASTS_ERROR,
    error
  };
}

export const fetchForecasts = location => dispatch => {
  dispatch(fetchingForecasts());
  fetch(
    `https://jakobweather.herokuapp.com/jakobweather-dev?address=${location}`
  )
    .then(res => res.json())
    .then(forecasts => dispatch(fetchForecastsSuccess(forecasts)))
    .catch(error => {
      dispatch(fetchForecastsError(error));
    });
};
