import { useLocalSearchParams, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

function CityDetails() {
  const router = useRouter()
  const { id } = useLocalSearchParams()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={router.back}>City Details: {id}</Text>
    </View>
  )
}

export default CityDetails
