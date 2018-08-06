// @flow
import React from 'react';
import bulmaClassnames from '../utils';
import { PageTitle } from '../components/titles';
import ContactForm from '../components/contact-form';

let Contact = () => {
  let outerSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
  };

  let innerSectionStylesInline = {
    maxWidth: '500px',
  };

  let innerSectionStyles = bulmaClassnames({
    column: ['4-desktop', '6-tablet', '11-mobile'],
  });

  let textStyles = bulmaClassnames({ raw: 'title', textSize: '2' });

  return (
    <div style={outerSectionStyles}>
      <h1 className={textStyles}>Contact us</h1>
      <div style={innerSectionStylesInline} className={innerSectionStyles}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
