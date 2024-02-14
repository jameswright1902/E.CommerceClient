import {configureStore} from "@reduxjs/toolkit"
import { api } from "./redux/api/api";
import setsReducer from './redux/slices/setsSlice'
import authReducer from "./redux/slices/authSlice.js";
// lines 3 and 4 need to be edited to match up with our project

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    sets:setsReducer,
    auth:authReducer
// need to change sets and auth reducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;