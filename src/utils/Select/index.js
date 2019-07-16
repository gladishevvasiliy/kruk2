import React from 'react'
import { Input } from 'reactstrap'

const Select = ({ input, id, options, name }) => (
  <Input type="select" name={name} id={id} onChange={input.onChange}>
    {options.map(option => (
      <option>{option}</option>
    ))}
  </Input>
)

export default Select
