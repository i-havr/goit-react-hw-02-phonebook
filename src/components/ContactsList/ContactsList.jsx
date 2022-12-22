import PropTypes from 'prop-types';
import { ButtonDelete } from 'components/Button/ButtonDelete';
import {
  ContactsListStyled,
  MarkerStyled,
  ItemListStyled,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteButton }) => {
  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <MarkerStyled key={id}>
            <ItemListStyled>
              {`${name}: ${number}`}
              <ButtonDelete actionHandler={() => onDeleteButton(id)}>
                X
              </ButtonDelete>
            </ItemListStyled>
          </MarkerStyled>
        );
      })}
    </ContactsListStyled>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    }).isRequired
  ),
  onDeleteButton: PropTypes.func.isRequired,
};
