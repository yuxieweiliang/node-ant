import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'
import sagas from './reducers'
import App from './router'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  sagas.reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas.rootSaga);
// const action = type => store.dispatch({type});

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);