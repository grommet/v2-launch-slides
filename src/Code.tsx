import { Text } from 'grommet';
import * as React from 'react';

export interface IProps {
  children?: string | React.ReactNode,
}

const Code: React.SFC<IProps> = ({
  children
}) => (
  <Text size="large">
    <pre style={{ margin: 0 }}><code>{children}</code></pre>
  </Text>
)

export default Code;
