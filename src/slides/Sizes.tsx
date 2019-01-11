import { Box, Calendar, Heading, Meter, Paragraph } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-1">
    <Box flex={false}>
      <Box direction="row" justify="center" align="start">
        <Box background="neutral-2" justify="center" height="medium" width="medium">
          <Meter type="circle" values={[{ label: 'count', value: 25 }]} size="medium" />
        </Box>
        <Box background="neutral-1" direction="row" height="medium" width="medium">
          <Box>
            <Meter type="circle" values={[{ label: 'count', value: 25 }]} size="small" />
            <Meter type="circle" values={[{ label: 'count', value: 25 }]} size="small" />
          </Box>
          <Calendar size="small" />
        </Box>
        <Box margin={{ left: 'large' }}>
          <Box direction="row">
            <Box background="accent-1" pad="large" />
          </Box>
          <Box direction="row">
            <Box background="accent-2" pad="medium" />
            <Box background="neutral-3" pad="medium" />
          </Box>
          <Box direction="row">
            <Box background="accent-1" pad="small" />
            <Box background="neutral-3" pad="small" />
            <Box background="accent-2" pad="small" />
            <Box background="accent-1" pad="small" />
          </Box>
          <Box direction="row">
            <Box background="accent-2" pad="xsmall" />
            <Box background="neutral-3" pad="xsmall" />
            <Box background="accent-1" pad="xsmall" />
            <Box background="accent-2" pad="xsmall" />
            <Box background="neutral-3" pad="xsmall" />
            <Box background="accent-1" pad="xsmall" />
            <Box background="accent-2" pad="xsmall" />
            <Box background="neutral-3" pad="xsmall" />
          </Box>
        </Box>
      </Box>
      <Box alignSelf="stretch" direction="row" justify="between" align="center" gap="large">
        <Heading margin="none" size="large">size</Heading>
        <Paragraph margin="none" size="large">
          1/4 xlarge = 1/2 large = 1 medium = 2 small = 4 xsmall
      </Paragraph>
        <Paragraph margin="none" size="large">
          Box Grid Meter Chart Calendar
      </Paragraph>
      </Box>
    </Box>
  </Slide>
);
