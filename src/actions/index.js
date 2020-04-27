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
    .then(res => {
      res.json().then(data => {
        if (data.error) {
          return dispatch(fetchForecastsError(data.error));
        }

        return dispatch(fetchForecastsSuccess(data));
      });
    })
    .catch(() =>
      dispatch(fetchForecastsError("Unable To Connect To Weather Service!"))
    );
};
