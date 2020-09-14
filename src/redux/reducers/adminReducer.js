import axios from 'axios'
import history from '../../components/history'

let initState = {
    invoicesList: '',
    packages: '',
    couponsList: '',
    msg: '',
    announcementList: '',
    articles: '',
    reports: ''
}

export default function (state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case "ADMIN_SIGNUP":
            console.log(action.payload);

            break;
        case "PACKAGES_LIST":
            newState.packages = action.payload

            break;
        case "ADD_PACKAGE":
            console.log(action.payload);
            break;
        case "ALL_INVOICES":
            newState.invoicesList = action.payload

            break;
        case "DELETE_INVOICE":
            newState.msg = action.payload
 
            break;
        case "ALL_COUPONS":
            newState.couponsList = action.payload
            console.log(action.payload);


            break;
        case "ADD_NEW_COUPON":
            newState.msg = action.payload.message

            break;
        case "DELETE_COUPON":

            break;
        case "ALL_ANNOUNCEMENT":
            newState.announcementList = action.payload


            break;
        case "DELETE_ANNOUNCEMENT":

            break;
        case "ADD_NEW_ANNOUNCEMENT":

            break;
        case "ALL_ARTICLES":
            newState.articles = action.payload
            break;
        case "DELETE_ARTICLE":
            newState.msg = action.payload 
            break;
        case "ALL_REPORTS":
            console.log(action.payload);
            return{
                ...newState,
                reports: action.payload
            }

        default:
            break;
    }


    return newState
}