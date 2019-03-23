import { LOG_IN, LOG_OUT, GET_USER } from './type'
import axios from 'axios';

export const logIn = (logData) => async dispatch => {
    console.log(logData)
    const ex_link = "https://cors-anywhere.herokuapp.com/";
    const res = await axios.post(`${ex_link}https://node-student.herokuapp.com/api/student/signin`, logData)
    console.log(res.data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('logged', true)
    window.location.href = '/student'
    await dispatch({
        type: LOG_IN,
        payload: res.data
    })
}
export const logOut = () => async dispatch => {
    // const res = await axios.post(`https://node-student.herokuapp.com/api/student/signin`, )
    localStorage.setItem('token', '')
    localStorage.setItem('logged', false)
    window.location.href = '/'
    dispatch({
        type: LOG_OUT,
    })
}
export const getUser = () => async dispatch => {
    const ex_link = "https://cors-anywhere.herokuapp.com/";
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    const res = await axios.get(`${ex_link}https://node-student.herokuapp.com/api/secure/student/me`)
    console.log(res.data)
    dispatch({
        type: GET_USER,
    })
}
