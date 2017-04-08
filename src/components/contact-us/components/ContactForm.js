import React from 'react'
import ContactFormMap from './ContactFormMap'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '',
                  lastName: '',
                  email: '',
                  message: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({firstName: event.target.value,
                   lastName: event.target.value,
                   email: event.target.value,
                   message: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstName);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <ContactFormMap />
      <div className="container contactFormSection">
      <div className="row">
      <div className="col-md-5">
        <h2 className="text-left contactHeading">Got a question?</h2>
        <p className="text-left contactPageBlurb">Whether you're a new customer interested in our services, or an existing customer seeking support, we would love to hear from you. Our talented staff of representatives are knowledgeable, responsive and ready to answer your questions.</p>
        <div className="companyInfo">
          <h3 className="text-left">Exceptional Integrations</h3>
          <p className="text-left">6340 S Sandhill Rd Ste 5</p>
          <p className="text-left">Las Vegas, NV 89120</p>
          <p className="text-left"><i className="glyphicon glyphicon-earphone"></i>  702.749.7700 |
          702.749.7701 (fax)</p>
        <p className="text-left"><i className="glyphicon glyphicon-envelope"></i> <a href="mailto:info@exceptionalintegrations.com" target="_top">info@exceptionalintegrations.com</a></p>
        </div>
      </div>
      <div className="col-md-6 formWork col-md-offset-1">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label className="pull-left">
          First Name:
        </label>
          <input type="text" ref="firstName" className="form-control contactFormInput" defaultValue={this.props.firstName} onChange={this.handleChange} />
        </div>
        <div className="form-group">
        <label className="pull-left">
          Last Name:
        </label>
          <input type="text" ref="lastName" className="form-control contactFormInput" defaultValue={this.props.lastName} onChange={this.handleChange} />
        </div>
        <div className="form-group">
        <label className="pull-left">
          Email:
        </label>
          <input type="email" ref="email" className="form-control contactFormInput" defaultValue={this.props.email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
        <label className="pull-left">
          Message:
        </label>
          <textarea type="text" ref="message" className="form-control contactFormInput" defaultValue={this.props.message} onChange={this.handleChange}></textarea>
        </div>
        <br/>
        <button type="submit" className="btn btn-lg pull-right" id="contactButton" value="Submit">Send</button>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default ContactForm
