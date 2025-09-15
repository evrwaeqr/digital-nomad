import { Image } from 'expo-image'
import { StyleSheet, Text } from 'react-native'

import ParallaxScrollView from '@/components/parallax-scroll-view'
import { Link, useRouter } from 'expo-router'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <Link href='/city-details/5'>Detalhes</Link>
      <Link href='/city-details/6' asChild>
        <Text>Navegar para detalhas</Text>
      </Link>
      <Text onPress={() => router.navigate('/city-details/7')}>
        navegar com router
      </Text>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
