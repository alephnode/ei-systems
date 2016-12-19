import React from 'react'

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
      <form onSubmit={this.handleSubmit}>
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <div className="form-group">
        <label>
          First Name:
        </label>
          <input type="text" ref="firstName" className="form-control" defaultValue={this.props.firstName} onChange={this.handleChange} />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <div className="form-group">
        <label>
          Last Name:
        </label>
          <input type="text" ref="lastName" className="form-control" defaultValue={this.props.lastName} onChange={this.handleChange} />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <div className="form-group">
        <label>
          Email:
        </label>
          <input type="email" ref="email" className="form-control" defaultValue={this.props.email} onChange={this.handleChange} />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <div className="form-group">
        <label>
          Message:
        </label>
          <textarea type="text" ref="message" className="form-control" defaultValue={this.props.message} onChange={this.handleChange}></textarea>
        </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
      </form>
    );
  }
}

export default ContactForm
