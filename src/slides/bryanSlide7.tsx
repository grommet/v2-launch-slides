import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'medium' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="center"
    justify="center"
    background='neutral-3'
    >
    {`

> "I was immediately impressed by how well thought out things in Grommet are and how nice the controls look - and I am not easily impressed. We've made more progress with Grommet than the other 5 frameworks combined.”

> **Dale Durham**

> Architect and Lead Developer ePapers LLC


    `}
  </Slide>
);