import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class PhotoScreen extends Component {
  render () {
    return(
      <View>
        <Text>PhotoScreen</Text>
        <Button title='Go to gallery' onPress={() => this.props.navigation.navigate('Gallery')}/>
      </View>
    )
  }
}