import React, { Component } from 'react';
// import './Header.sass';
import Dummy from '../Dummy';
import { Row, Col, Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/userAction';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Navbar = props => {
    return (
        < Layout >
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/student">{props.title}</Link></Menu.Item>
                    {props.isAuthenticated === false ?
                        <Menu.Item key="li1"><Link to="/">Login</Link></Menu.Item> :
                        <Menu.Item key="lo1" onClick={() => {
                            props.logOut()
                        }}>Logout</Menu.Item>
                    }
                    <Menu.Item key="rg1"><Link to="/register">Register</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/student/add">Add Student</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                    {/* <Menu.Item key="5"><Link to="/student/edit/:id">Edit Student</Link></Menu.Item> */}
                    {/* <Menu.Item key="3"><Dummy /></Menu.Item> */}
                </Menu>
            </Header>
        </Layout>
    );
}
Navbar.defaultProps = {
    title: "Student's List"
}
// const StylingHeader = {
//     color: 'green',
//     fontSize: '20px'
// }
const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token
})
export default connect(mapStateToProps, { logOut })(Navbar)