import GalleryPhoto from '../components/GalleryPhoto'
import React, { Component } from 'react'

import { fetchPhotos } from '../actions/fetchPhotos'
import { styles } from '../styles/styles'
import { Button, Text, View } from 'react-native'

export default class GalleryScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photos: [],
      hasErrored: false,
      isLoading: false,
    }
  }

  render () {
    if (this.state.hasErrored) {
      return <View><Text>Sorry! There was an error loading the items</Text></View>
    }

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>
    }

    return (
      <View style={styles.gallery}>
        {this.state.photos.map(
          photo => <GalleryPhoto uri={photo.urls.small} title={photo.description} author={photo.user.name}/>)}
      </View>
    )
  }

  componentDidMount () {
    this.getPhotos()
  }

  getPhotos () {
    this.setState({isLoading: true})

    fetchPhotos().then(photos => {
      this.setState({
        isLoading: false,
        photos: photos,
      })
    }).catch(() => this.setState({hasErrored: true}))
  }
}