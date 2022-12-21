import { combineReducers } from "redux";
import subSubscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer"
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
  views: viewsReducer,
  subscribers: subSubscribersReducer,
  comments: commentsReducer

})

export default rootReducer