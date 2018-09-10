import React, { Component } from 'react'

import { View, Text, Image } from 'react-native'
import { styles } from '../styles/styles'

export default class GalleryPhoto extends Component {
  render() {
    return (
      <View>
        <Text>Title: {this.props.title}</Text>
        <Text>Author: {this.props.author}</Text>
        <Image
          source={{ uri: this.props.image }}
          style={styles.image}
        />
      </View>
    )
  }
}