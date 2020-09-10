import {
  GET_ERROR,
  ALL_HISTORY_EVENTS,
  ONE_HISTORY_EVENT,
  COMPANY,
  ALL_MISSIONS,
  ONE_MISSION,
  LOADER,
} from "../../../src/constants/type";

const initialState = {
  allEventsResponse: [],
  oneEventResponse: [],
  companyDetailsResponse: [],
  oneMissionResponse: [],
  allMissionsResponse: [],
  loader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_HISTORY_EVENTS:
      return {
        ...action,
        allEventsResponse: action.payload,
      };
    case ONE_HISTORY_EVENT:
      return {
        ...action,
        oneEventResponse: action.payload,
      };
    case COMPANY:
      return {
        ...action,
        companyDetailsResponse: action.payload,
      };
    case ALL_MISSIONS:
      return {
        ...action,
        allMissionsResponse: action.payload,
      };
    case ONE_MISSION:
      return {
        ...action,
        oneMissionResponse: action.payload,
      };
    case GET_ERROR:
      return {
        ...state,
        errResponse: action.payload,
      };
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
}
