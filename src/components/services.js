import store from '../redux/store'
import { signInStart } from '../redux/action/authAction'
import axios from 'axios'
import { getMyProfile } from '../redux/action/userProfileAction'
import { doesNotReject } from 'assert';
import jwt_decode from 'jwt-decode'


let token = localStorage.getItem('token')

let obj = {
    loadProfile: () => {
        
        let tokenUser = localStorage.getItem('token')
        let axiosHeader = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': tokenUser

            }
        };
        axios.get("https://guruphysics0010.herokuapp.com/user/profile", axiosHeader)
            .then(resp => {
                // console.log(resp);

                store.dispatch({
                    type: 'GET_PROFILE',
                    payload: resp.data
                })
            })    
            .catch(err => {
                // console.log('Err is ' + err);

            })

    },
    addTime: (data) => {
        store.dispatch({
            type: 'ADD_TIME',
            payload: data
        })
    },
    // getArtical: () => {
    //     let extractedToken = ''
    //     if (token) {
    //         extractedToken = jwt_decode(token)
    //     } else {
    //         extractedToken = ''
    //     }

    //     let aritcalHeader = {
    //         headers: {
    //             'Content-Type': 'application/json;charset=UTF-8',
    //             "Access-Control-Allow-Origin": "*",
    //             'x-sh-auth': token
    //         }
    //     };
    //     axios.get("https://guruphysics0010.herokuapp.com/articles/get_all_Articles", aritcalHeader)
    //         .then(resp => {
    //             let articals = resp.data.articles

    //             // store.dispatch({
    //             //     type: 'ALL_ARTICLES',
    //             //     payload: articals
    //             // })
    //             articals.forEach(item => {
    //                 if(item.approved === true){
    //                     if(item.user._id === extractedToken._id){
    //                         store.dispatch({
    //                             type: 'APPROVED',
    //                             payload: item
    //                         })
    //                     }
    //                 }else{
    //                     if(item.user._id === extractedToken._id){
    //                         store.dispatch({
    //                             type: 'UNAPPROVED',
    //                             payload: item
    //                         })

    //                     }

    //                 }
    //             });

    //         })
    //         .catch(err => {
    //             console.log('Err is ' + err);

    //         })
    // },
    // loadAllAdvisor: ()=>{
    //     let advisorHeader = {
    //         headers: {
    //             'Content-Type': 'application/json;charset=UTF-8',
    //             "Access-Control-Allow-Origin": "*",
    //             'x-sh-auth': token
    //         }
    //     };
    //     axios.get("https://guruphysics0010.herokuapp.com/user/get_all_advisors", advisorHeader)
    //         .then(resp => {
    //             console.log(resp);
    //             store.dispatch({
    //                 type: 'GET_ALL_ADVISOR',
    //                 payload: resp.data
    //             })
                
    //         })
    //         .catch(err => {
    //             console.log('Err is ' + err);

    //         })
    // }
}

export default obj;