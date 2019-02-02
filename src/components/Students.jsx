import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { name, email, phone } = this.props;
        return (
            <React.Fragment>
                <h1>{name}</h1>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
            </React.Fragment>
        );
    }
}

Students.PropTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string
}
export default Students;