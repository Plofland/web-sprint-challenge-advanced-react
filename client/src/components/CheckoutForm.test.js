import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  //Arrange
  render(<CheckoutForm />);

  //Act
  const header = screen.getByText(/checkout form/i);

  //Assert
  expect(header).toBeTruthy();
});

test('form shows success message on submit with form details', () => {
  //Arrange
  render(<CheckoutForm />);

  //Act

  //grab the input locations
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  //type into the input fields
  userEvent.type(firstNameInput, 'Joe');
  userEvent.type(lastNameInput, 'Noe');
  userEvent.type(addressInput, '123 Fake St.');
  userEvent.type(cityInput, 'No Name');
  userEvent.type(stateInput, 'CO');
  userEvent.type(zipInput, '81601');

  //click the submit button
  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  //Assert
  const successMessage = screen.getByTestId(/successMessage/i);
  expect(successMessage).toBeTruthy();
});
