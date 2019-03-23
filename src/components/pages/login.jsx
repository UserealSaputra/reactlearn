import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/userAction';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logIn({
            email: this.state.email,
            password: this.state.password
        })
    }
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"
                            onChange={(e) => {
                                this.setState({
                                    email: e.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
                            onChange={(e) => {
                                this.setState({
                                    password: e.target.value
                                })
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
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
export default connect(null, { logIn })(Login)