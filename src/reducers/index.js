import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import routes from './routes'
import errors from './errors'
import settings from './settings'
import userData from './userData'

// requests imports
import request from './request'
import user from './user'
import singup from './singup'
import singin from './singin'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  debug: true,
  blacklist: [],
  whitelist: ['']
}

export default persistCombineReducers(persistConfig, {
  routes,
  errors,
  settings,
  request,
  singin,
  singup,
  user,
  userData
})