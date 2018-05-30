import React from 'react'
import {render, getByText, Simulate} from 'react-testing-library'
import Header from '../header'
import 'dom-testing-library/extend-expect'
import {renderWithRouter} from '../../test-utils'

describe('Header', () => {

  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn()
    }
  })

  test('Header displays siteTitle prop', () => {
    let {container, getByText} = renderWithRouter(<Header siteTitle="Sushi Yum Yum"/>)
    expect(getByText('Sushi Yum Yum')).toHaveTextContent('Sushi Yum Yum')
  })
})