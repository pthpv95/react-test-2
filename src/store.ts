import { configureStore, createStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSagas } from "./sagas/rootSaga";
import showsReducer from "./slices/showsSlice";

const reducers = combineReducers({
  shows: showsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: reducers,
  middleware: [...middlewares],
});
sagaMiddleware.run(watcherSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
