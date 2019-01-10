import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';


export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="start"
    background='accent-1'
    >
    {`

      # how do i apply it?
      + another part of the community (just an important one)
      + the foundation of hpe's design system
      + a common language we share inside the company
      + so i can do things like...
    

    `}
  </Slide>
);