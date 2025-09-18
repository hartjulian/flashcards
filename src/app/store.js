import { configureStore } from "@reduxjs/toolkit";
import topicsSliceReducer from "../features/topics/topicsSlice";
import quizzesSlicereducer from "../features/quizzes/quizzesSlice";
// import reducers

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSlicereducer
  },
});
