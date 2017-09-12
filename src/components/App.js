import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import SingleView from './SingleView';
import {Provider} from 'react-redux';
import store from '../store';
import {getContacts} from '../actions/contact'


class App extends Component {
  componentWillMount(){
    getContacts()
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact/:id' component={SingleView} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
