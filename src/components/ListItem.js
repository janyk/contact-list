import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    const { left, right } = this.props;

    return (
      <div className='list-item'>
        <div className='name'>
          <h4>{left}</h4>
        </div>
        <div className='phone'>
          <h4>{right}</h4>
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
}

export default ListItem;
