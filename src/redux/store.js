import {createStore, applyMiddleware , compose} from 'redux'
import rootReducers from './reducers/rootReducers'
import thunk from 'redux-thunk'

let store = createStore(rootReducers,{},applyMiddleware(thunk))

export default store;