import React from 'react'
import { Link } from 'react-router-dom'

class StartRegister extends React.Component {

    state = {

    }
    onChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault()
        // console.log(this.state);
        
        this.props.changeRoute(this.state)
    }
    render() {
        return (
            <>
                <div id="start" class="tab-pane fade active in">

                    <p><strong>Select you new sign up offer</strong></p>
                    <p>P.S First  sessions usually take  15 to 25 minutes, depending on the topic. Unused credit will be waiting for you next sessions.</p>
                    <form>
                        <div class="input-list">
                            <label class="custom_radio">10 minutes for <span><sup>$</sup>10</span> instead of <span><sup>$</sup>29.99</span>
                                <input type="radio" value="bronze" name="buy" onChange={this.onChange} />
                                <span class="checked"></span>
                            </label>
                        </div>
                        <div class="input-list">
                            <label class="custom_radio">20 minutes for <span><sup>$</sup>20</span> instead of <span><sup>$</sup>55.80</span>
                                <input type="radio" value="silver" name="buy" onChange={this.onChange} />
                                <span class="checked"></span>
                            </label>
                        </div>
                        <div class="input-list">
                            <label class="custom_radio">30 minutes for <span><sup>$</sup>30</span> instead of <span><sup>$</sup>70.70</span>
                                <input type="radio" value="gold" name="buy" onChange={this.onChange} />
                                <span class="checked"></span>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-default" onClick={this.onSubmit}>Enter Payment to Contiune</button>
                    </form>
                </div>
            </>
        )
    }
}
export default StartRegister;