import React from 'react'
import { FavoriteNumber } from '../favorite-number';
import { render } from '@testing-library/react';
import user from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe('<FavoriteNumber />', () => {
  test('renders an input with a label "Favorite Number"', () => {
    const { getByLabelText } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    expect(input).toHaveAttribute('type', 'number')
  })

  test('entering an invalide value triggers an error message', () => {
    const { getByLabelText, getByRole, rerender, debug, queryByRole } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    user.type(input, '20')
    expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
    rerender(<FavoriteNumber max={30} />)
    expect(queryByRole('alert')).toBeNull()
  })
})
