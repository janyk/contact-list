import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import { setContacts, pickContact } from '../actions';

export class App extends Component {
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.props.setContacts(json));
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <hr />
        {
          this.props.contacts.map(contact => {
            return (
              <Link
                key={contact.id}
                to='/contact'
                onClick={() => this.props.pickContact(contact)}
              >
                <ListItem {...contact}/>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { contacts: state.contacts }
}

export default connect(mapStateToProps, { setContacts, pickContact })(App);
