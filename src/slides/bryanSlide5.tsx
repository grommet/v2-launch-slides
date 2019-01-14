import { Box, Heading, Image } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background="neutral-2">
    <Heading alignSelf="start" size="medium">grommet 1</Heading>
    <Box direction="row-responsive" gap="large" align="start" alignContent='start'>
      <Box flex={true}>
        <Box width="large" alignContent="stretch" >
          <Heading size="small">style guide</Heading>
          <Image src="nochris.png" fit="contain" />
        </Box>
      </Box>
      <Box flex={true}>
       <Box width="large" alignContent="stretch" >
          <Heading size="small">dev docs</Heading>
          <Image src="yeschris.png" fit="contain" />
        </Box>
      </Box>
    </Box>
  </Slide>
);
