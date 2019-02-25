import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import Dummy from './components/Dummy';
import Navbar from './components/Navbar';
import MonggoPesan from './challenges/MonggoPesan';
import Inputs from './components/Inputs';
import 'antd/dist/antd.css';
import Student from './components/Student';
import { Layout, Row } from 'antd';
import { Provider } from './context';
class App extends Component {
  render() {
    // const name = 'Budi'
    // const showHello = true
    // const showCount = true
    // const num1 = 2;
    // const num2 = 3;
    // let math;
    // if (showCount) {
    //   math = <h1>{num1} + {num2} = {num1 + num2}</h1>
    // } else {
    //   math = null
    // }
    return (
      <Provider>
        <div>
          {/* <Header title={"Students' List"} /> */}
          {/* {showHello ? <p>Hello {name}</p> : null}
        <p>1 + 1 = {showCount ? 1 + 1 : 'Belum dihitung'}</p>
        <p>{math}</p> */}
          {/* <Students
          name='Muhamad Yusril Saputra'
          email="yusrilxanaxal244@gmail.com"
          phone="081285338980"
        />
        <Students
          name='Muhamad Yusril Saputra'
          email="yusrilxanaxal244@gmail.com"
          phone="081285338980"
        />
        <Students
          name='Muhamad Yusril Saputra'
          email="yusrilxanaxal244@gmail.com"
          phone="081285338980"
        /> */}
          {/* <MonggoPesan /> */}
          <Navbar />
          <Layout>
            {/* <Inputs /> */}
          </Layout>
          <Layout>
            <Row type="flex" justify="start">
              <Students />
            </Row>
          </Layout>
          <Dummy />
        </div>
      </Provider>
    );
  }
}

export default App;
