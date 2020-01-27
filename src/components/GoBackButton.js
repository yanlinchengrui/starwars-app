import React from 'react';
import { Button } from 'semantic-ui-react';

const goBackButton = (props) => (
  <Button content='Go Back' onClick={() => props.history.goBack()} />
);

export default goBackButton;