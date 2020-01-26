import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'

 
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { AsyncStorage } from 'react-native';


const client = axios.create({
  baseURL: process.env.REACT_APP_APIENDPOINT,
  responseType: 'json'
});


const middleware = [thunk,axiosMiddleware(client)];
const intialState = {};
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;


const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  blacklist: ['auth', 'errors']
}
 
const persistedReducer = persistReducer(persistConfig, reducers)





  export const store = createStore(
    persistedReducer,
    intialState,
    compose(
      applyMiddleware(...middleware),
      devTools,
    ),
  );
  export const persistor = persistStore(store)



// export default store;
