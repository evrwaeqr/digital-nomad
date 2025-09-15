import { CityCard } from '@/components/CityCard'
import { Screen } from '@/components/Screen'
import { Text } from '@/components/Text'
import { cityPreviewList } from '@/data/cities'
import { CityPreview } from '@/types'
import { FlatList, ListRenderItemInfo } from 'react-native'

export default function HomeScreen() {
  // const { colors } = useAppTheme()

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <Screen>
      <Text variant='title28'>Barcelona</Text>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  )
}
