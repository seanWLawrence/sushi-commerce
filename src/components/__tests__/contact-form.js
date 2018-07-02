import React from 'react'
import {
  render,
  queryByText,
  getByText,
  renderIntoDocument,
  cleanup,
  fireEvent
} from 'react-testing-library'
import ContactForm, {validateEmail, encode} from '../contact-form'
import 'dom-testing-library/extend-expect'

describe('Contact form', () => {
  test('displays labels and submit button', () => {
    let {getByLabelText, getByText} = render(<ContactForm/>)

    expect(getByLabelText('Message')).toBeTruthy()
    expect(getByLabelText('Email')).toBeTruthy()
    expect(getByText('Send message')).toBeTruthy()
  })

  test('validates emails', () => {
    let goodEmails = ['hello@google.com', 'info@yahoo.com', 'yo@index.co.uk']
    let badEmails = ['he lo@google.com', 'infoyahoo.com', 'yo@index.', 'hi@gmail.c']
    let numberOfGoodEmails = goodEmails.length
    let numberOfBadEmails = badEmails.length
    let allEmails = goodEmails.concat(badEmails)

    expect(goodEmails.map(email => validateEmail(email))).toContain(true)
    expect(badEmails.map(email => validateEmail(email))).toContain(false)
  })

  test('encodes the data properly', () => {
    let data = {
      email: 'hello@gmail.com',
      message: 'I would like to talk'
    }
    expect(encode(data)).toBe("email = hello%40gmail.com&message = I%20would%20like%20to%20talk")
  })
  test('TODO: submits form on button click', () => {
    let {getByText, Simulate} = renderIntoDocument(<ContactForm/>)
    let submitButton = getByText('Send message')
    let rightClick = {
      button: 0
    }
  })
  test('TODO: displays text as it is typed', () => {})
  test('TODO: shows red border on invalid email', () => {})
  test('TODO: redirects to /contact-form-success on successful submit', () => {})
  test('TODO: displays alert() with error message on failed submit', () => {})
})
