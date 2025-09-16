import { ThemeColors } from '@/theme/theme'
import createIconSetFromIcoMoon from '@expo/vector-icons/createIconSetFromIcoMoon'

const IconFromIcoMoon = createIconSetFromIcoMoon(
  require('../assets/icons/selection.json'),
  'IcoMoon',
  'icomoon.ttf',
)

type IconName =
  | 'Adventure'
  | 'Beach'
  | 'Chevron-down'
  | 'Chevron-left'
  | 'Chevron-right'
  | 'Chevron-up'
  | 'Close'
  | 'Culture'
  | 'Explore'
  | 'Favorite-fill'
  | 'Favorite-outline'
  | 'Gastronomy'
  | 'Group'
  | 'History'
  | 'Home-fill'
  | 'Home-outline'
  | 'Luxury'
  | 'Nature'
  | 'Search-outline'
  | 'Shopping'
  | 'Star'
  | 'Urban'
  | 'Person-fill'
  | 'Person-outline'
  | 'Logout'

type IconProps = {
  name: IconName
  color?: ThemeColors
  size?: number
}

function Icon({ name, color = 'gray2', size = 24 }: IconProps) {
  return <IconFromIcoMoon name={name} color={color} size={size} />
}

export { Icon, IconName, IconProps }
