import AuthReducer from './authReducer'
import ProfileReducer from './profileReducer'
import { combineReducers } from 'redux';
import AdminReducer from './adminReducer'
import ArticleReducer from './ArticlsReducer'
import InvoicesReducer from './invoicesReducer'

let allReducer = {AuthReducer,ProfileReducer, AdminReducer,ArticleReducer,InvoicesReducer}
// let allReducer = {AuthReducer, AdminReducer}

const reducers = combineReducers(allReducer)

export default reducers