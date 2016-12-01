import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});
// const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
