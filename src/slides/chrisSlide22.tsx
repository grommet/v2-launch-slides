import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';


export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'large' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background='status-ok'
    >
    {`

      # grommet is home
      + the docs have taught me
      + the examples enrich me
      + the community bolsters me
      + it's helped me be a better designer
      + i get to play with my friends

    `}
  </Slide>
);