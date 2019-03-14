import React, { Component } from 'react';
import './App.css';
import UserForm from './Form'
import UsersTable from './UserTable'
import { Segment, Container, Divider } from 'semantic-ui-react'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Container>
            <Segment inverted>
              <UserForm />
              <Divider />
              <UsersTable />
            </Segment>
          </Container>
        </div>

      </div>
    );
  }
}

export default App;
