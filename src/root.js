import { createStackNavigator } from 'react-navigation'
import GalleryScreen from './GalleryScreen'
import PhotoScreen from './PhotoScreen'

const Root = createStackNavigator(
  {
    Gallery: {screen: GalleryScreen},
    Photo: {screen: PhotoScreen},
  },
  {
    initialRouteName: 'Gallery',
  },
)

export default Root