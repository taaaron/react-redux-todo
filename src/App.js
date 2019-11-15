import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/combineReducer';
import TodoBoard from "./components/TodoBoard";

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <div className="App">
              <TodoBoard/>
          </div>
      </Provider>
    );
  }
}

export default App;
