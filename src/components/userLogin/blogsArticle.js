import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { Get_Articles } from '../../redux/action/articleAction'

class BlogsAndArtical extends React.Component {
   constructor(props) {
      super(props)
      props.getAllArticle()
   }
   state = {
      articles: ''
   }
   componentWillReceiveProps(nextProps) {
      return (
         this.setState({
            articles: nextProps.artical.articles
         })
      )

   }





   render() {
      return (
         <>
            <div class="container">
               <div class="row">
                  <h3 class="section-title-sub">Recent Blogs & Articles</h3>
               </div>
               {
                  this.state.articles ?

                     this.state.articles.map((item) => {
                        return <div class="row blog">
                           <div class="col col-xs-12 col-md-3">
                              <div class="img-blog">
                                 <img src={require("../assets/uploads/blogs/img1.jpg")} class="img-responsive" />
                              </div>
                           </div>
                           <div class="col col-xs-12 col-md-9">
                              <div class="content">
                                 <h2 class="title">{item.title} </h2>
                                 <p class="inline-btn">
                                    <span><strong>Post Date</strong>: {item.submit_date}</span>
                                    <span><strong>Author</strong>: {item.user.first_name}</span>
                                    <a href="#">View </a>
                                 </p>
                                 <article>
                                    {item.description}
                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                                 </article>
                              </div>
                           </div>
                        </div>

                     }) : ""}
               <div class="row blog">
                  <div class="col col-xs-12 col-md-3">
                     <div class="img-blog">
                        <img src={require("../assets/uploads/blogs/img2.jpg")} class="img-responsive" />
                     </div>
                  </div>
                  <div class="col col-xs-12 col-md-9">
                     <div class="content">
                        <h2 class="title">Blog Title here </h2>
                        <p class="inline-btn">
                           <span><strong>Post Date</strong>: 10/12/2018</span>
                           <span><strong>Author</strong>: John Doe</span>
                           <a href="#">View </a>
                        </p>
                        <article>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </article>
                     </div>
                  </div>
               </div>
               <div class="row blog">
                  <div class="col col-xs-12 col-md-3">
                     <div class="img-blog">
                        <img src={require("../assets/uploads/blogs/img3.jpg")} class="img-responsive" />
                     </div>
                  </div>
                  <div class="col col-xs-12 col-md-9">
                     <div class="content">
                        <h2 class="title">Blog Title here </h2>
                        <p class="inline-btn">
                           <span><strong>Post Date</strong>: 10/12/2018</span>
                           <span><strong>Author</strong>: John Doe</span>
                           <a href="#">View </a>
                        </p>
                        <article>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </article>
                     </div>
                  </div>
               </div>
            </div>

         </>
      )
   }
}

let mapStateToProps = (store) => {
   console.log(store.ArticleReducer);


   return {
      auth: store.AuthReducer,
      artical: store.ArticleReducer
   }
}
let mapDispatchToProps = (dispatch) => {

   return ({
      getAllArticle: () => {
         dispatch(Get_Articles())
      },
   })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogsAndArtical));