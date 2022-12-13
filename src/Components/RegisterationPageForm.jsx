import React from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import "../Styles/form.css";

class RegisterationPageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    console.log(this.state)
  }

  handleChange2(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.checked;
    this.setState({
      fields
    });
    console.log(this.state)
  }

  submituserRegistrationForm(e) {
    const URL = "http://localhost:3000/post-in-queue";
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["name_reg"] = "";
      fields["mobileno"] = "";
      fields["npeople_reg"] = "";
      fields["bowling"] = false;
      fields["billiards"] = false;


      this.setState({fields: fields});
      axios.post(URL, {
        "name": this.state.fields["name_reg"],
        "mobile": this.state.fields["mobileno"],
        "people": this.state.fields["npeople_reg"],
        "bowling": this.state.fields["bowling"],
        "billiards": this.state.fields["billiards"],
      })
          .then(function (response) {
            console.log(response);
            alert("your token id is:");
          })
          .catch(function (error) {
            console.log(error);
          });


    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name_reg"]) {
      formIsValid = false;
      errors["name_reg"] = "*Please enter your username.";
    } else {
      errors["name_reg"] = "";
    }

    if (typeof fields["name_reg"] !== "undefined") {
      if (!fields["name_reg"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name_reg"] = "*Please enter alphabet characters only.";
      } else {
        errors["name_reg"] = "";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    } else {
      errors["mobileno"] = "";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      } else {
        errors["mobileno"] = "";
      }
    }

    if (!fields["npeople_reg"]) {
      formIsValid = false;
      errors["npeople_reg"] = "*Please enter number of people";
    } else {
      errors["npeople_reg"] = "";
    }

    if (typeof fields["npeople_reg"] !== "undefined") {
      if (!fields["npeople_reg"].match(/^[0-9]{1}$/) || !parseInt(fields["npeople_reg"])>0) {
        formIsValid = false;
        errors["npeople_reg"] = "*Please enter number between 0 & 10";
      }else{
        errors["npeople_reg"] = "";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
        <MDBContainer fluid>

          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput required label='Name' name='name_reg' value={this.state.fields.name_reg}
                              onChange={this.handleChange} id='name_reg' type='text' className='w-100'/>
                    <div className="errorMsg">{this.state.errors.name_reg}</div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="phone me-3" size='lg'/>
                    <MDBInput required label='Mobile Number' name='mobileno' id='number_reg' type='rel'
                              value={this.state.fields.mobileno} onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="users me-3" size='lg'/>
                    <MDBInput required label='Number of people' name='npeople_reg' id='npeople_reg'
                              type='number' min="0" value={this.state.fields.npeople_reg}
                              onChange={this.handleChange}/>
                    <div className="errorMsg">{this.state.errors.npeople_reg}</div>
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBCheckbox name='bowling' id='flexCheckDefault' label='Bowling' onChange={this.handleChange2}
                        />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBCheckbox name='billiards' id='flexCheckDefault' label='Billiards' onChange={this.handleChange2}
                        />
                      </MDBCol>
                    </MDBRow>
                  </div>

                  <MDBBtn className='mb-4' size='lg'
                          onClick={this.submituserRegistrationForm}>Submit</MDBBtn>

                </MDBCol>

                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                      fluid/>
                </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>

        </MDBContainer>
    );
  }
}

export default RegisterationPageForm;