import { Box, Drop, DropProps, Heading, Keyboard, Text } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

interface IDropProps {
  align: DropProps['align'],
  plain?: DropProps['plain'],
}

const props: IDropProps[] = [
  { align: { top: 'bottom' } },
  { align: { bottom: 'top' } },
  { align: { left: 'right' }, plain: true },
];

interface IState {
  current: number;
}

export default class DropSlide extends React.Component<any, IState> {
  public readonly state: Readonly<IState> = { current: 0 }

  private ref = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    this.forceUpdate(); // to show first Drop
  }

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
      <Slide background="neutral-3" align="stretch">
        <Keyboard target="document" onDown={this.onNext} onUp={this.onPrevious}>
          <Box align="start" justify="center">
            <Box ref={this.ref} pad="medium" background="neutral-1" round="small">
              <Text size="xlarge">Some Control</Text>
            </Box>
            {this.ref.current && (
              <Drop target={this.ref.current} {...props[current]}>
                <Box
                  pad="medium"
                  background={{ color: 'white', opacity: 'strong' }}
                  round={true}
                >
                  <Heading margin="none">Drop</Heading>
                  <Heading level="2" margin="none">
                    <pre><code>{Object.keys(props[current]).map(k => `${k}=${JSON.stringify(props[current][k])}`).join('\n')}</code></pre>
                  </Heading>
                </Box>
              </Drop>
            )}
          </Box>
        </Keyboard>
      </Slide>
    );
  }
}
