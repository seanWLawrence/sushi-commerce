// @flow
import React from 'react';
import { navigateTo } from 'gatsby-link';

export let validateEmail = (email: string) => {
  // regular expression that returns true if the input has the correct format for
  // emails, i.e. test@test.com
  let emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailValidator.test(email);
};

let InputField = ({ isInvalid, onChange, onBlur, value }) => {
  let inputStyles = isInvalid ? 'input is-danger' : 'input';

  return (
    <input
      id="email"
      name="email"
      type="email"
      onChange={onChange}
      required
      onBlur={onBlur}
      className={inputStyles}
      value={value}
    />
  );
};

type EmailProps = {
  value: string,
  onChange: string => void,
};

type EmailState = {
  isInvalid: boolean,
};

class EmailInput extends React.Component<EmailProps, EmailState> {
  state = {
    isInvalid: false,
  };

  _handleChange = event => {
    let { value } = event.currentTarget;
    let { onChange } = this.props;
    let { isInvalid } = this.state;

    onChange(value);

    if (isInvalid) {
      if (validateEmail(value)) {
        this.setState({ isInvalid: false });
      }
    }
  };

  _handleBlur = event => {
    let { value } = event.currentTarget;

    if (!validateEmail(value)) {
      this.setState({ isInvalid: true });
    }
  };

  render() {
    let { isInvalid } = this.state;
    let { value } = this.props;

    return (
      <section className="input-field field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <section className="control">
          <InputField
            onChange={this._handleChange}
            onBlur={this._handleBlur}
            isInvalid={isInvalid}
            value={value}
          />
        </section>
      </section>
    );
  }
}

type MessageProps = {
  onChange: string => void,
  value: string,
};

class MessageInput extends React.Component<MessageProps> {
  _handleChange = event => this.props.onChange(event.currentTarget.value);

  render() {
    let { value } = this.props;
    return (
      <section className="input-field field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <section className="control">
          <textarea
            id="message"
            name="message"
            onChange={this._handleChange}
            required
            className="textarea"
            value={value}
          />
        </section>
      </section>
    );
  }
}

type Encode = {
  email: string,
  message: string,
};

export let encode = (data: Encode) => {
  // formats the input to the proper escaped text to send via ContactForm
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join('&');
};

let SubmitButton = () => (
  <button className="button is-primary is-rounded" type="submit">
    Send message
  </button>
);

type ContactState = {
  email: string,
  message: string,
};

export default class ContactForm extends React.Component<{}, ContactState> {
  state = {
    email: '',
    message: '',
  };

  _handleInputFieldChange = (value: string) => this.setState({ email: value });

  _handleTextAreaChange = (value: string) => this.setState({ message: value });

  _handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    // submits the form values via a fetch request

    let { email, message } = this.state;

    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    let body = encode({ 'form-name': 'contact-form', email, message });

    let errorMessage = (error: string) =>
      `Sorry, there was a problem sending your request. Please try again. - Error: ${error}`;

    event.preventDefault();
    console.log('clicked!');

    fetch('/', {
      method: 'POST',
      headers,
      body,
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          // on successful submission, opens success page
          navigateTo('/contact-form-success/');
        }
      })
      .catch(error =>
        // on failed submission, alerts error message
        alert(errorMessage(error))
      );
  };

  render() {
    let { email, message } = this.state;
    return (
      <form
        id="contact-form"
        className="form"
        name="contact-form"
        method="POST"
        action="/contact-form-success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this._handleSubmit}
      >
        <input type="hidden" name="contact-form" value="contact-form" />
        <input name="bot-field" hidden /> {/*for Netlify to catch bots*/}
        <EmailInput onChange={this._handleInputFieldChange} value={email} />
        <MessageInput onChange={this._handleTextAreaChange} value={message} />
        <SubmitButton />
      </form>
    );
  }
}
