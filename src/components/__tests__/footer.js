import React from 'react';
import {
  render,
  queryByText,
  getByText,
  Simulate,
} from 'react-testing-library';
import Footer from '../footer';
import 'jest-dom/extend-expect';
import { renderWithRouter } from '../../test-utils';

describe('Footer', () => {
  let props = {
    title: 'Sushi Commerce',
    socialMedia: [
      {
        site: 'instagram',
        href: 'https://instagram.com',
      },
      {
        site: 'facebook',
        href: 'https://facebook.com',
      },
    ],
    hideFooter: false,
  };

  test('renders the title', () => {
    let { getByText, debug } = render(<Footer {...props} />);
    expect(getByText(/Sushi Commerce/)).toBeTruthy();
  });

  test('renders the copyright message', () => {
    let { getByText, debug } = render(<Footer {...props} />);
    expect(getByText(/Copyright/)).toBeTruthy();
  });

  test('renders social media buttons', () => {
    let { getByText, debug } = render(<Footer {...props} />);
    expect(getByText('instagram')).toBeTruthy();
    expect(getByText('facebook')).toBeTruthy();
  });

  test('is not rendered if hideFooter is set to true', () => {
    let { title, socialMedia } = props;
    let { queryByText } = render(
      <Footer title={title} socialMedia={socialMedia} hideFooter />,
    );
  });
});
