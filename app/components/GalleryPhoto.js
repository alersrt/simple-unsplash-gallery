import React, { Component } from 'react'

import { Image, Text, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { styles } from '../styles/styles'

class GalleryPhoto extends Component {
  onPressImage = () => this.props.navigation.navigate('Photo', {rawImage: this.props.rawImage})

  render () {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.author}>{this.props.author}</Text>
        <TouchableOpacity onPress={() => this.onPressImage()}>
          <Image
            source={{uri: this.props.thumbImage}}
            style={styles.thumb}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(GalleryPhoto)