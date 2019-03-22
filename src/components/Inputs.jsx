import React, { Component } from 'react';
import { Input, Button, Form, Layout, Row } from 'antd';
class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }
    SaveData = (e) => {
        // const { onAdd } = this.props;
        e.preventDefault();
        // dispatch({
        //     type: 'ADD_STUDENT',
        //     payload: this.state
        // });
        // onAdd();
    }
    render() {
        return (
            <React.Fragment>
                <Form className="login-form" onSubmit={(e) => this.SaveData(e)}>
                    <Form.Item>
                        <Input id="name" placeholder="Name..." onChange={(event) => this.setState({ name: event.target.value })} />
                    </Form.Item>
                    <Form.Item>
                        <Input id="email" placeholder="Email..." onChange={(event) => this.setState({ email: event.target.value })} />
                    </Form.Item>
                    <Form.Item>
                        <Input id="phone" placeholder="Phone..." onChange={(event) => this.setState({ phone: event.target.value })} />
                    </Form.Item>
                    <Form.Item>
                        <Button>SIMPAN</Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}

export default Inputs;