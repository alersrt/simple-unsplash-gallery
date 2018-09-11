import React, { Component } from 'react'
import thunk from 'redux-thunk'
import GalleryScreen from './containers/GalleryScreen'
import PhotoScreen from './containers/PhotoScreen'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import * as reducers from './reducers/items'

const AppNavigation = createStackNavigator(
  {
    Gallery: {screen: GalleryScreen},
    Photo: {screen: PhotoScreen},
  },
  {
    initialRouteName: 'Gallery',
  },
)

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    )
  }
}