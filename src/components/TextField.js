import React from 'react';
import { Input } from 'semantic-ui-react';

const TextField = ({ inputHandler }) => (
  <Input
    onChange={inputHandler}
    label="Search"
    icon="search"
    placeholder="Search..."
  />
);

export default TextField;
