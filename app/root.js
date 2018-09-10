import { createStackNavigator } from 'react-navigation'
import GalleryScreen from './containers/GalleryScreen'
import PhotoScreen from './containers/PhotoScreen'

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