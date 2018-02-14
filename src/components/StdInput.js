import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { width, height, iconImages } from 'constants/config'

export default class StdInput extends Component {
  render() {
    const { placeholderUp, placeholder, value, onChangeText, icon, wrapperCustomStyle, heighlighted, onBlur,
      onFocus, autoCapitalize, secureTextEntry, error, readOnly, isButton, onPress } = this.props
    const InputComp = isButton
      ? TouchableOpacity
      : View
    return (
      <View style={[styles.container, wrapperCustomStyle, error && styles.containerError, heighlighted && styles.containerActive]}>
        {
          placeholderUp
            ? placeholder 
              ? <Text style={styles.upperText}>{placeholder}</Text>
              : null
            : null
        }  
        <InputComp onPress={isButton ? onPress : null } style={styles.iconAndInputWrapper}>
          {
            iconImages[icon]
              ? <View style={styles.iconImageWrapper}>
                  <Image source={iconImages[icon]} style={styles.image} />
                </View>
              : null
          }
          {
            readOnly
              ? <Text style={styles.input}>{value}</Text>
              : <TextInput
                  underlineColorAndroid="transparent"  
                  placeholder={!placeholderUp
                    ? placeholder
                    : ''
                  }
                  onChangeText={onChangeText}
                  value={value}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  placeholderTextColor="black"
                  autoCapitalize={autoCapitalize}
                  secureTextEntry={secureTextEntry}
                  style={styles.input} />
          }
        </InputComp>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: width(2),
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  containerActive: {
    borderBottomColor: '#83C0E4',
  },
  containerError: {
    borderBottomColor: '#CE5759',
  },
  upperText: {
    color: '#D7D7D7',
    fontSize: width(3.6)
  },
  iconAndInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: width(2),
  },
  iconImageWrapper: {
    height: width(7),
    width: width(6),
    marginRight: width(3),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  input: {
    width: '100%',
    height: width(10),
    fontSize: width(4)
  }
})