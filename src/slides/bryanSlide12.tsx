import { Box, Heading, Image, Paragraph } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background="neutral-4">
    <Box direction="row-responsive" gap="xlarge" align="start" alignContent='center'>
      <Box flex={false} width="medium" alignContent="stretch" background="white" round='medium' pad={{ horizontal: "small", vertical: "medium" }} >
        <Image src="bell.png" fit="contain" />
      </Box>
      <Box flex={true} width='large' alignSelf='start'>
        <Paragraph alignSelf="start" size="large">grommet 1</Paragraph>
        <Heading size="large">How can I add a count indicator on top of a notification icon?”</Heading>
      </Box>
    </Box>
  </Slide>
);
