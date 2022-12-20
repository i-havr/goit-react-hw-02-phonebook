import React from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { InputForm } from 'components/InputForm.jsx/InputForm';
import { AppStyled } from './App.styled';

console.log(nanoid(10));

export class App extends React.Component {
  //   static defaultProps = { initialValue: 0 };
  //   static propTypes = {};

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = event => {
    event.preventDefault();
    console.log(event.target.value);

    this.setState(prevState => {
      prevState.contacts.push(event.target.textContent);
    });
  };

  // valueIncrement = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  // };

  render() {
    // const { good, neutral, bad } = this.state;
    // const options = Object.keys(this.state);
    return (
      <AppStyled>
        <Section title="Phonebook">
          <InputForm actionHandler={this.addContact} />
        </Section>
        <Section title="Contacts"></Section>
        {/* <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.valueIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage() || 0}
          />
        </Section> */}
      </AppStyled>
    );
  }
}
