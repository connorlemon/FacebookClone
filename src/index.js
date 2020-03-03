import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. In order to wire up a redux/react app, we need react-redux.
// We need the provider component to be around everything!
import { Provider } from 'react-redux';

// 2. Create the Redux store, so that Redux exists, and the provider has a store!
import { createStore } from 'redux';

// 3. Reducers to populate the store. We have to have at least one Reducer to have any Store!
//    We always start with a rootReducer
// 4. Make individual reducers to hand to the rootReducer (3)
import rootReducer from './reducers/rootReducer';

// 5. Create the Store (2) by passing it the rootReducer, which is made up of the reducers
const theStore = createStore(rootReducer);

// Provider is the glue between React and Redux, give it the Store
ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );
    

