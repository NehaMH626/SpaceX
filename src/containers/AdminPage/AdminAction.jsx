import {
  GET_ERROR,
  ALL_HISTORY_EVENTS,
  ONE_HISTORY_EVENT,
  COMPANY,
  ALL_MISSIONS,
  ONE_MISSION,
  LOADER,
} from "../../constants/type";
import axios from "axios";
import api_contants from "../../constants/api";

export const allEvents = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.History_api.allEvents_API)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: ALL_HISTORY_EVENTS,
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
export const oneEvent = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.History_api.oneEvent_API)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: ONE_HISTORY_EVENT,
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
export const companyDetails = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Company_api.company_API)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: COMPANY,
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
export const allMissions = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Mission_api.allMission_API)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: ALL_MISSIONS,
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

export const oneMission = () => (dispatch) => {
  dispatch({
    type: LOADER,
    payload: true,
  });
  axios
    .get(api_contants.Mission_api.oneMission_API)
    .then((res) => {
      if (res.status) {
        dispatch({
          type: ONE_MISSION,
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
