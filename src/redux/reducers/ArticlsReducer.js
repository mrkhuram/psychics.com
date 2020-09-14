import axios from 'axios'

let initialState = {
    articles: [],
    approved: [{ title: "It's a title of approved Articals", description: "This is the description of approved Article", submit_date: '10/9/2019' }],
    unApprove: []

}

export default function ArticalReducer(state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    // let token = localStorage.getItem('token')


    switch (action.type) {
        // case 'GET_ARTICALS':
        //     console.log('caled in articleReducer');

        //     let articles = {
        //         headers: {
        //             'Content-Type': 'application/json;charset=UTF-8',
        //             "Access-Control-Allow-Origin": "*",
        //             'x-sh-auth': token
        //         }
        //     }
        //     async function invoicesList() {

        //         let resp = await axios.get("https://guruapp0010.herokuapp.com/articles/get_all_Articles", articles)
        //         if (resp) {
        //             console.log(resp);
        //             newState.articles = resp.data.articles
        //             newState.unApprove = []
        //             resp.data.articles.map((item) => {
        //                 if (item.approved === true) {
 
        //                 } else {
        //                     newState.unApprove.push(item)

        //                 }
        //             })



        //         }


        //     }
        //     invoicesList()

        //     break;
        // case 'UNAPPROVED':
        //     newState.unApprove.push(action.payload)
        //     newState.articles.push(action.payload)

        //     break;
        // case 'APPROVED':
        //     newState.approved.push(action.payload)
        //     newState.articles.push(action.payload)

        //     break;
        case 'ALL_ARTICLES':
            newState.articles = action.payload
            newState.approved = []
            newState.unApprove = []
            // console.log(action.payload);
            action.payload.map((item)=>{
                if(item.approved){
                    newState.approved.push(item)
                }else{

                    newState.unApprove.push(item)
                }
            })


            // let aritcalHeader = {
            //     headers: {
            //         'Content-Type': 'application/json;charset=UTF-8',
            //         "Access-Control-Allow-Origin": "*",
            //         'x-sh-auth': token
            //     }
            // }; 
            // async function invoices() {
 
            //     let resp = await axios.get("https://guruapp0010.herokuapp.com/articles/get_all_Articles", aritcalHeader)
            //     if (resp) {
            //         newState.unApprove = []
            //         resp.data.articles.map((item) => {
            //             if (item.approved === true) {
            //                 console.log(item);

            //             } else {
            //                 newState.unApprove.push(item)

            //             }
            //         })



            //     }


            // }
            // invoices()
            break;
        default:
            break;
    }
    return newState
}