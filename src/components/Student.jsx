import React, { Component } from 'react';
import { Card, List, Icon } from 'antd';
import { Consumer } from '../context';
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showtoggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    deleteData = (id, dispatch) => {
        dispatch({ type: 'DELETE_STUDENT', payload: id });
    }
    render() {
        const { student } = this.props
        const { visible } = this.state
        const Li = List.Item
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            <div style={{ width: '25%' }}>
                                <Card bordered style={{ margin: '30px', background: 'aliceblue', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <h1 style={{ margin: 0 }}>{student.name} <Icon type="down" style={{ fontSize: "16px" }} onClick={this.showtoggle} /></h1>
                                        <Icon type="cross" style={{ fontSize: "16px", color: 'red' }} onClick={this.deleteData.bind(this, student.id, dispatch)} />
                                    </div>
                                    {visible === true ?
                                        <List>
                                            <Li>{student.email}</Li>
                                            <Li>{student.phone}</Li>
                                        </List>
                                        :
                                        null
                                    }
                                </Card>
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        );
    }
}

export default Student;