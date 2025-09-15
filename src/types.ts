type TouristAttraction = {
  id: string
  name: string
  description: string
  cityId: string
}

type CategoryCode =
  | 'ADVENTURE'
  | 'BEACH'
  | 'CULTURE'
  | 'GASTRONOMY'
  | 'HISTORY'
  | 'LUXURY'
  | 'NATURE'
  | 'SHOPPING'
  | 'URBAN'
  | 'FAVORITE'

type Category = {
  id: string
  name: string
  description: string | null
  code: CategoryCode
}

type City = {
  id: string
  name: string
  country: string
  coverImage: number
  description: string
  touristAttractions: TouristAttraction[]
  location: {
    latitude: number
    longitude: number
  }
  categories: Category[]
  relatedCitiesIds: string[]
}

type CityPreview = Pick<City, 'id' | 'name' | 'country' | 'coverImage'>

export { Category, CategoryCode, City, CityPreview, TouristAttraction }
