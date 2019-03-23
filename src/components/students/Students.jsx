import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import { Row, Layout } from 'antd';
import { connect } from 'react-redux';
import { GET_STUDENT, GET_STUDENTS } from '../../store/actions/type';
import { getStudents } from '../../store/actions/studentAction';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // students: [
            //     {
            //         id: 1,
            //         name: 'Januar',
            //         email: 'month1@gmail.com',
            //         phone: 1010101
            //     },
            //     {
            //         id: 2,
            //         name: 'Febri',
            //         email: 'month2@gmail.com',
            //         phone: 2020202
            //     },
            //     {
            //         id: 3,
            //         name: 'Marti',
            //         email: 'month3@gmail.com',
            //         phone: 3030303
            //     },
            //     {
            //         id: 4,
            //         name: 'April',
            //         email: 'month4@gmail.com',
            //         phone: 4040404
            //     },
            //     {
            //         id: 5,
            //         name: 'May',
            //         email: 'month5@gmail.com',
            //         phone: 5050505
            //     },
            //     {
            //         id: 6,
            //         name: 'Juno',
            //         email: 'month6@gmail.com',
            //         phone: 6060606
            //     }
            // ]
        }
    }
    // deleteCard = (id) => {
    //     console.log(id);
    //     const { students } = Consumer.value;
    //     const newar = students.filter(student => student.id !== id);
    //     this.setState({
    //         students: newar
    //     })
    // }
    componentDidMount() {
        this.props.getStudents()
        console.log('Reloaded')
    }
    render() {
        const { students } = this.props
        return (
            <React.Fragment>
                <Layout>
                    <Row type="flex" justify="start">
                        {
                            students.map((data) =>
                                < Student
                                    key={data.id}
                                    student={data}
                                // deleteCard={this.deleteCard.bind(this, data.id)}
                                // name={data.name}
                                // email={data.email}
                                // phone={data.phone}
                                />
                            )
                        }
                    </Row>
                </Layout>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    students: state.student.students
})

export default connect(mapStateToProps, { getStudents })(Students)