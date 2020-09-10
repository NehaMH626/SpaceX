import {
  GET_ERROR,
  ALL_LAUNCHES,
  UPCOMING_LAUNCHES,
  PAST_LAUNCHES,
  LATEST_LAUNCHES,
  NEXT_LAUNCHES,
  ONE_LAUNCHE,
  LOADER,
} from "../../constants/type";
import axios from "axios";
import api_contants from "../../constants/api";

export const allLaunch = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Launches_api.allLaunches_API)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: ALL_LAUNCHES,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    });
};

export const oneLaunch = () => (dispatch) => {
  axios
    .get(api_contants.Launches_api.oneLaunch_API)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: ONE_LAUNCHE,
          payload: res.data,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err,
      })
    );
};

export const upcomingLaunch = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Launches_api.upcomingLaunch_API)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: UPCOMING_LAUNCHES,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err,
      })
    );
};
export const pastLaunch = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Launches_api.pastLaunch_API)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: PAST_LAUNCHES,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err,
      })
    );
};

export const latestLaunch = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Launches_api.latestLaunch_API)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: LATEST_LAUNCHES,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err,
      })
    );
};
export const nextLaunch = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Launches_api.nextLaunch_API)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: NEXT_LAUNCHES,
          payload: res.data,
        });
        dispatch({
          type: LOADER,
          payload: false,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: GET_ERROR,
        payload: err,
      })
    );
};
