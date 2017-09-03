import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  const nav = shallow(<Navigation />);

  it('renders two children', () => {
    expect(nav.find('.menu div DropdownButton').children().length).toEqual(2)
  });
});
