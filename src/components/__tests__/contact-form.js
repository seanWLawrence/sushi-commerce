import React from 'react';
import {
  render,
  queryByText,
  getByText,
  renderIntoDocument,
  cleanup,
  fireEvent,
  Simulate,
} from 'react-testing-library';
import Contact from '../../pages';

import { renderWithRouter } from '../../test-utils';
import ContactForm, { validateEmail, encode } from '../contact-form';
import 'jest-dom/extend-expect';

describe('Contact form', () => {
  afterEach(cleanup);
  test('displays labels and submit button', () => {
    let { getByLabelText, getByText } = render(<ContactForm />);

    expect(getByLabelText('Message')).toBeTruthy();
    expect(getByLabelText('Email')).toBeTruthy();
    expect(getByText('Send message')).toBeTruthy();
  });

  test('validates emails', () => {
    let goodEmails = ['hello@google.com', 'info@yahoo.com', 'yo@index.co.uk'];

    let badEmails = [
      'he lo@google.com',
      'infoyahoo.com',
      'yo@index.',
      'hi@gmail.c',
    ];

    let numberOfExpectedGoodEmails = goodEmails.length;
    let numberOfExpectedBadEmails = badEmails.length;

    // join all emails together to lopp over later and sort good and bad emails
    let allEmails = goodEmails.concat(badEmails);

    // get number of emails that passed
    let numberOfActualGoodEmails = allEmails
      .map((email) => validateEmail(email))
      .filter(Boolean).length;

    // get amount of emails that failed
    let numberOfActualBadEmails = allEmails
      .map((email) => validateEmail(email))
      .filter((isValid) => isValid === false).length;

    // expect the same number of goodEmails passed in to pass
    expect(numberOfActualGoodEmails).toEqual(numberOfExpectedGoodEmails);

    // expect the same number of badEmails passed in to fail
    expect(numberOfActualBadEmails).toEqual(numberOfExpectedBadEmails);
  });

  test('encodes the data properly before submitting it to the server', () => {
    // example input data
    let data = {
      email: 'hello@gmail.com',
      message: 'I would like to talk',
    };

    // expect the encode function to encode the data to a URL friendly string
    expect(encode(data)).toBe(
      'email=hello%40gmail.com&message=I%20would%20like%20to%20talk',
    );
  });

  test('submits form on button click', () => {
    let { getByText } = render(<ContactForm />);
    let submitButton = getByText('Send message');

    fireEvent(
      submitButton,
      new MouseEvent('click', {
        bubbles: true, // click events must bubble for React to see it
        cancelable: true,
      }),
    );

    expect(fetch.mock.calls).toHaveLength(1);
  });

  test('displays email field\'s text as it is typed', () => {
    let { getByLabelText } = render(<ContactForm />);

    let emailField = getByLabelText('Email');

    emailField.value = 't';
    fireEvent.change(emailField);
    expect(emailField.value).toBe('t');

    emailField.value = 'te';
    fireEvent.change(emailField);
    expect(emailField.value).toBe('te');

    emailField.value = 'test';
    fireEvent.change(emailField);
    expect(emailField.value).toBe('test');
  });

  test('displays message field\'s text as it is typed', () => {
    let { getByLabelText } = render(<ContactForm />);

    let messageField = getByLabelText('Message');

    messageField.value = 't';
    fireEvent.change(messageField);
    expect(messageField.value).toBe('t');

    messageField.value = 'te';
    fireEvent.change(messageField);
    expect(messageField.value).toBe('te');

    messageField.value = 'test';
    fireEvent.change(messageField);
    expect(messageField.value).toBe('test');
  });

  test('shows red border on invalid email change and blur events', () => {
    let { getByLabelText } = render(<ContactForm />);

    let emailField = getByLabelText('Email');

    emailField.value = 't';
    fireEvent.change(emailField);
    fireEvent.blur(emailField);
    expect(emailField).toHaveClass('is-danger');
  });

  test('removes red border on valid email change', () => {
    let { getByLabelText } = render(<ContactForm />);

    let emailField = getByLabelText('Email');

    emailField.value = 't';
    fireEvent.change(emailField);
    fireEvent.blur(emailField);
    expect(emailField).toHaveClass('is-danger');

    emailField.value = 'test@gmail.com';
    fireEvent.change(emailField);
    expect(emailField).not.toHaveClass('is-danger');
  });

  test('TODO: redirects to /contact-form-success on successful submit', () => {});
  test('displays alert() with error message on submit when you data is entered', () => {
    let { getByText } = render(<ContactForm />);
    let submitButton = getByText('Send message');

    fireEvent(
      submitButton,
      new MouseEvent('click', {
        bubbles: true, // click events must bubble for React to see it
        cancelable: true,
      }),
    );

    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test('TODO: changes page on successful submit with data', () => {});
});
