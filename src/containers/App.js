import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Nav from '../components/Navigation'
import ListItem from '../components/ListItem';

import ContactActions from '../redux/ContactRedux'

export class App extends Component {
  constructor() {
    super();

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.props.setContacts(json));
  }

  handleChange(event) {
    this.props.searchContacts(event.target.value)
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='contact-list-header'>
          <h1>Contact List</h1>
              <FormControl
                placeholder='Search contact list'
                onChange={this.handleChange} />
        </div>
        <hr />
        {
          this.props.results.map(contact => {
            return (
              <Link
                key={contact.id}
                to='/contact'
                onClick={() => this.props.selectContact(contact)}
              >
                <ListItem left={contact.name} right={contact.phone}/>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.contact.results
   }
}

function mapDispatchToProps(dispatch) {
  return {
    setContacts: (contacts) => dispatch(ContactActions.setContacts(contacts)),
    selectContact: (contact) => dispatch(ContactActions.selectContact(contact)),
    searchContacts: (searchTerm) => dispatch(ContactActions.searchContacts(searchTerm))
  }
}

App.propTypes = {
  results: PropTypes.array
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
