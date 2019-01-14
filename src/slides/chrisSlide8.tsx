import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const DesignKit = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'large' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="end"
    justify="end"
    background={{
      dark: false,
      image: "url(design-kit.mov)",
    }}
    >
    {`

      #grommet/design-kit

    `}
  </Slide>
)

DesignKit.title = "Design Kit"

export default DesignKit
