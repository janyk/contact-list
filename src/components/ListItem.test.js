import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

const props = {
  left: 'John Smith',
  right: '1-770-736-8031 x56442'
};

describe('ListItem', () => {
  const card = shallow(<ListItem {...props} />);

  it('renders the left value', () => {
    expect(card.find('.name h4').text()).toEqual(props.left);
  });

  it('renders the right value', () => {
    expect(card.find('.phone h4').text()).toEqual(props.right);
  });
});
