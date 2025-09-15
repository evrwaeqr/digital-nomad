import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { useAppTheme } from '@/theme/useAppTheme'

export default function HomeScreen() {
  const { colors } = useAppTheme()

  return (
    <Box backgroundColor='mainBackground' flex={1}>
      <Text marginTop='xl' color='text'>
        Home {colors.mainBackground}
      </Text>
    </Box>
  )
}
