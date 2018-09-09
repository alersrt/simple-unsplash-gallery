import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class GalleryScreen extends Component {
  render () {
    return(
      <View>
        <Text>Gallery Screen</Text>
        <Button title='Go to photo' onPress={() => this.props.navigation.navigate('Photo')}/>
      </View>
    )
  }
}