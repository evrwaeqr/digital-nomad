import { useTheme } from '@shopify/restyle'
import { Theme } from './theme'

function useAppTheme() {
  return useTheme<Theme>()
}

export { useAppTheme }
