import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { contacts } from '../data/fixtures';

const props = { contacts };

describe('App', () => {
  const app = shallow(<App {...props} />);

  it('renders the title', () => {
    expect(app.find('h1').text()).toEqual('Contact List');
  });
});
