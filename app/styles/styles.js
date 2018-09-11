import { StyleSheet } from 'react-native'

export let styles = StyleSheet.create({
  gallery: {},
  author: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  thumb: {
    height: 200,
    width: 400,
    alignSelf: 'center',
  },
  loadingBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingImage: {
    width: 50,
    height: 50,
  },
  rawBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  rawImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  error: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
})