import { Box, BoxProps, Markdown, Text } from 'grommet';
import * as React from 'react';

export const isObject = (item: any): boolean => 
  item && typeof item === 'object' && !Array.isArray(item);

const deepMerge = (target: object, ...sources: object[]): object => {
  if (!sources.length) {
    return target;
  }
  // making sure to not change target (immutable)
  const output = { ...target };
  sources.forEach(source => {
    if (isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = { ...source[key] };
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};

const baseComponents = {
  h1: { props: { size: 'xlarge', textAlign: 'center' }},
  h2: { props: { size: 'xlarge', textAlign: 'center' }},
  li: {
    component: Text,
    props: { as: 'li', color: 'accent-1', size: 'xlarge' }
  },
  p: { props: { size: 'xlarge' }},
}

export interface IProps {
  align?: BoxProps['align'],
  animation?: BoxProps['animation'],
  background?: BoxProps['background'],
  children?: string | React.ReactNode,
  components?: object,
  justify?: BoxProps['justify'],
  pad?: BoxProps['pad'],
}

const Slide: React.SFC<IProps> = ({
  align, animation, background, children, components, justify, pad, ...rest
}) => (
  <Box fill={true} background={background} pad={pad} animation="fadeIn">
    <Box
      {...rest}
      fill={true}
      animation={typeof animation === 'object'
        ? animation : { type: animation, size: 'large' }}
      align={align}
      justify={justify}
    >
      {(children && typeof children === 'string')
        ? (
          <Markdown
            components={components
              ? deepMerge(baseComponents, components)
              : baseComponents}
          >
            {children.replace(/^[^\S\r\n]+/gm, '')}
          </Markdown>
        )
        : children}
    </Box>
  </Box>
)

Slide.defaultProps = {
  align: 'center',
  animation: 'fadeIn',
  background: undefined,
  components: undefined,
  justify: 'center',
  pad: 'xlarge',
 }

export default Slide;
