import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Recipients from './components/Recipients.js';
import CreateRecipient from './components/CreateRecipient.js';

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
              { !pathname.includes('editor') ? <Header /> : '' }
              <Switch>
                  <Route exact path="/" component={Recipients} />
                  <Route path="/create-recipient" component={CreateRecipient} />
                  <Route path="**" component={Recipients} />
              </Switch>
            </div>
        );
    }
}

export default App;
