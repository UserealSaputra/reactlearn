import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/userAction';
import { getStudents } from '../../store/actions/studentAction';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            disabled: true
        }
    }
    validThat = () => {
        const { email, password } = this.state
        if (email === "" || password === "") {
            this.setState({
                disabled: true
            })
        } else {
            this.setState({
                disabled: false
            })
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.logIn({
            email: this.state.email,
            password: this.state.password
        })
        await this.props.getStudents()
        this.props.history.push('/student')
        // window.location.href = "/student"
    }
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"
                            onChange={async (e) => {
                                await this.setState({
                                    email: e.target.value
                                });
                                this.validThat()
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
                            onChange={async (e) => {
                                await this.setState({
                                    password: e.target.value
                                });
                                this.validThat()
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <Button disabled={this.state.disabled} type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    </Form.Item>
                    <Form.Item>
                        or <Link to={'/register'}>register now!</Link>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}

// export default Login;
export default connect(null, { logIn, getStudents })(Login)