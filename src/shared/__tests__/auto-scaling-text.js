import React from 'react'
import { render } from 'react-testing-library'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  const { container: { innerHTML } } = render(<AutoScalingText />)
  // console.log({ innerHTML })
})
