import { createStackNavigator } from 'react-navigation'
import GalleryScreen from 'app/containers/GalleryScreen'
import PhotoScreen from 'app/containers/PhotoScreen'

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