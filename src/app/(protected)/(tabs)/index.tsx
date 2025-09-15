import { Box } from '@/components/Box'
import { CityCard } from '@/components/CityCard'
import { cityPreviewList } from '@/data/cities'
import { CityPreview } from '@/types'
import { FlatList, ListRenderItemInfo } from 'react-native'

export default function HomeScreen() {
  // const { colors } = useAppTheme()

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <Box backgroundColor='mainBackground' flex={1}>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Box>
  )
}
