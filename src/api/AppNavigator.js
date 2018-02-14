import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Easing, Animated, Keyboard, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation'

import CustomDrawerContentComponent from 'components/CustomDrawerContentComponent'

import { width, height, createTableQuery } from 'constants/config'
import store, { persistor, addListener } from './ReduxStore'

// Imports for app routes
import Login from 'layouts/Login'
import Main from 'layouts/Main'

const DrawerNavigatorConfig = {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: width(80),
  drawerPosition: 'left',
  drawerBackgroundColor: 'transparent',
  initialRouteName: 'Login',
  contentComponent: props => <CustomDrawerContentComponent {...props} />,
}

export const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Main: {
    screen: Main,
  },
})

@connect(state => ({
    routes: state.routes
  }),
  dispatch => ({
    dispatch: dispatch
  })
)
export default class AppWithNavigationState extends Component {
  render() {
    const { dispatch, routes } = this.props
    const navigationProps = addNavigationHelpers({
      dispatch,
      state: routes,
      addListener
    })
    return (
      <SafeAreaView style={styles.container}>
        <AppNavigator
          navigation={navigationProps} /> 
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

