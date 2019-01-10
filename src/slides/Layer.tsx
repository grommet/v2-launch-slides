import { Box, Heading, Keyboard, Layer, LayerProps } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

const props: LayerProps[] = [
  { position: 'right', modal: true },
  { position: 'top', modal: false },
  { position: 'bottom', plain: true },
];

interface IState {
  current: number;
}

export default class LayerSlide extends React.Component<any, IState> {
  public readonly state: Readonly<IState> = { current: 0 }

  public onNext = (): void => {
    const { current } = this.state;
    this.setState({
      current: (current < (props.length - 1)) ? (current + 1) : 0,
    });
  }

  public onPrevious = (): void => {
    const { current } = this.state;
    this.setState({
      current: (current > 0) ? (current - 1) : (props.length - 1),
    });
  }

  public render() {
    const { current } = this.state;
    return (
      <Slide background="neutral-2" align="stretch">
        <Keyboard target="document" onDown={this.onNext} onUp={this.onPrevious}>
          <Box overflow="auto">
            <Box flex={false} height="small" background="neutral-1" />
            <Box flex={false} height="small" background="neutral-3" />
            <Box flex={false} height="small" background="neutral-1" />
            <Box flex={false} height="small" background="neutral-3" />
            <Box flex={false} height="small" background="neutral-1" />
            <Layer {...props[current]}>
              <Box
                pad="large"
                background={{ color: 'white', opacity: 'strong' }}
                round={true}
              >
                <Heading margin="none" size="large">Layer</Heading>
                <Heading level="2" margin="none" size="large">
                  <pre><code>{Object.keys(props[current]).map(k => `${k}=${JSON.stringify(props[current][k])}`).join('\n')}</code></pre>
                </Heading>
              </Box>
            </Layer>
          </Box>
        </Keyboard>
      </Slide>
    );
  }
}
