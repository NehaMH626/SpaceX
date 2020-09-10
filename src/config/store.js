import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import literals from "../constants/stringLiterals";
import AdminReducer from "../containers/AdminPage/AdminReducer";
import GuestReducer from "../containers/GuestPage/GuestReducer";

const middleware = [thunk];

var combinedReducers = combineReducers({
  AdminReducer: AdminReducer,
  GuestReducer: GuestReducer,
  ...{ stringLiterals: handleActions({}, literals) },
});
const initialState = {};
const store = createStore(
  combinedReducers,
  initialState,
  compose(applyMiddleware(...middleware))
);
export default store;
