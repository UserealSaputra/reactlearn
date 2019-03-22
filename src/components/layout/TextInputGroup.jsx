import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
const TextInputGroup = ({ label, name, placeholder, value, type, onChange, error }) => {
    return (
        <React.Fragment>
            <Row type="flex" justify="space-between" align="middle" style={{ marginBottom: 10 }}>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <div style={{ color: 'red' }}>{error}</div>
            </Row>
        </React.Fragment>
    );
}

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TextInputGroup;