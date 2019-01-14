import { Box, Heading, Image, Paragraph } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background="neutral-4">
    <Box direction="column" gap="medium" align="start" alignContent='start'>
      <Paragraph alignSelf="start" size="large">grommet 1</Paragraph>
      <Heading alignSelf="start" size="medium">How do I change the icon within the Select component?</Heading>
      <Box width="large" alignContent="start" background="white" round='medium' pad={{ horizontal: "large", vertical: "none" }} >
        <Image src="select.png" fit="contain" />
      </Box>
    </Box>
  </Slide>
);
