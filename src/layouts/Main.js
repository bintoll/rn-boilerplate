import React, { Component, PureComponent } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text, Linking } from 'react-native'
import { connect } from 'react-redux'
import ImageLoad from 'react-native-image-placeholder'

import { height, width, iconImages, serverUrls } from 'constants/config'
import { checkNextProps } from 'utils'
import NavigationIsFocused from 'utils/NavigationIsFocused'

import fetchServ from 'actions/fetchServ'

import NavBar from 'components/NavBar'

@NavigationIsFocused(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    // fetchOffers: (params) => {
    //   dispatch(fetchServ(serverUrls.listOffers, params, 'LISTOFFERS'))
    // },
  })
)
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  
  }
  

  componentWillReceiveProps(nextProps) {

  }
  
  render() {
    const { navigation, user } = this.props
    const { listOffers } = this.state
    const userData = user && user.response && user.response.user_data
    const navBarProps = {
      leftPart: {
        image: iconImages.menuIcon,
        action: () => navigation.navigate('DrawerOpen')
      },
      centerPart: {
        text: userData && userData.Points
          ? userData.fname + ' ' + userData.lname
          : ''
      },
      rightPart: {
        text: userData && userData.Points
          ? userData.Points + ' points'
          : '0 p'
      }
    }
    return (
      <View style={styles.container}>
        <NavBar {...navBarProps} navigation={navigation}/>  
        <View style={styles.mainContentWrapper}>  
          
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContentWrapper: {
    flex: 1
  }
})
