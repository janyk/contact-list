import Actions, { reducer, INITIAL_STATE } from './ContactRedux'
const contact = { name: 'John Smith' }
const contacts = [contact]

test('setContacts', () => {

  const state = reducer(INITIAL_STATE, Actions.setContacts(contacts))

  expect(state.contacts.length).toBe(1)
  expect(state.results.length).toBe(1)
})

test('selectContact', () => {
  const state = reducer(INITIAL_STATE, Actions.selectContact(contact))

  expect(state.contact.name).toBe('John Smith')
})

test('searchTerm has no match', () => {
  let state = reducer(INITIAL_STATE, Actions.setContacts(contacts))
  state = reducer(state, Actions.searchContacts('PHRASE'))
  expect(state.results.length).toBe(0)
})
