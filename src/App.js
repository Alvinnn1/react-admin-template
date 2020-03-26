import React from 'react';
import './css/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Dashboard from './views/dashboard'
import Login from './views/login'


class App extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
        <div className="App">
          <Router>
            <Route exact path="/" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Router>
        </div>
    )
  }
}

export default App;
