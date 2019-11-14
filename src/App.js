import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/combineReducer';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <div className="App">
          </div>
      </Provider>
    );
  }
}

export default App;
