import axios from 'axios'
import jwt_decode from 'jwt-decode'
import history from '../../components/history'
let initialState = {
    userDetail: "",
    time: "0",
    article: [],
    advisors: '',
    oldHistory: [
        {
            sr: 1,
            date: '05/24/2019',
            mints: ' 10Min',
            ammount: '$55',
            currency: 'USD',
            paymentMethod: 'Paypal'
        },
        {
            sr: 2,
            date: '05/26/2019',
            mints: ' 16Min',
            ammount: '$72',
            currency: 'USD',
            paymentMethod: 'Stripe'
        },
        {
            sr: 3,
            date: '05/27/2019',
            mints: '5Min',
            ammount: ' $15',
            currency: 'USD',
            paymentMethod: 'Paypal'
        },
        {
            sr: 4,
            date: '05/24/2019',
            mints: "24Min",
            ammount: '$55',
            currency: 'USD',
            paymentMethod: 'Paypal'
        },
        {
            sr: 5,
            date: "05/26/2019",
            mints: '6Min',
            ammount: '$72',
            currency: 'USD',
            paymentMethod: 'Stripe'
        },
        {
            sr: 6,
            date: '05/27/2019',
            mints: '41Min',
            ammount: '$15',
            currency: 'USD',
            paymentMethod: 'Paypal'
        },


    ],
    reportIssue: null,
    articleAdded: null

}


export default function (state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    let token = localStorage.getItem('token')

    switch (action.type) {

        case 'GET_PROFILE':
            newState.userDetail = action.payload
            console.log(newState);



            // let axiosHeader = {
            //     headers: {
            //         'Content-Type': 'application/json;charset=UTF-8',
            //         "Access-Control-Allow-Origin": "*",
            //         'x-sh-auth': token
            //     }
            // };

            // axios.get(" https://guruapp0010.herokuapp.com/user/profile", axiosHeader)
            //     .then(resp => {
            //         console.log(resp);
            //         newState.userDetail = resp.data
            //         console.log(newState.userDetail);


            //     })
            //     .catch(err => {
            //         console.log('Err is ' + err);

            //     })

            // async function chaling(){
            //     let resp = await axios.post("https://guruapp0010.herokuapp.com/user/profile", axiosHeader)
            //       console.log(resp);
            //       if (resp) {
            //           newState.userDetail = resp.data
            //           localStorage.setItem('token', resp.data.token)
            //           localStorage.setItem('user', resp.data.user)

            //           setTimeout(() => {
            //               history.push("/user_dashboard/home")
            //           });



            //       }


            //   }  
            //   chaling()

            break;
        case 'REPORT_ISSUE':

            newState.reportIssue = action.payload
            
            break;
        case 'ADD_TIME':
            switch (action.payload) {
                case 'bronze':
                    newState.time = 10
                    var date = new Date().toLocaleString()
                    var mints = "10Min"
                    var ammount = '$29.99'
                    var currency = 'USD'
                    var paymentMethod = 'Paypal'
                    var pHistory = {
                        date,
                        mints,
                        ammount,
                        currency,
                        paymentMethod
                    }
                    newState.oldHistory.unshift(pHistory)
                    console.log(newState.oldHistory);

                    break;
                case 'silver':
                    newState.time = 20
                    var date = new Date().toLocaleString()
                    var mints = "20Min"
                    var ammount = '$55.80'
                    var currency = 'USD'
                    var paymentMethod = 'Paypal'
                    var pHistory = {
                        date,
                        mints,
                        ammount,
                        currency,
                        paymentMethod
                    }
                    newState.oldHistory.unshift(pHistory)
                    console.log(newState.oldHistory);

                    break;
                case 'gold':
                    newState.time = 30
                    var date = new Date().toLocaleString()
                    var mintfs = "30Min"
                    var ammount = '$77.70'
                    var currency = 'USD'
                    var paymentMethod = 'Paypal'
                    var pHistory = {
                        date,
                        mints,
                        ammount,
                        currency,
                        paymentMethod
                    }
                    newState.oldHistory.unshift(pHistory)
                    console.log(newState.oldHistory);

                    break;
                case 'platinum':
                    newState.time = 45
                    var date = new Date().toLocaleString()
                    var mints = "45Min"
                    var ammount = '$107.55'
                    var currency = 'USD'
                    var paymentMethod = 'Pioneer'
                    var pHistory = {
                        date,
                        mints,
                        ammount,
                        currency,
                        paymentMethod
                    }
                    newState.oldHistory.unshift(pHistory)
                    console.log(newState.oldHistory);

                    break;
                case 'diamond':
                    newState.time = 45
                    var date = new Date().toLocaleString()
                    var mints = "45Min"
                    var ammount = '$131,40'
                    var currency = 'USD'
                    var paymentMethod = 'Stripe'
                    var pHistory = {
                        date,
                        mints,
                        ammount,
                        currency,
                        paymentMethod
                    }
                    newState.oldHistory.unshift(pHistory)
                    console.log(newState.oldHistory);

                    break;

                default:
                    break;
            }
            break;
        case 'ADD_NEW_ARTICLE':

           newState.articleAdded = action.payload
            // let title = action.payload.title
            // let desc = action.payload.description
            // newState.article.push({title, desc})
            // console.log(newState.article);


            break;
        case 'GET_ALL_ADVISOR':
            newState.advisors = action.payload


            break;
        case 'USER_DELETED':
            console.log(action.payload);
            break;
        default:
            break;
    }
    return newState

}