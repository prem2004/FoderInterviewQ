// import { createStore,applyMiddleware  } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import cakeReducer from './reducer/cakeReducer'
// import thunk from 'redux-thunk'

// const middleware=[thunk]

// //const store=createStore(cakeReducer,composeWithDevTools(applyMiddleware(...midleware)))

// const store=createStore(cakeReducer,composeWithDevTools(applyMiddleware(...middleware)))


// export default store

import { createStore,applyMiddleware } from 'redux'
import {composeWithDevTools  } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import countryReducer from './reducer/countryReducer'

const middleware=[thunk];

const store=createStore(countryReducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store