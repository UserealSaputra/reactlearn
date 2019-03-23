import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/students/Students';
import Dummy from './components/Dummy';
import Navbar from './components/layout/Navbar';
import MonggoPesan from './challenges/MonggoPesan';
import Inputs from './components/Inputs';
import 'antd/dist/antd.css';
import Student from './components/students/Student';
import AddStudent from './components/students/AddStudent';
import About from './components/pages/about';
import NotFound from './components/pages/notfound';
import { Layout, Row } from 'antd';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import EditStudents from './components/students/EditStudent';
import Login from './components/pages/login';
import WrappedRegistrationForm from './components/pages/register';
// Redux Section
import { Provider } from 'react-redux';
import store from './store/store'
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
      <Provider store={store}>
        <Router>
          <div>
            <Navbar title="studdents list" />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={WrappedRegistrationForm} />
              <Route exact path="/student" component={Students} />
              <Route exact path="/student/add" component={AddStudent} />
              <Route exact path="/about" component={About} />
              <Route exact path="/student/edit/:id" component={EditStudents} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
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
          {/* <Navbar />
          <Layout> */}
          {/* <Inputs /> */}
          {/* <AddStudent />
          </Layout>
          <Layout>
            <Row type="flex" justify="start">
              <Students />
            </Row>
          </Layout>
          <Dummy /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
