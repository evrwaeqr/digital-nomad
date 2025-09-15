import { Redirect, Stack } from 'expo-router'

const isSignedIn = false

function ProtectedLayout() {
  if (isSignedIn) {
    return <Redirect href='/sign-in' />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}

export default ProtectedLayout
