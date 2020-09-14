import axios from 'axios'
// let token = localStorage.getItem('token')
import { formEmpty, errMsg } from '../../components/adminPanel/announcementAddNew'
import { addPkg, addPkgFail } from '../../components/adminPanel/priceAddNew'
import { addCoupon, addCouponFail } from '../../components/adminPanel/couponNew'
import { editCoupon, editCouponFail } from '../../components/adminPanel/couponEdit'
import { getAllAnnouncements } from '../../components/adminPanel/announcement'
import { getAllCoupons } from '../../components/adminPanel/couponAdmin'


export function adminSignUp(data) {
    return dispatch => {
        axios.post("https://guruphysics0010.herokuapp.com/user/register?user_type=admin", data).then(resp => {
            // console.log(resp);
            if (resp) {
                dispatch({
                    type: 'ADMIN_SIGNUP',
                    payload: resp.data
                })
            }

        })


    }
}
export function allInvoices() {
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
                dispatch({
                    type: 'ALL_INVOICES',
                    payload: resp.data.invoices
                })
            }

        })

    };

}
export function deleteInvoice(id) {
    // console.log(id);

    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/admin/delete_invoice?_id=${id}`, header).then(resp => {
            if (resp) {
                dispatch({
                    type: 'DELETE_INVOICE',
                    payload: resp.data.message
                })
            }

        })


    }
}
export function allPackages() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/admin/list_all_packages", header).then(resp => {

            if (resp) {
                dispatch({
                    type: 'PACKAGES_LIST',
                    payload: resp.data.packages
                })
            }


        })


    };

}
export function addNewPackage(data) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.post("https://guruphysics0010.herokuapp.com/admin/add_package", data, header).then(resp => {
            // console.log(resp);
            if (resp) {
                dispatch({
                    type: 'ADD_PACKAGE',
                    payload: resp.data.reports
                })
                addPkg()
            }

        })
            .catch(err => {
                console.log(err);

                addPkgFail()
            })


    }

}
export function deleteAPackage(id) {
    // console.log(id);

    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/admin/delete_package?_id=${id}`, header).then(resp => {
            // console.log(resp);
            if (resp) {
                dispatch({
                    type: 'ADD_PACKAGE',
                    payload: resp.data
                })
            }

        })


    }

}
export function allCoupons() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/admin/list_all_coupons", header).then(resp => {


            if (resp) {
                dispatch({
                    type: 'ALL_COUPONS',
                    payload: resp.data.coupons
                })
            }

        })


    };

}
export function addNewCoupon(data) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.post("https://guruphysics0010.herokuapp.com/admin/add_coupon", data, header).then(resp => {


            if (resp) {
                dispatch({
                    type: 'ADD_NEW_COUPON',
                    payload: resp.data
                })
                addCoupon()
            }

        })
            .catch(err => {
                console.log(err);

                addCouponFail()
            })


    };

}

export function editCouponAdmin(data) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        let id = data._id
        delete data._id
        axios.post(`https://guruphysics0010.herokuapp.com/admin/edit_coupon?_id=${id}`, data, header).then(resp => {


            if (resp) {
                dispatch({
                    type: 'ADD_NEW_COUPON',
                    payload: resp.data
                })
                editCoupon()
            }

        })
            .catch(err => {
                console.log(err);

                editCouponFail()
            })


    };

}

export function announcementList() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/announcements/get_all_announcements", header).then(resp => {

            if (resp) {
                dispatch({
                    type: 'ALL_ANNOUNCEMENT',
                    payload: resp.data.announcements
                })
            }

        })

    };


}
export function deleteAnnouncement(id) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/announcements/delete_announcement?_id=${id}`, header).then(resp => {

            if (resp) {
                getAllAnnouncements()
                dispatch({
                    type: 'DELETE_ANNOUNCEMENT',
                    payload: resp
                })
            }

        }).catch(err => {

        })

    };

}
export function AddNewAnnouncement(data) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.post("https://guruphysics0010.herokuapp.com/announcements/add_an_announcement", data, header)
            .then(resp => {

                if (resp) {
                    dispatch({
                        type: 'ADD_NEW_ANNOUNCEMENT',
                        payload: resp
                    })
                    formEmpty()
                }

            })
            .catch(err => {
                errMsg()
            })


    }
}
export function deleteACoupon(id) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/admin/delete_coupon?_id=${id}`, header).then(resp => {
            if (resp) {
                getAllCoupons()
                dispatch({
                    type: 'DELETE_COUPON',
                    payload: resp
                })

            }

        }).catch(err=>{
            console.log(err);
            
        })


    }
}
export function blogsAndArticles() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/articles/get_all_Articles", header).then(resp => {
            // console.log(resp);
            if (resp) {
                dispatch({
                    type: 'ALL_ARTICLES',
                    payload: resp.data.articles
                })
            }

        })


    }

}

export function allReports() {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get("https://guruphysics0010.herokuapp.com/admin/list_all_reports", header).then(resp => {
            console.log(resp);
            if (resp) {
                dispatch({
                    type: 'ALL_REPORTS',
                    payload: resp.data.reports
                })
            }

        })


    }

}
export function deleteReport(id) {
    // return dispatch => {
    //     let token = localStorage.getItem('token')

    //     let header = {
    //         headers: {
    //             'Content-Type': 'application/json;charset=UTF-8',
    //             "Access-Control-Allow-Origin": "*",
    //             'x-sh-auth': token
    //         }
    //     }
    //     axios.get(`https://guruphysics0010.herokuapp.com/admin/delete_coupon?_id=${id}`, header).then(resp => {
    //         if (resp) {
    //             dispatch({
    //                 type: 'DELETE_COUPON',
    //                 payload: resp
    //             })

    //         }

    //     })


    // }
}
export function approveAnArticle(id) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/admin/approve_an_article?article_id=${id}`, header).then(resp => {
            // console.log(resp);

            if (resp) {
                dispatch({
                    type: 'APPROVED_ARTICLE',
                    payload: resp
                })
            }

        })


    }
}

export function deleteAnArticle(id) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/articles/delete_Article?_id=${id}`, header).then(resp => {
            // console.log(resp);

            if (resp) {
                dispatch(blogsAndArticles())
                dispatch({
                    type: 'DELETE_ARTICLE',
                    payload: resp.data.message
                })
            }

        })


    }
}

export function deleteAccount(id) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruphysics0010.herokuapp.com/admin/delete_coupon?_id=${id}`, header).then(resp => {
            if (resp) {
                dispatch({
                    type: 'DELETE_COUPON',
                    payload: resp
                })

            }

        })


    }
}


export function deleteAccountByAdmin(id) {
    return dispatch => {
        let token = localStorage.getItem('token')

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'x-sh-auth': token
            }
        }
        axios.get(`https://guruapp0010.herokuapp.com/user/DeleteAccountbyadmin?_id=${id}`, header).then(resp => {
            if (resp) {
                dispatch({
                    type: 'DELETE_COUPON',
                    payload: resp
                })

            }

        })


    }
}


// export function deleteAccount(id) {
//     return dispatch => {
//         let token = localStorage.getItem('token')

//         let header = {
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                 "Access-Control-Allow-Origin": "*",
//                 'x-sh-auth': token
//             }
//         }
//         axios.get(`https://guruphysics0010.herokuapp.com/admin/delete_coupon?_id=${id}`, header).then(resp => {
//             if (resp) {
//                 dispatch({
//                     type: 'DELETE_COUPON',
//                     payload: resp
//                 })

//             }

//         })


//     }
// }