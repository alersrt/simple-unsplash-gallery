import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { styles } from '../styles/styles'

export default class LoadingIndicator extends Component {
  render () {
    return (
      <View style={styles.loadingBox}>
        <Image
          source={require('../../icons/loader.gif')}
          style={styles.loadingImage}
        />
      </View>
    )
  }
}