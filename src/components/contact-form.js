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
  onChange: (string) => void,
};

type EmailState = {
  isInvalid: boolean,
};

class EmailInput extends React.Component<EmailProps, EmailState> {
  state = {
    isInvalid: false,
  };

  _handleChange = (event) => {
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

  _handleBlur = (event) => {
    let { value } = event.currentTarget;

    if (!validateEmail(value)) {
      this.setState({ isInvalid: true });
    }
  };

  render() {
    let { isInvalid } = this.state;
    let { value } = this.props;

    return (
      <div className="input-field field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <InputField
            onChange={this._handleChange}
            onBlur={this._handleBlur}
            isInvalid={isInvalid}
            value={value}
          />
        </div>
      </div>
    );
  }
}

type MessageProps = {
  onChange: (string) => void,
  value: string,
};

class MessageInput extends React.Component<MessageProps> {
  _handleChange = (event) => this.props.onChange(event.currentTarget.value);

  render() {
    let { value } = this.props;
    return (
      <div className="input-field field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea
            id="message"
            name="message"
            onChange={this._handleChange}
            required
            className="textarea"
            value={value}
          />
        </div>
      </div>
    );
  }
}

type EncodeData = {
  'form-name': string,
  email: string,
  message: string,
};

export let encode = (data: EncodeData) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
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

  _handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    let { email, message } = this.state;
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        email,
        message,
      }),
    })
      .then(() => navigateTo('/contact-form-success/'))
      .catch((error) => alert(error));
  };

  render() {
    let { email, message } = this.state;
    return (
      <form
        className="form"
        name="contact-form"
        method="post"
        action="/contact-form-success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this._handleSubmit}
      >
        <input type="hidden" name="contact-form" value="contact-form" />
        <p hidden>
          <input name="bot-field" onChange={this._handleInputFieldChange} />
        </p>
        <EmailInput onChange={this._handleInputFieldChange} value={email} />
        <MessageInput onChange={this._handleTextAreaChange} value={message} />
        <SubmitButton />
      </form>
    );
  }
}

/* type ContactFormProps = {
  email: string,
  message: string,
};

export default class ContactForm extends React.Component<{}, ContactFormProps> {
  state = {
    email: '',
    message: '',
  };

  _handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  _handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    let { email, message } = this.state;
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        email,
        message,
      }),
    })
      .then(() => navigateTo('/contact-form-success/'))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact-form"
          method="post"
          action="/contact-form-success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="contact-form" value="contact-form" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <label>
              Email:<br />
              <input type="email" name="email" onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
*/
