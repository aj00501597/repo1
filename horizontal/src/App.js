import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import './App.css';
import LogIn from './logIn';
import SignUp from './signUp';
function App() {
  return (
    <div className="=container">
      <Tabs defaultActiveKey="home" id="el1" className="mb-3">
        <Tab eventKey="home" title="Register">
          <SignUp />
        </Tab>
        <Tab eventKey="login" title="Login">
          <LogIn />
        </Tab>
      </Tabs>
    </div>
  );
}
export default App;
