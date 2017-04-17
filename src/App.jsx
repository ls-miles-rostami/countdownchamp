import React, { Component } from 'react';
import './App.css'
import Clock from './clock'
import { Form, FormControl, Button} from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        deadline: 'December 25, 2018',
        newDeadline: ''
      }
  }

  changeDeadline() {
      this.setState({
        deadline: this.state.newDeadline
      })
  }


  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl className="Deadline-input" placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}/>
          {/* You call an anonymous function because it avoids loops and allows you just call it just once */}
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
