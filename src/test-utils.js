import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Link from 'gatsby-link';

export function renderWithRouter(ui, { route = '/', ...renderOptions } = {}) {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull());
  return {
    ...utils,
    finishLoading,
    history,
  };
}

/* add this before gatby-link tests
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn()
    }
  })
*/
