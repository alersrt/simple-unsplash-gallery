import GalleryPhoto from '../components/GalleryPhoto'
import React, { Component } from 'react'

import { fetchPhotos } from '../actions/fetchPhotos'
import { styles } from '../styles/styles'
import { ScrollView, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import LoadingIndicator from '../components/LoadingIndicator'

class GalleryScreen extends Component {
  static navigationOptions = {
    title: 'Gallery',
  }

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
      return <Text style={styles.error}>Sorry! There was an error loading the items</Text>
    }

    if (this.state.isLoading) {
      return <LoadingIndicator/>
    }

    return (
      <ScrollView contentContainerStyle={styles.gallery}>
        {this.state.photos.map(photo => <GalleryPhoto
          key={photo.id}
          thumbImage={photo.urls.thumb}
          rawImage={photo.urls.raw}
          title={photo.description}
          author={photo.user.name}
        />)}
      </ScrollView>
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

export default withNavigation(GalleryScreen)