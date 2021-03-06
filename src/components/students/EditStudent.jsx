import React, { Component } from 'react';
import TextInputGroup from '../../components/layout/TextInputGroup';
import { Row, Col } from 'antd';
import uuid from 'uuid';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateStudent } from '../../store/actions/studentAction';
class EditStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }
    async componentDidMount() {
        if (this.props.isAuthenticated === false) {
            this.props.history.push("/student")
        }
        const { id } = this.props.match.params;
        console.log(id)
        const res = await axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(res.data)
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
        })
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const { name, email, phone, errors } = this.state;
        if (name === '') {
            this.setState({ errors: { name: 'Name is Required' } })
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is Required' } })
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is Required' } })
            return;
        }
        const { id } = this.props.match.params;
        console.log(id)
        const updateStudent = {
            name,
            email,
            phone,
            // errors,
        }
        this.props.updateStudent(id, updateStudent);
        // const res = await axios
        //     .patch(`https://jsonplaceholder.typicode.com/users/${id}`, updateStudent)
        // console.log('data : ')
        // console.log(res.data)
        // dispatch({ type: 'EDIT_STUDENT', payload: res.data })
        // axios('https://jsonplaceholder.typicode.com/users',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify({ newStudent }),
        //         headers: { "Content-type": "application/json; charset=UTF-8" }
        //     }
        // )
        //     .then(res => dispatch({ type: 'ADD_STUDENT', payload: newStudent }))
        this.setState({
            name: '',
            email: '',
            phone: '',
            // errors: ''
        })
        // redirect to home
        this.props.history.push('/student');
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <React.Fragment>
                <div style={{ width: '30%' }}>
                    <Row type="flex" align="middle">
                        <div>Edit Form</div>
                    </Row>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <TextInputGroup label='Name' name="name" type="text" placeholder="Enter name" value={name} onChange={this.onChange} error={errors.name} />
                        <TextInputGroup label='Email' name="email" type="text" placeholder="Enter email" value={email} onChange={this.onChange} error={errors.email} />
                        <TextInputGroup label='Phone' name="phone" type="text" placeholder="Enter phone number" value={phone} onChange={this.onChange} error={errors.phone} />
                        <Row type="flex" justify="end">
                            <input type="submit" value="edit" />
                        </Row>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
})

export default connect(mapStateToProps, { updateStudent })(EditStudents)