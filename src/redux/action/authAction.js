import axios from 'axios'
import obj from '../../components/services'
let LOG_OUT = "LOG_OUT"
let token = localStorage.getItem('token')




 
export function collectingDataAccount(data) {
    return {
        type: 'COLLECTING_DATA_ACCOUNT',
        payload: data
    }
}
export function collectiingDataPersonal(data) {
    return {
        type: 'COLLECTING_DATA_PERSONAL',
        payload: data
    }
}

export function startCreateUser(data) {
    return dispatch => {
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.post("https://guruphysics0010.herokuapp.com/user/register?user_type=client", data)
            .then(resp => {
                if (resp) {
                    dispatch({
                        type: 'SIGN_UP',
                        payload: resp.data
                    })
                }

            })

    };

}

export function signInStart(data) {
    return dispatch => {

        axios.post("https://guruphysics0010.herokuapp.com/user/login", data).then(resp => {
            if (resp) {
                dispatch({
                    type: 'LOG_IN',
                    payload: resp.data
                })
            }

        })
            .catch(err => {
                dispatch({
                    type: 'LOG_IN_ERR',
                    payload: err
                })
            })


    }
}


export function logOut() {
    return dispatch => {

        let token = localStorage.getItem('token')
        let logOutHeader = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/user/logout", logOutHeader)
            .then(resp => {
                if (resp) {
                    console.log(resp);


                    localStorage.removeItem('token')
                    dispatch({ 
                        type: LOG_OUT,
                        payload: resp
                    })

                }
            })
            .catch(err => {
                console.log('Err is ' + err);

            })

    }
}

export function changeUserStatus(data) {
    return dispatch => {
        let token = localStorage.getItem('token')
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.post("https://guruphysics0010.herokuapp.com/user/edit_activity_status", data, header).then(resp => {
            console.log(resp);

            dispatch({
                type: 'USER_STATUS_CHANGING',
                payload: resp
            })
            obj.loadProfile()
        })
    }
}

