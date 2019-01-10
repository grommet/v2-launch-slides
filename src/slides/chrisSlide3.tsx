import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="start"
    background="neutral-3"
    >
    {`

      # what is grommet to me?
      + gets out of my way
      + but still get some guardrails
      + a library of base elements to start with
      + with a little web knowledge I can do...

    `}
  </Slide>
);