import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import updateProfile from '../../redux/action/userProfileAction';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';



class ReaderProfile extends React.Component {


    componentWillMount() {

        this.setState({ ...this.props.auth.userDetail })
    }

    state = {
        open: false

    }
    onChangeHandler = (evt) => {

        if (evt.target.name == 'dp_active_file') {
            this.setState({
                [evt.target.name]: URL.createObjectURL(evt.target.files[0])
            })
        } else {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }
        console.log(this.state);

    }

    updateData = (e) => {
        e.preventDefault()

        this.props.updatePro(this.state)

    }



    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };
    componentDidMount() {
        let gender = document.querySelectorAll('.gender')
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].value === this.state.gender) {
                gender[i].selected = true
            }
        }
    }
    render() {
        const { email, first_name, last_name, display_name, address, gender, ph_no, date_of_birth,about } = this.state

        return (
            <>
                <div style={{ margin: "50px 0px" }}>
                    <div class="container">
                        <div class="row wow fadeInUp">
                            <div class="col-xs-12 col-md-6">
                                <div class="custom_form">
                                    <form action="#">
                                        <div class="form-section" id="password">
                                            <h2 class="form-heading">Sign In Information</h2>
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email" 
                                                placeholder={email}
                                                value={email}
                                                name='email' onChange={this.onChangeHandler} />
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" name='cpassword' onChange={this.onChangeHandler} id="cpassword" placeholder="Current Password" disabled />
                                                    </div>
                                                </div>
                                                <div class="col-xs-4">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" name='new-password' onChange={this.onChangeHandler} id="cpassword" placeholder="New Password" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-4">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" id="cpassword" name='c_new_password' onChange={this.onChangeHandler} placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="name" 
                                                class="form-control" id="name" 
                                                placeholder={display_name}
                                                value={display_name} name="display_name" onChange={this.onChangeHandler} />
                                            </div>
                                            <button type="submit" class="btn btn-default" onClick={this.updateData}>Update</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="custom_form">
                                    <form action="#">
                                        <div class="form-section" id="password">
                                            <h2 class="form-heading">Personal Information</h2>
                                            <div class="row">
                                                <div class="col-xs-4 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder={first_name}
                                                value={first_name} name="first_name" onChange={this.onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control"
                                                         placeholder={last_name}
                                                         value={last_name} 
                                                         name="last_name" onChange={this.onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 col-md-12">
                                                    <div class="form-group">
                                                        <select class="form-control" name="country" onChange={this.onChangeHandler}>
                                                            <option value="">Select Nationality</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Åland Islands">Åland Islands</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="American Samoa">American Samoa</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Anguilla">Anguilla</option>
                                                            <option value="Antarctica">Antarctica</option>
                                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Bouvet Island">Bouvet Island</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina Faso">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Cape Verde">Cape Verde</option>
                                                            <option value="Cayman Islands">Cayman Islands</option>
                                                            <option value="Central African Republic">Central African Republic</option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Christmas Island">Christmas Island</option>
                                                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Congo">Congo</option>
                                                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                            <option value="Cook Islands">Cook Islands</option>
                                                            <option value="Costa Rica">Costa Rica</option>
                                                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czech Republic">Czech Republic</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican Republic">Dominican Republic</option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El Salvador">El Salvador</option>
                                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                            <option value="Faroe Islands">Faroe Islands</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="French Guiana">French Guiana</option>
                                                            <option value="French Polynesia">French Polynesia</option>
                                                            <option value="French Southern Territories">French Southern Territories</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Gambia">Gambia</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Gibraltar">Gibraltar</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Greenland">Greenland</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guadeloupe">Guadeloupe</option>
                                                            <option value="Guam">Guam</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guernsey">Guernsey</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-bissau">Guinea-bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hong Kong">Hong Kong</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Isle of Man">Isle of Man</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jersey">Jersey</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kiribati">Kiribati</option>
                                                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                            <option value="Korea, Republic of">Korea, Republic of</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macao">Macao</option>
                                                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Marshall Islands">Marshall Islands</option>
                                                            <option value="Martinique">Martinique</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mayotte">Mayotte</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Montserrat">Montserrat</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar">Myanmar</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nauru">Nauru</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                            <option value="New Caledonia">New Caledonia</option>
                                                            <option value="New Zealand">New Zealand</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Niue">Niue</option>
                                                            <option value="Norfolk Island">Norfolk Island</option>
                                                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Pitcairn">Pitcairn</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Puerto Rico">Puerto Rico</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Reunion">Reunion</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russian Federation">Russian Federation</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Saint Helena">Saint Helena</option>
                                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                            <option value="Saint Lucia">Saint Lucia</option>
                                                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San Marino">San Marino</option>
                                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                            <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Timor-leste">Timor-leste</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tokelau">Tokelau</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                            <option value="Tuvalu">Tuvalu</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="United States">United States</option>
                                                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Viet Nam">Viet Nam</option>
                                                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                            <option value="Western Sahara">Western Sahara</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <select class="form-control" name="gender" onChange={this.onChangeHandler}>
                                                            <option className="gender" value="" >Gender</option>
                                                            <option className="gender" value="male">Male</option>
                                                            <option className="gender" value="female">Female</option>
                                                            <option className="gender" value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                            <button type="submit" class="btn btn-default" onClick={this.updateData} name='personal'>Update</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="custom_form">
                                    <form action="#">
                                        <div class="form-section" id="password">
                                            <h2 class="form-heading">Payment Information</h2>
                                            <div class="row">
                                                <div class="col-xs-5">
                                                    <div class="form-group">
                                                        <select class="form-control" name="payment_method" onChange={this.onChangeHandler}>
                                                            <option value="">Payment Method</option>
                                                            <option value="Transferwise">Transferwise</option>
                                                            <option value="local_bank">Local Bank</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-xs-7">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" onChange={this.onChangeHandler} placeholder="Account Email" name="account_email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Account Number" name="acount_no" onChange={this.onChangeHandler} />
                                            </div>
                                            <button type="submit" class="btn btn-default" onClick={this.updateData}>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="custom_form">
                                    <form action="#">
                                        <div class="form-section" id="password">
                                            <h2 class="form-heading">Contact Information</h2>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="street" onChange={this.onChangeHandler} placeholder="Street" />
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-4 col-md-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="city" onChange={this.onChangeHandler} placeholder="City" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 col-md-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="zip_code" onChange={this.onChangeHandler} placeholder="Zip Code" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-4 col-md-4">
                                                    <div class="form-group">
                                                        <select class="form-control" id="address-country" name="country" onChange={this.onChangeHandler}>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="text"  placeholder={ph_no}
                                                         value={ph_no} class="form-control" id="phone" name="ph_no" onChange={this.onChangeHandler} />
                                            </div>
                                            <button type="submit" class="btn btn-default" onClick={this.updateData}>Update</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="custom_form">
                                    <form class="">
                                        <h2 class="form-heading">Psychic Profile</h2>
                                        <div class="form-group">
                                            <label>Change Your photo</label><br />
                                            <label class="label" data-toggle="tooltip" title="Change your avatar">
                                                <input type="file" class="form-control" id="inputt" name="dp_active_file" onChange={this.onChangeHandler} />
                                                <img class="rounded" id="avatar" src="https://avatars0.githubusercontent.com/u/3456749?s=160" alt="avatar" style={{ display: 'none' }} />
                                            </label>
                                            <div class="progress" style={{ display: 'none' }}>
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                                            </div>
                                            <div class="alert" role="alert" style={{ display: 'none' }}></div>
                                        </div>
                                        <div class="form-group">
                                            <label>About Me</label>
                                            <textarea class="form-control"   placeholder={about}
                                                         value={about} name="about" onChange={this.onChangeHandler} rows="3"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Experience & Qualification</label>
                                            <textarea class="form-control" name="my_experiences" onChange={this.onChangeHandler} rows="3"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Skills & Tools</label>
                                            <textarea class="form-control" name="skills" onChange={this.onChangeHandler} rows="3"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Specialities</label><br />
                                            <label class="checkbox-inline"><input type="checkbox" value="Love & Relationship" name="specialities" onChange={this.onChangeHandler} />Love & Relationship</label>
                                            <label class="checkbox-inline"><input type="checkbox" value="Career & work" name="specialities" onChange={this.onChangeHandler} />Career & work</label>
                                            <label class="checkbox-inline"><input type="checkbox" value="Deceased Loved Ones" name="specialities" onChange={this.onChangeHandler} />Deceased Loved Ones</label>
                                            <label class="checkbox-inline"><input type="checkbox" value="Destiny & life path" name="specialities" onChange={this.onChangeHandler} />Destiny & life path</label>
                                            <label class="checkbox-inline"><input type="checkbox" value="Dream Interpretation" name="specialities" onChange={this.onChangeHandler} />Dream Interpretation</label>
                                            <label class="checkbox-inline"><input type="checkbox" value="Life Coaching" name="specialities" onChange={this.onChangeHandler} />Life Coaching</label>
                                            <label class="checkbox-inline"><input type="checkbox" value="Pets & Animals" name="specialities" onChange={this.onChangeHandler} />Pets & Animals</label>
                                        </div>
                                        <button type="submit" class="btn btn-default" onClick={this.updateData}>Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <p> <a class="btn btn-default site-btn del pull-right"
                            data-toggle="modal" data-target="#delete_popup"
                            onClick={this.handleClickOpen}
                        ><i class="fa fa-trash"></i> Request account deletion</a></p>
                    </div>



                    <Dialog onClose={this.handleClose} open={this.state.open}
                        style={{
                            margin: 0
                        }}
                    >
                        <MuiDialogContent style={{
                            padding: 0,
                            margin: 0
                        }}>
                            <div class=" customPopup">
                                <div class="modal-dialog modal-sm" style={{
                                    margin: 0
                                }}>
                                    {/* <!-- Modal content--> */}
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <p><i class="fa fa-trash"></i><br />Are you sure you want to delete</p>
                                            <p>
                                                <button type="button" class="btn btn-default yes" data-dismiss="modal">Yes</button>
                                                <button type="button" class="btn btn-default no" data-dismiss="modal">No</button
                                                ></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MuiDialogContent>
                    </Dialog>

                </div>



            </>
        )
    }
}


let mapStateToProps = (store) => {
    console.log(store);


    return {
        auth: store.AuthReducer
    }
}

let mapDispatchToProps = (dispatch) => {

    return ({
        updatePro: (data) => {
            dispatch(updateProfile(data))
        },
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReaderProfile));