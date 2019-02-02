import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

import './MonggoPesan.sass';
import FrontImage from '../components/FrontImage';
import gambarInti from '../img/MonggoPesan.jpg';
import gambarMerk from '../img/MPmerk.jpg';
import glogo from '../img/Glogo.png';
import flogo from '../img/Flogo.png';
class MonggoPesan extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={14}>
                        <FrontImage src={gambarInti} />
                    </Col>
                    <Col span={10}>
                        {/* register */}
                        <div className="registrate">
                            <img className="merk-image" src={gambarMerk} />
                            <h2 className="color-darkgreen" >Daftar Sekarang</h2>
                            <Form onSubmit={this.handleSubmit} className="login-form" >
                                <Form.Item className="form-item">
                                    {/* {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })( */}
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    {/* )} */}
                                </Form.Item>
                                <Form.Item className="form-item">
                                    {/* {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })( */}
                                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="E-mail" />
                                    {/* )} */}
                                </Form.Item>
                                <Form.Item className="form-item">
                                    {/* {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })( */}
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" suffix={<Icon type="eye" style={{ color: '#ff5800' }} />} />
                                    {/* )} */}
                                </Form.Item>
                                <Form.Item className="form-item">
                                    <div className="form-note">
                                        Dengan melaukan pendaftaran, saya setuju dengan <span className="color-orange">Kebijakan Privasi</span> dan <span className="color-orange">Syarat & Ketentuan</span> monggopesen.com
                                    </div>
                                </Form.Item>
                                <Form.Item className="form-item">
                                    {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                                    <Button type="primary" htmlType="submit" className="login-form-button back-darkgreen font-16">
                                        Daftar
                                    </Button>
                                    {/* Or <a href="">register now!</a> */}
                                </Form.Item>
                                <Form.Item>
                                    <Row type="flex" align="middle" justify="space-between">
                                        <div className="text-line"></div>
                                        <span>atau daftar dengan</span>
                                        <div className="text-line"></div>
                                    </Row>
                                </Form.Item>
                                <Form.Item>
                                    <Row type="flex" justify="space-between">
                                        {/* <Col span={12}> */}
                                        <Button className="btn-second" icon='google'>Google</Button>
                                        {/* </Col>
                                        <Col span={12} > */}
                                        <Button className="btn-second" icon="facebook">Facebook</Button>
                                        {/* </Col> */}
                                    </Row>
                                </Form.Item>
                                <center>Sudah punya akun untuk moggopesan? <strong className="color-orange">Masuk</strong></center>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default MonggoPesan;