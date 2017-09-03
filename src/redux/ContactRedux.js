import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchContacts: ['searchTerm'],
  cancelSearch: null,
  setContacts: ['contacts'],
  selectContact: ['contact'],

})

export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  contacts: [],
  contact: {},
  results: []
})

/* ------------- Reducers ------------- */

export const setContacts = (state, { contacts }) => state.merge({ contacts, results: contacts })

export const selectContact = (state, { contact }) => state.merge({ contact })

export const searchContacts = (state, { searchTerm }) => {
  if (searchTerm.length < 1) return state.merge({ results: state.contacts })

  const results = state.contacts.filter(contact => contact.name.match(new RegExp(searchTerm, 'i')))

  return state.merge({ results })
}


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_CONTACTS]: searchContacts,
  [Types.SET_CONTACTS]: setContacts,
  [Types.SELECT_CONTACT]: selectContact
})
