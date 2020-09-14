import axios from 'axios'
import history from '../../components/history'
import { async } from 'q';

let initiaState = {
    invoicesList: []
}

export default function (state = initiaState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    // let token = localStorage.getItem('token')

    switch (action.type) {
        case "GET_ALL_INVOICES":
            console.log(action.payload);
            newState.invoicesList = action.payload
            
            // let invoices = {
            //     headers: {
            //         'Content-Type': 'application/json;charset=UTF-8',
            //         "Access-Control-Allow-Origin": "*",
            //         'x-sh-auth': token
            //     }
            // }
            // async function invoicesList() {

            //     let resp = await axios.get("https://guruapp0010.herokuapp.com/admin/list_all_invoices", invoices)
            //     if (resp) {
            //         console.log(resp);
            //         state.invoicesList = []
            //         state.invoicesList = resp.data.invoices
            //         console.log(state);

            //     } 


            // }
            // invoicesList()
            break;

        default:
            break;
    }
    return newState

}