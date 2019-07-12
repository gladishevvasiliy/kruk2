import React from 'react'
import { Input } from 'reactstrap'

const Select = ({ input, id }) => (
  <Input type="select" name="select" id={id} onChange={input.onChange}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
)

export default Select
