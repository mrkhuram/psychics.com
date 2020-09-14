import axios from 'axios'
import history from '../../components/history'
import jwt_decode from 'jwt-decode'
import { async } from 'q';

let initiaState = {
    userDetail: '',
    userLoggedIn: false,
    userType: ''
}

export default function (state = initiaState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    let token = localStorage.getItem('token')

    switch (action.type) {

        case 'SIGN_UP':

            newState.userDetail = action.payload
            // axios.post("https://guruapp0010.herokuapp.com/user/register?user_type=client", action.payload)
            //     .then(resp => {
            //         console.log(resp);
            //         newState.userDetail = resp.data
            // if (newState.userType === 'user') {
            //     newState.userType = 'user'

            //     setTimeout(() => {
            //         history.push("/user_dashboard/home")
            //     });

            // } else {
            //     setTimeout(() => {
            //     newState.userType = 'reader'

            //         history.push("/reader_deshboard/home")
            //     });

            // }


            // })
            // .catch(err => {
            //     console.log('Err is ' + err);

            // })

            break;
        case 'LOG_IN':
            // console.log(action.payload);
            newState.userDetail = action.payload.user
            newState.userLoggedIn = true
            newState.userType = action.payload.type
            localStorage.setItem('token', action.payload.token)
            if (action.payload.user.admin_access) {
                newState.userType = 'admin'

            }
            if (action.payload.user.user === true) {
                newState.userType = 'user'
                setTimeout(() => {
                    history.push("/user_dashboard/home")
                });

            } else if (newState.userType === 'admin') {
                newState.userType = 'admin'

                setTimeout(() => {
                    history.push("/admin")


                })
            } else if (action.payload.user.mentor === true) {
                setTimeout(() => {
                    newState.userType = 'reader'

                    history.push("/reader_deshboard/home")
                });

            }
            // async function chaling() {
            //     let resp = await axios.post("https://guruapp0010.herokuapp.com/user/login", action.payload)
            //     console.log(action.payload);
            //     if (resp) {
            //         newState.userDetail = resp.data
            //         newState.userLoggedIn = true
            //         newState.userType = action.payload.type
            //         if(resp.data.user.admin_access){
            //             newState.userType = 'admin'

            //         } 
            //         console.log(resp); 
            //         localStorage.setItem('token', resp.data.token)
            //         if (resp.data.user.user === true) {
            //             newState.userType = 'user'
            //             setTimeout(() => {
            //                 history.push("/user_dashboard/home")
            //             });

            //         } else if(newState.userType === 'admin'){
            //             newState.userType = 'admin'

            //             setTimeout(()=>{
            //                 history.push("/")

            //             })
            //         }else if(resp.data.user.mentor === true){
            //             setTimeout(() => {
            //             newState.userType = 'reader'

            //                 history.push("/reader_deshboard/home")
            //             });

            //         }   


            //     }


            // }
            // chaling()
            // console.log(login);

            // .then(resp => {
            //     console.log(resp);
            //     newState.userDetail = resp.data
            //     localStorage.setItem('token', resp.data.token)
            //     setTimeout(() => {
            //         history.push("/user_dashboard/home")
            //     });

            // })
            // .catch(err => {
            //     console.log('Err is ' + err);

            // })

            break;
        case 'LOG_IN':
            newState.userDetail = action.payload
            break;
        case 'LOG_IN_ERR':
            newState.err = "Invalid Credentials, Try Again !"
            setTimeout(() => {
            newState.err = ""
                
            }, 1000);
            break;

        case 'LOG_OUT':
            newState.userType = ''
            setTimeout(() => {

                history.push("/") 
            })

            newState.userDetail._id = false

            break;
        case 'GET_PROFILE':
            // console.log(action.payload);

            newState.userDetail = action.payload
            if (action.payload.admin_access) {
                newState.userType = 'admin'

            }
            if (action.payload.user === true && action.payload.mentor === false && action.payload.admin_access === false) {
                newState.userType = 'user'
                setTimeout(() => {
                    history.push("/user_dashboard/home")
                });

            } else if (newState.userType === 'admin') {
                newState.userType = 'admin'

                setTimeout(() => {
                    history.push("/admin")

                })
            } else if (action.payload.mentor === true) {
                setTimeout(() => {
                    newState.userType = 'reader'
                    history.push("/reader_deshboard/home")
                });

            }

            // if (action.payload.admin_access) {
            //     newState.userType = 'admin'
            // }
            // if (newState.userType === 'admin') {
            //     newState.userType = 'admin'

            //     setTimeout(() => {
            //         history.push("/")

            //     })
            // }
            // else if (action.payload.user === true) {
            //     newState.userType = 'user'

            //     setTimeout(() => {
            //         history.push("/user_dashboard/home")
            //     });

            // } else if (action.payload.mentor === true) {
            //     setTimeout(() => {
            //         newState.userType = 'reader'

            //         history.push("/reader_deshboard/home")
            //     });

            // }
            break;
        case 'UPDATE_PROFILE':
            newState.userDetail = action.payload

            // let formData = new FormData();

            // for (var item in action.payload) {
            //     formData.append(item, action.payload[item]);
            // }


            // let axiosProfile = {
            //     headers: {
            //         'Content-Type': 'application/json;charset=UTF-8',
            //         "Access-Control-Allow-Origin": "*",
            //         'x-sh-auth': token
            //     }
            // };
            // axios.post("https://guruapp0010.herokuapp.com/user/update/profile", action.payload, axiosProfile)
            //     .then(resp => {
            //         console.log(resp);
            //         newState.userDetail = resp.data
            //         console.log(newState.userDetail);


            //     })
            //     .catch(err => {
            //         console.log('Err is ' + err);

            //     })

            break;
        case 'USER_STATUS_CHANGING':
            

            break;
        default:
            break;
    }

    return newState
}


