import React from 'react';
import { ContactForm } from 'components/InputForm.jsx/ContactForm';
import { Section } from 'components/Section/Section';
import { AppStyled } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    this.state.contacts.some(contact => contact.name === data[0].name)
      ? alert(`${data[0].name} is already in contacts.`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, ...data] }));
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <Section title="Contacts">
          <Filter filter={filter} onChange={this.filterChange} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteButton={this.deleteContact}
          ></ContactsList>
        </Section>
      </AppStyled>
    );
  }
}
