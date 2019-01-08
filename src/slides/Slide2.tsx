import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="zoomIn"
    background={{
      dark: true,
      image: "url(hunt-for-the-wilderpeople.jpg)",
    }}
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    {`
# Slide 2
    `}
  </Slide>
);
