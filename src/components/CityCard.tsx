import { CityPreview } from '@/types'
import { ImageBackground } from 'react-native'
import { Text } from './Text'

type CityCardProps = {
  cityPreview: CityPreview
}

function CityCard({ cityPreview }: CityCardProps) {
  return (
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: 200, height: 200 }}
    >
      <Text>{cityPreview.name}</Text>
      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  )
}

export { CityCard }
