import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import {
  ContactFormStyled,
  LabelInputStyled,
} from 'components/InputForm.jsx/ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });

    this.setState(({ name, number }) => ({
      contacts: [{ id: nanoid(5), name: name, number: number }],
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.contacts);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactFormStyled onSubmit={this.handleSubmit}>
        <LabelInputStyled>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelInputStyled>

        <LabelInputStyled>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelInputStyled>
        <Button>Add contact</Button>
      </ContactFormStyled>
    );
  }
}
