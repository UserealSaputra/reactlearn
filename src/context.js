import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_STUDENT': {
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }
        }
        case 'ADD_STUDENT': {
            const { students } = state
            students.push({
                ...action, id: students.slice(-1)[0].id + 1,
            })
            return { ...state, students }
        }
        default:
            return state
    }
}
export class Provider extends Component {
    state = {
        students: [
            {
                id: 1,
                name: 'Januar',
                email: 'month1@gmail.com',
                phone: 1010101
            },
            {
                id: 2,
                name: 'Febri',
                email: 'month2@gmail.com',
                phone: 2020202
            },
            {
                id: 3,
                name: 'Marti',
                email: 'month3@gmail.com',
                phone: 3030303
            },
            {
                id: 4,
                name: 'April',
                email: 'month4@gmail.com',
                phone: 4040404
            },
            {
                id: 5,
                name: 'Maya',
                email: 'month5@gmail.com',
                phone: 5050505
            },
            {
                id: 6,
                name: 'Juna',
                email: 'month6@gmail.com',
                phone: 6060606
            },
            {
                id: 7,
                name: 'Julian',
                email: 'month7@gmail.com',
                phone: 7070707
            },
            {
                id: 8,
                name: 'Augustav',
                email: 'month8@gmail.com',
                phone: 8080808
            },
            {
                id: 9,
                name: 'Septian',
                email: 'month9@gmail.com',
                phone: 9090909
            },
            {
                id: 10,
                name: 'Octavius',
                email: 'month10@gmail.com',
                phone: 10101010
            },
            {
                id: 11,
                name: 'Nova',
                email: 'month11@gmail.com',
                phone: 11111111
            },
            {
                id: 12,
                name: 'Desy',
                email: 'month12@gmail.com',
                phone: 12121212
            },
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

