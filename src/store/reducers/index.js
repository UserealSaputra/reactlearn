import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import userReducer from './userReducer'

export default combineReducers({
    student: studentReducer,
    user: userReducer
})