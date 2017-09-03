import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../components/Navigation'
import ListItem from '../components/ListItem';

export class AlphabetCount extends Component {
  render() {
    //reduce function which gets how many contacts there are that start with each letter of the alphabet.
    const alphaCount = this.props.contacts.reduce(function(obj,item){

      obj[item.name.toUpperCase()[0]] = obj[item.name.toUpperCase()[0]] || 0;
      obj[item.name.toUpperCase()[0]] += 1;

      return obj;
    }, {});

    return (
      <div>
        <Nav />
        <div className='alphabet-list-header'>
          <h1>Alphabetic Contact Count</h1>
        </div>
        <hr />
          {
            Object.keys(alphaCount).map(function(key) {
              return <ListItem key={key} left={key} right={alphaCount[key]} />
            })
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contact.contacts
   }
}

export default connect(mapStateToProps, null)(AlphabetCount);
