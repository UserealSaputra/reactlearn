import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/userAction';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];


class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            email: "",
            password: "",
            name: "",
            handphone: "",
            address: "",
            disabled: true,
        }
    }
    checkValid = () => {
        const { email, password, name, handphone, address } = this.state
        if (email === "" || password === "" || name === "" || handphone === "" || address === "") {
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
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        // console.log('Received values of form: ', values);
        const ex_link = "https://cors-anywhere.herokuapp.com/";
        await axios.post(`${ex_link}https://node-student.herokuapp.com/api/student/signup`, {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            handphone: this.state.handphone,
            address: this.state.address
        }).then(res => {
            console.log(res.data)
            this.props.logIn({
                email: this.state.email,
                password: this.state.password,
            })
        })
        // this.props.history.push('/student')
        window.location.href = '/student'
        //     }
        // });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input onChange={async (e) => {
                            await this.setState({
                                email: e.target.value
                            });
                            this.checkValid()
                        }} />
                    )}
                </Form.Item>
                <Form.Item
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur}
                            onChange={async (e) => {
                                await this.setState({
                                    password: e.target.value
                                });
                                this.checkValid()
                            }} />
                    )}
                </Form.Item>
                <Form.Item
                    label={(
                        <span>
                            Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input onChange={async (e) => {
                            await this.setState({
                                name: e.target.value
                            });
                            this.checkValid()
                        }} />
                    )}
                </Form.Item>
                <Form.Item
                    label="Address"
                >
                    <Input onChange={async (e) => {
                        await this.setState({
                            address: e.target.value
                        });
                        this.checkValid()
                    }} />
                    {/* {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                    })(
                        <Cascader options={residences} />
                    )} */}
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        // <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        <Input onChange={async (e) => {
                            await this.setState({
                                handphone: e.target.value
                            });
                            this.checkValid()
                        }} />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" disabled={this.state.disabled}>Register</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);
// export default (WrappedRegistrationForm);
export default connect(null, { logIn })(WrappedRegistrationForm)