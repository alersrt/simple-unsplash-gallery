import React, { Component } from 'react'

import { Image, Text, View } from 'react-native'

export default class GalleryPhoto extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Image source={{uri: this.props.uri}}></Image>
        <Text>{this.props.author}</Text>
      </View>
    )
  }
}