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

const initialState = {
  errResponse: [],
  allLaunchesResponse: [],
  upcomingLaunchesResponse: [],
  pastLaunchesResponse: [],
  latestLaunchesResponse: {},
  nextLaunchesResponse: [],
  oneLaunchResponse: [],
  loader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        errResponse: action.payload,
      };
    case ALL_LAUNCHES:
      return {
        ...state,
        allLaunchesResponse: action.payload,
      };
    case ONE_LAUNCHE:
      return {
        ...state,
        oneLaunchResponse: action.payload,
      };
    case UPCOMING_LAUNCHES:
      return {
        ...state,
        upcomingLaunchesResponse: action.payload,
      };
    case NEXT_LAUNCHES:
      return {
        ...state,
        nextLaunchesResponse: action.payload,
      };
    case PAST_LAUNCHES:
      return {
        ...state,
        pastLaunchesResponse: action.payload,
      };
    case LATEST_LAUNCHES:
      return {
        ...state,
        latestLaunchesResponse: action.payload,
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
