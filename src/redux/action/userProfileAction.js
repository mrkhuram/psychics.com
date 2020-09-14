import axios from 'axios'
let token = localStorage.getItem('token')
export function getMyProfile(data) {
    return {
        type: 'GET_PROFILE',
        // payload: data 
    }
}
export default function updateProfile(data) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let axiosProfile = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        };
        // console.log(token);
        // console.log(data);

        axios.post("https://guruphysics0010.herokuapp.com/user/update/profile", data, axiosProfile)
            .then(resp => {
                // console.log(resp);
                dispatch({
                    type: 'UPDATE_PROFILE',
                    payload: resp.data
                })

            })


    }
}

export function reportIssue(data) {
   
   
        

    return dispatch => {
        let token = localStorage.getItem('token')

        let reportHeader = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        };

        axios.post("https://guruphysics0010.herokuapp.com/user/report_an_issue", data, reportHeader)
            .then(resp => {
                dispatch({
                    type: 'REPORT_ISSUE',
                    payload: resp.data
                })

            })
            .catch(err => {
                console.log('Err is ' + err);
    
            })  


    }
    // return {
    //     type: 'REPORT_ISSUE',
    //     payload: data 
    // }
}
export function addArticle(data) {
    return dispatch => {
        let addArticleHeader = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        };
        axios.post("https://guruphysics0010.herokuapp.com/articles/submit_an_article", data, addArticleHeader)
            .then(resp => {
                dispatch({
                    type: 'ADD_NEW_ARTICLE',
                    payload: resp.data
                })
    
            })
            .catch(err => {
                console.log('Err is ' + err);
    
            })  
    }
}
export function getAllAdvisor() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let advisorHeader = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        };

        axios.get("https://guruphysics0010.herokuapp.com/user/get_all_advisors", advisorHeader)
            .then(resp => {
                // console.log(resp);
                if (resp) {
                    dispatch({
                        type: 'GET_ALL_ADVISOR',
                        payload: resp.data
                    })
                }

            })


    }
}


export function deleteUser() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/user/register?user_type=client", header)
            .then(resp => {
                if (resp) {
                    dispatch({
                        type: 'USER_DELETED',
                        payload: resp.data
                    })
                }

            })

    }
}