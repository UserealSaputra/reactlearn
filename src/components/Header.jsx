import React, { Component } from 'react';
// import './Header.sass';
import { Row, Col } from 'antd';
const Header = props => {
    return (
        <div className="header">
            <Row align="center">
                <Col span={20}><h1>{props.title}</h1></Col>
                <Col span={4}><h3>HOME</h3></Col>
            </Row>
        </div>
    );
}
Header.defaultProps = {
    title: "Student's List"
}
// const StylingHeader = {
//     color: 'green',
//     fontSize: '20px'
// }
export default Header;