import { Heading } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background={{
      dark: true,
      image: "url(gremlin.png)",
    }}
    >
    {`

# speakers + agenda

| time | topic |
| ---- | ---- |
| 6:30 | drinks and snacks |
| 7:00 | hello grommet, bryan jacquot |
| 7:15 | let’s design, chris carlozzi |
| 7:30 | fast dev, eric soderberg |
| 7:45 | storybook, norbert de langen |
| 8:00 | codesandbox, ives van hoorne |
| 8:15 | roundtable discussion |
| 8:30 | wrap and network |

    `}
  </Slide>
);