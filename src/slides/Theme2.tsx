import { Box, Button, Heading, ThemeContext } from 'grommet';
import * as React from 'react';
import Code from '../Code';
import Slide from '../Slide';

const myTheme: object = {
  button: {
    border: { radius: '4px', color: 'neutral-3' },
    primary: { color: 'neutral-3' }
  }
};

export default () => (
  <Slide background="dark-1">
    <Box direction="row" gap="xlarge" align="center">
      <ThemeContext.Extend value={myTheme}>
        <Box gap="medium">
          <Button primary={true} label="Submit" />
          <Button label="Cancel" />
        </Box>
      </ThemeContext.Extend>
      <Code>
        {`const myTheme = ${JSON.stringify(myTheme, null, 2)}

<Grommet theme={myTheme}>
  <Button primary={true} label="Submit" />
  <Button label="Cancel" />
</Grommet>`}
      </Code>
    </Box>
    <Heading alignSelf="start" size="large">Theme</Heading>
  </Slide>
);
