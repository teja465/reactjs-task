import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import projects from "./reducers/index"
const store=createStore(projects)
//console.log("STORE",store)
store.dispatch({
  type:"initialize"

})
//console.log(store.getState())


ReactDOM.render(
  <>
    <App   store={store}/>
  </>,
  document.getElementById('root')
);