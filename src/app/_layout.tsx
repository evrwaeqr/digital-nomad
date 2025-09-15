import theme from '@/theme/theme'
import { ThemeProvider } from '@shopify/restyle'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name='(protected)' options={{ headerShown: false }} />
        <Stack.Screen name='sign-in' />
        <Stack.Screen name='not_found' />
        <StatusBar style='auto' />
      </Stack>
    </ThemeProvider>
  )
}
