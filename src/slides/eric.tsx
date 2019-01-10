import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background="neutral-2"
    >
    {`

      # eric soderberg
      ## grommet founder, head of grommet dev at hpe
      @ericsoderberg

    `}
  </Slide>
);