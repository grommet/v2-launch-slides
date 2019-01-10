import { Box, Button, Heading } from 'grommet';
import * as React from 'react';
import Code from '../Code';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-1">
    <Box direction="row" gap="xlarge" align="start">
      <Box gap="medium" flex={false}>
        <Button primary={true} label="Submit" />
        <Button label="Cancel" />
      </Box>
      <Code>
        {`<Grommet theme={grommet}>
  <Button primary={true} label="Submit" />
  <Button label="Cancel" />
</Grommet>`}
      </Code>
    </Box>
    <Heading alignSelf="start" size="large">Theme</Heading>
  </Slide>
);
