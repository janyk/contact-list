import * as actions from './index';
import { contacts } from '../data/fixtures';

describe('actions', () => {
  it('creates an action to set contacts', () => {
    const expectedAction = {
      type: actions.SET_CONTACTS,
      contacts
    };

    expect(actions.setContacts(contacts)).toEqual(expectedAction);
  });
});
