import React from 'react'
import { getInvoices } from '../../redux/action/invoicesAction'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


class ReaderInvoice extends React.Component {
    constructor(props) {
		super(props)
		props.invoicesList()
	}
	state = {
		invoices: '',
		msg: ''
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				invoices: this.props.invoices.invoicesList
			})
			console.log(this.state);
		}, 1500);


	}
	shouldComponentUpdate(newProps, newState) {
		return true;
	}
    render() {
        return (
            <>
                <div style={{ margin: "50px 0px" }}>
                    <div class="wow fadeInUp container">
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <div class="row">
                                    <div class="col-xs-12 col-md-4">
                                        <h3 class="section-title-sub" style={{
                                            textAlign: "left",
                                            padding: "5px 0px"
                                        }}>Invoice List</h3>
                                    </div>
                                    <div class="col-xs-12 col-md-8">
                                        <form class="form-inline form-searchbar" action="http://localhost/action_page.php">
                                            <div class="form-group">
                                                <label for="email">Year</label>
                                                <select class="form-control">
                                                    <option value="2020">2020</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2009">2009</option>
                                                    <option value="2008">2008</option>
                                                    <option value="2007">2007</option>
                                                    <option value="2006">2006</option>
                                                    <option value="2005">2005</option>
                                                    <option value="2004">2004</option>
                                                    <option value="2003">2003</option>
                                                    <option value="2002">2002</option>
                                                    <option value="2001">2001</option>
                                                    <option value="2000">2000</option>
                                                    <option value="1999">1999</option>
                                                    <option value="1998">1998</option>
                                                    <option value="1997">1997</option>
                                                    <option value="1996">1996</option>
                                                    <option value="1995">1995</option>
                                                    <option value="1994">1994</option>
                                                    <option value="1993">1993</option>
                                                    <option value="1992">1992</option>
                                                    <option value="1991">1991</option>
                                                    <option value="1990">1990</option>
                                                    <option value="1989">1989</option>
                                                    <option value="1988">1988</option>
                                                    <option value="1987">1987</option>
                                                    <option value="1986">1986</option>
                                                    <option value="1985">1985</option>
                                                    <option value="1984">1984</option>
                                                    <option value="1983">1983</option>
                                                    <option value="1982">1982</option>
                                                    <option value="1981">1981</option>
                                                    <option value="1980">1980</option>
                                                    <option value="1979">1979</option>
                                                    <option value="1978">1978</option>
                                                    <option value="1977">1977</option>
                                                    <option value="1976">1976</option>
                                                    <option value="1975">1975</option>
                                                    <option value="1974">1974</option>
                                                    <option value="1973">1973</option>
                                                    <option value="1972">1972</option>
                                                    <option value="1971">1971</option>
                                                    <option value="1970">1970</option>
                                                    <option value="1969">1969</option>
                                                    <option value="1968">1968</option>
                                                    <option value="1967">1967</option>
                                                    <option value="1966">1966</option>
                                                    <option value="1965">1965</option>
                                                    <option value="1964">1964</option>
                                                    <option value="1963">1963</option>
                                                    <option value="1962">1962</option>
                                                    <option value="1961">1961</option>
                                                    <option value="1960">1960</option>
                                                    <option value="1959">1959</option>
                                                    <option value="1958">1958</option>
                                                    <option value="1957">1957</option>
                                                    <option value="1956">1956</option>
                                                    <option value="1955">1955</option>
                                                    <option value="1954">1954</option>
                                                    <option value="1953">1953</option>
                                                    <option value="1952">1952</option>
                                                    <option value="1951">1951</option>
                                                    <option value="1950">1950</option>
                                                    <option value="1949">1949</option>
                                                    <option value="1948">1948</option>
                                                    <option value="1947">1947</option>
                                                    <option value="1946">1946</option>
                                                    <option value="1945">1945</option>
                                                    <option value="1944">1944</option>
                                                    <option value="1943">1943</option>
                                                    <option value="1942">1942</option>
                                                    <option value="1941">1941</option>
                                                    <option value="1940">1940</option>
                                                    <option value="1939">1939</option>
                                                    <option value="1938">1938</option>
                                                    <option value="1937">1937</option>
                                                    <option value="1936">1936</option>
                                                    <option value="1935">1935</option>
                                                    <option value="1934">1934</option>
                                                    <option value="1933">1933</option>
                                                    <option value="1932">1932</option>
                                                    <option value="1931">1931</option>
                                                    <option value="1930">1930</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="pwd">Month </label>
                                                <select class="form-control">
                                                    <option value="1">All</option>
                                                    <option value="January">January</option>
                                                    <option value="Febuary">Febuary</option>
                                                    <option value="March">March</option>
                                                    <option value="April">April</option>
                                                    <option value="May">May</option>
                                                    <option value="June">June</option>
                                                    <option value="July">July</option>
                                                    <option value="August">August</option>
                                                    <option value="September">September</option>
                                                    <option value="October">October</option>
                                                    <option value="November">November</option>
                                                    <option value="December">December</option>
                                                </select>
                                            </div>
                                            <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Search</button>
                                        </form>
                                    </div>
                                </div>
                                <br />
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th class="active">S#</th>
                                            <th class="active">Invoice</th>
                                            <th class="active">Date</th>
                                            <th class="active">Amount </th>
                                            <th class="active">Currency</th>
                                            <th class="active">Transection</th>
                                            <th class="active">Payment Method</th>
                                            <th class="active">Action</th>
                                        </tr>
                                        {this.state.invoices

                                            ?

                                            this.state.invoices.map((item, index) => {

                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.invoice_name}</td>
                                                    <td>{item.date}</td>
                                                    <td>$50</td>
                                                    <td>{item.currency}</td>
                                                    <td>Completed</td>
                                                    <td>{item.payment_method}</td>
                                                    <td>
                                                        {/* <a class='badge del' data-toggle="modal" data-target="#myModal"> <i class="fa fa-download"></i> Download</a> */}
                                                        {/* <div class="dropdown">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">More
                                                        <span class="caret"></span></button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">View Detail</a></li>
                                                        </ul>
                                                    </div> */}
                                                        <Link class="badge blue" to="#">  
                                                        <i class="fa fa-edit"></i> Edit</Link>
                                                        <a class="badge delete" data-toggle="modal" data-target="#delete_popup" > 
                                                        {/* <i class="fa fa-trash"></i> */}
                                                        <i class="fa fa-external-link"></i> View Detail</a>
                                                    </td>
                                                </tr>
                                            })

                                            : console.log("working")
                                        }
                                        {/* <tr>
                                                <td>2</td>
                                                <td>#01FFFF</td>
                                                <td>15/09/2018</td>
                                                <td>$71</td>
                                                <td>Usd</td>
                                                <td>Completed</td>
                                                <td>Paypal</td>
                                                <td>
                                                    <a class='badge del' data-toggle="modal" data-target="#myModal"> <i class="fa fa-download"></i> Download</a>
                                                    <div class="dropdown">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">More
                                                        <span class="caret"></span></button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">View Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>#01FFFF</td>
                                                <td>15/09/2018</td>
                                                <td>$32</td>
                                                <td>Usd</td>
                                                <td>Completed</td>
                                                <td>Stripe</td>
                                                <td>
                                                    <a class='badge del' data-toggle="modal" data-target="#myModal"> <i class="fa fa-download"></i> Download</a>
                                                    <div class="dropdown">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">More
                                                        <span class="caret"></span></button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">View Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>#01FFFF</td>
                                                <td>15/09/2018</td>
                                                <td>$50</td>
                                                <td>Usd</td>
                                                <td>Panding</td>
                                                <td>Stripe</td>
                                                <td>
                                                    <a class='badge del' data-toggle="modal" data-target="#myModal"> <i class="fa fa-download"></i> Download</a>
                                                    <div class="dropdown">
                                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">More
                                                        <span class="caret"></span></button>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">View Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


let mapStateToProps = (store) => {
    console.log(store.InvoicesReducer);

    return {
        invoices: store.InvoicesReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        invoicesList: () => {
            dispatch(getInvoices())
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderInvoice));