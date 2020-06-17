import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Foods from './containers/Foods';
import CreateFood from './containers/CreateFood';
import Nav from './components/Nav';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pathname: '',
    };

    this.notifyPathname = this.notifyPathname.bind(this);
  }

  notifyPathname(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav 
            notifyPathname={this.notifyPathname}
            pathname={this.state.pathname}
          />
          <Switch>
            <Route path="/"
                   exact
                   component={()=> <Foods />}
            />
            <Route path="/create"
                   exact
                   component={() => <CreateFood />}
            />
            <Route path="/edit/:id"
                   exact
                   component={() => <CreateFood/>}
            
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
