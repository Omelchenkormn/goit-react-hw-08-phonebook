import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label name="filter" htmlFor="filter">
      Find contacts by name
      <Input
        type="text"
        name="search"
        value={value}
        // id="filter"
        onChange={e => onChange(e.target.value)}
      />
    </Label>
  );
};

export default Filter;
