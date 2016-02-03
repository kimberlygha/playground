import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
const browserHistory = createBrowserHistory();

// Components
import AppContainer from './containers/app_container';

// Reducers
import appReducer from './reducers/app_reducer';

// Sync dispatched route actions to the history
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers(Object.assign({}, {
  app: appReducer
}));

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);
