import React, { Component, PureComponent } from 'react';
import { View, StyleSheet, ImageBackground, Model, Text, Image } from 'react-native'
import { connect } from 'react-redux'

import { width, height, swiperContent, serverUrls } from 'constants/config'
import fetchServ from 'actions/fetchServ'
import NavigationIsFocused from 'utils/NavigationIsFocused'

import Loading from 'components/Loading'
import StdBtn from 'components/StdBtn'

@NavigationIsFocused(
  state => ({
  }),
  dispatch => ({
    // fetchСountries: (params) => {
    //   dispatch(fetchServ(serverUrls.countries, params, 'COUNTRIES'))
    // },
  })
)
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  componentWillMount() {
   
  }

  render() {
    const { isLoading } = this.state
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
