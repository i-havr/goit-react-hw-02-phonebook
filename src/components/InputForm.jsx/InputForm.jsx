// import PropTypes from 'prop-types';

import { InputFormStyled } from './InputForm.styled';
import { Button } from 'components/Button/Button';

export const InputForm = ({ actionHandler }) => {
  return (
    <InputFormStyled onSubmit={actionHandler}>
      <label>
        <b>Name</b>
        {/* <h3>{title}</h3> */}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <Button>Add contact</Button>
    </InputFormStyled>
  );
};
