import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = {
  name: 'John Smith',
  phone: '1-770-736-8031 x56442'
};

describe('Card', () => {
  const card = shallow(<Card {...props} />);

  it('renders the contact name', () => {
    expect(card.find('.name h4').text()).toEqual(props.name);
  });

  it('renders the contact number', () => {
    expect(card.find('.phone h4').text()).toEqual(props.phone);
  });
});
