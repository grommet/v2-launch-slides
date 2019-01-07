import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import * as React from 'react';
import { slides } from './slides';
import Viewer from './Viewer';

const App = (): JSX.Element => (
  <Grommet full={true} theme={grommet} >
    <Viewer slides={slides} />
  </Grommet>
);

export default App;
