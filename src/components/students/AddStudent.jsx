import React, { Component } from 'react';
import TextInputGroup from '../../components/layout/TextInputGroup';
import { Row, Col } from 'antd';
import uuid from 'uuid';
import axios from 'axios';
import { connect } from 'react-redux';
import { addStudent } from '../../store/actions/studentAction';
import { getUser } from '../../store/actions/userAction';
class AddStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {},
            isAuthenticated: '',
        }
    }
    componentDidMount() {
        // this.props.getUser()
        const { isAuthenticated, token } = this.props
        if (isAuthenticated === false) {
            this.props.history.push("/student")
        }
        console.log(isAuthenticated)
        console.log(token)
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
        const newStudent = {
            name,
            email,
            phone,
            // errors,
        }
        const res = await axios
        this.props.addStudent(newStudent)
        //     .post('https://jsonplaceholder.typicode.com/users', newStudent)
        // dispatch({ type: 'ADD_STUDENT', payload: res.data })
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
        this.props.history.push('/');
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <React.Fragment>
                <div style={{ width: '30%' }}>
                    <Row type="flex" align="middle">
                        <div>Add Form</div>
                    </Row>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <TextInputGroup label='Name' name="name" type="text" placeholder="Enter name" value={name} onChange={this.onChange} error={errors.name} />
                        <TextInputGroup label='Email' name="email" type="text" placeholder="Enter email" value={email} onChange={this.onChange} error={errors.email} />
                        <TextInputGroup label='Phone' name="phone" type="text" placeholder="Enter phone number" value={phone} onChange={this.onChange} error={errors.phone} />
                        <Row type="flex" justify="end">
                            <input type="submit" value="submit" />
                        </Row>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token
})
// export default AddStudents;
export default connect(mapStateToProps, { addStudent })(AddStudents)