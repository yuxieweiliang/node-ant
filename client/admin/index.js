import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory';
import sagas from './reducers'
import App from './router'


const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const store = createStore(
  sagas.reducers,
  applyMiddleware(sagaMiddleware)
);

// const action = (type, state) => store.dispatch({type, state});
sagaMiddleware.run(sagas.rootSaga, history);

ReactDOM.render(
  <Provider  store={store}>
    <App history={history}/>
  </Provider>
  ,
  document.getElementById('root')
);