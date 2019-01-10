import { Box, Heading, Meter, Paragraph } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-2">
    <Box direction="row" justify="center" align="start">
      <Box background="neutral-3" pad={{ bottom: 'large', right: 'large' }}>
        <Box background="accent-3" pad={{ bottom: 'medium', right: 'medium' }}>
          <Box background="neutral-1" pad={{ bottom: 'small', right: 'small' }}>
            <Box background="accent-1" pad="xsmall" />
          </Box>
        </Box>
      </Box>
      <Box background="neutral-2" justify="center">
        <Meter type="circle" values={[{ label: 'count', value: 25 }]} size="medium" />
      </Box>
      <Box background="neutral-1" justify="center">
        <Meter type="circle" values={[{ label: 'count', value: 25 }]} size="small" />
      </Box>
      <Box pad={{ horizontal: 'large' }}>
        <Paragraph size="xxlarge">4 small</Paragraph>
        <Paragraph size="xxlarge">2 medium</Paragraph>
        <Paragraph size="xxlarge">1 large</Paragraph>
      </Box>
    </Box>
    <Heading alignSelf="start" size="large">size</Heading>
  </Slide>
);
