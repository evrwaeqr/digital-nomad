import { Theme } from '@/theme/theme'
import { createBox } from '@shopify/restyle'

const Box = createBox<Theme>()
type BoxProps = React.ComponentProps<typeof Box>

export { Box, BoxProps }
