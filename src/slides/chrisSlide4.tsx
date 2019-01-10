import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';


export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background='accent-4'
    >
    {`

      # themes, responsiveness, accessibility, stack, modular scale, t-shirt sizing, grid, flex, hard & soft, markdown, visualizations, keyboard shortcuts, tables, forms, and more...

    `}
  </Slide>
);