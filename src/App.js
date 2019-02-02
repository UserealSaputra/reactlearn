import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import Header from './components/Header';
import MonggoPesan from './challenges/MonggoPesan';
import 'antd/dist/antd.css';
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
        <MonggoPesan />
      </div>
    );
  }
}

export default App;
