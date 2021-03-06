import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Navigation'

export class Contact extends Component {
  render() {
    const contact = this.props.contact
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='card'>
            <div className='content'>
              <div className='head text'>
                <h2>{contact.name}</h2>
                <h4>{contact.company.name}</h4>
              </div>
              <ul className='details text'>
                <li>Phone: {contact.phone}</li>
                <li>Email: {contact.email}</li>
                <li>URL: {contact.website}</li>
              </ul>
            </div>
            <div className='tagLine text'><i>"{contact.company.catchPhrase}"</i></div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { contact: state.contact.contact }
}

export default connect(mapStateToProps, null)(Contact);
