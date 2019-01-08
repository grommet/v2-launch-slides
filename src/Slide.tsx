import { Box, BoxProps, Markdown, MarkdownProps } from 'grommet';
import * as React from 'react';

export interface IProps {
  align?: BoxProps['align'],
  animation?: BoxProps['animation'],
  background?: BoxProps['background'],
  children: string,
  components?: MarkdownProps['components'],
  justify?: BoxProps['justify'],
}

const Slide: React.SFC<IProps> = ({
  align, animation, background, children, components, justify, ...rest
}) => (
  <Box fill={true} background={background} pad='xlarge' animation="fadeIn">
    <Box
      {...rest}
      fill={true}
      animation={typeof animation === 'object'
        ? animation : { type: animation, size: 'large' }}
      align={align}
      justify={justify}
    >
      <Markdown components={components}>
        {children.replace(/^[^\S\r\n]+/gm, '')}
      </Markdown>
    </Box>
  </Box>
)

Slide.defaultProps = {
  align: 'center',
  animation: 'fadeIn',
  background: undefined,
  components: undefined,
  justify: 'center',
 }

export default Slide;
