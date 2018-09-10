import LoadingIndicator from '../components/LoadingIndicator'

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { styles } from '../styles/styles'

class PhotoScreen extends Component {
  static navigationOptions = {
    title: 'Photo',
  }

  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      rawImage: this.props.navigation.getParam('rawImage'),
      width: undefined,
      height: undefined,
    }
  }

  render () {
    return (
      <View style={styles.rawBox}>
        <Image
          onLoadEnd={() => this.setState({isLoaded: true})}
          source={{uri: this.state.rawImage}}
          style={styles.rawImage}
          resizeMode={'contain'}
        />
        {!this.state.isLoaded && <LoadingIndicator/>}
      </View>
    )
  }

  componentDidMount () {
    Image.getSize(this.state.rawImage, ((width, height) => this.setState({width: width, height: height})))
  }
}

export default withNavigation(PhotoScreen)