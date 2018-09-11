import GalleryPhoto from '../components/GalleryPhoto'
import LoadingIndicator from '../components/LoadingIndicator'
import React, { Component } from 'react'

import { Button, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { photosFetchData } from '../actions/photos'
import { styles } from '../styles/styles'

class GalleryScreen extends Component {
  static navigationOptions = {
    title: 'Gallery',
  }

  componentDidMount () {
    this.props.fetchPhotos(1)
  }

  render () {
    if (this.props.hasErrored) {
      return (
        <View>
          <Text style={styles.error}>Sorry! There was an error loading the items</Text>
          <Button title="Try to refresh" onPress={() => this.getPhotos()}/>
        </View>
      )
    }

    if (this.props.isLoading) {
      return <LoadingIndicator/>
    }

    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={this.props.photos}
        renderItem={({item}) => <GalleryPhoto
          key={item.id}
          thumbImage={item.urls.thumb}
          rawImage={item.urls.raw}
          title={item.description}
          author={item.user.name}
        />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (page) => dispatch(photosFetchData(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen)