import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const MegQuote = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="center"
    justify="center"
    background="neutral-3"
    >
    {`

      > "Why do so many of our applications look like they come from different companies?”

      > **Meg Whitman**

    `}
  </Slide>
)

MegQuote.title = "Meg Whitman"

export default MegQuote
