import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT, GET_STUDENT } from './type'
import axios from 'axios';

export const getStudents = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: GET_STUDENTS,
        payload: res.data
    })
}
export const addStudent = (newData) => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newData)
    dispatch({
        type: ADD_STUDENT,
        payload: res.data
    })
}
export const deleteStudent = (id) => async dispatch => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_STUDENT,
        payload: id
    })
}
export const getStudentbyID = (id) => {
    return {
        type: GET_STUDENT,
        payload: id
    }
}
export const updateStudent = (id, newData) => async dispatch => {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, newData)
    dispatch({
        type: UPDATE_STUDENT,
        payload: res.data
    })
}
