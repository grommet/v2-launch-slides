import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const SketchLibrary = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'large' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="end"
    justify="end"
    background={{
      dark: false,
      image: "url(sketch.mov)",
    }}
    >
    {`

      # sketch library

    `}
  </Slide>
)

SketchLibrary.title = "Sketch Library"

export default SketchLibrary
