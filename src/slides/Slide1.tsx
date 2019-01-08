import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="slideRight"
    background="accent-1"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    {`
      # Slide 1
    `}
  </Slide>
);
