
import axios from 'axios'
let token = localStorage.getItem('token')


export function getInvoices() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/admin/list_all_invoices", header).then(resp => {

            if (resp) {
                console.log(resp);

                dispatch({
                    type: 'GET_ALL_INVOICES',
                    payload: resp.data.invoices
                })
            }

        })

    };
} 