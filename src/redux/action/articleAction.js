import axios from 'axios'
let token = localStorage.getItem('token')

export function Get_Articles(){
    return dispatch => { 
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/articles/get_all_Articles", header).then(resp => {
            console.log(resp);
            if (resp) {
                dispatch({
                    type: 'ALL_ARTICLES',
                    payload: resp.data.articles
                })
            }

        })


    }
}      