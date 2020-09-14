import React from 'react'
import { Link } from 'react-router-dom'
import Header from './main'

class ReaderHome extends React.Component {
    render() {
        return (
            <>
                <Header adminRemoved={this.props.adminRemoved} />
  
            </>
        )
    }
}
export default ReaderHome;