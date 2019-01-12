import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="end"
    justify="end"
    background={{
      dark: true,
      image: "url(mountain.jpg)",
    }}
    >
    {`

    Photo by [Aaron Benson](https://unsplash.com/photos/SdmM_xh3bcU).

    `}
  </Slide>
);