import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import ImageLoad from 'react-native-image-placeholder'

import { width, heigh, menuItems } from 'constants/config'

class MenuItem extends PureComponent {
  renderIconOrImage = (image, icon) => {
    if (image) {
      return (
        <Image source={image} style={{width: '100%', height: '100%', resizeMode: 'contain'}} />
      )
    }
    return null
  }

  render() {
    const { handleMenuItemAction, text, icon, image, action, active, isLast } = this.props
    return (
      <TouchableOpacity disabled={action == 'no'} style={[isLast && {marginTop: width(8)}]} onPress={() => handleMenuItemAction(action)}>
        <View style={[styles.menuItemWrapper, action == 'no' && {opacity: 0.4}]}>
          <View style={[styles.menuItemIconWrapper]}>
            {this.renderIconOrImage(image, icon)}
          </View>
          <View style={styles.menuItemTextWrapper}>
            <Text style={styles.menuItemText}>{text}</Text>
          </View>  
        </View>
      </TouchableOpacity>
    );
  }
}

@connect(
  state => ({
    drawer: state.drawer,
    user: state.user
  }),
  dispatch => ({
    triggerDrawer: () => {
      dispatch(ApiUtils.triggerDrawer())
    },
  })
)
export default class CustomDrawerContentComponent extends Component {
  componentWillReceiveProps(nextProps) {
    
  }
  
  handleMenuItemAction = (action) => {
    const { navigation } = this.props
    switch (action) {
      case 'logout':
        navigation.navigate('Login')
        break
      default:
        navigation.navigate(action)
    }
  }

  render() {
    const { navigation, user } = this.props
    const userData = user && user.response && user.response.user_data
    return (
      <ScrollView style={styles.container}>
        <View style={styles.listitemsWrapper}>  
          {
            menuItems && menuItems.map((menuItem, idx) => {
              const active = navigation.state.routes[navigation.state.index].routeName == menuItem.action
              return (
                <MenuItem
                  key={menuItem.action + '_' + idx}
                  idx={idx}
                  isLast={idx == menuItems.length - 1}
                  active={active}
                  handleMenuItemAction={this.handleMenuItemAction}
                  {...menuItem} />
              )
            })
          }  
        </View>  
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listitemsWrapper: {
    flex: 1
  }
})