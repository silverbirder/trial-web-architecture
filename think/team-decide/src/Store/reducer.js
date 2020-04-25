import { combineReducers } from 'redux';
import tasksReducer from "./reducers/tasks";

const Reducer = combineReducers({
    tasksReducer
});

export default Reducer;