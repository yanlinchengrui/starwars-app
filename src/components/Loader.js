import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const loader = () => (
  <Dimmer active >
    <Loader >
      Loading...
    </Loader>
  </Dimmer>
);

export default loader;