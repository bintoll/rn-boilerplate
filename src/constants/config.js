import { Dimensions, Platform } from 'react-native'
import moment from 'moment'

const window = Dimensions.get('window');
export const width = (pers) => {
    return pers / 100 * window.width
}
export const height = (pers) => {
    return pers / 100 * window.height
}

export const widthForOr = (initialOrientationKey, orientationkey) => initialOrientationKey == 'PORTRAIT'
    ? orientationkey == 'PORTRAIT' ? width : height
    : orientationkey == 'LANDSCAPE' ? height : width


export const heightForOr = (initialOrientationKey, orientationkey) => initialOrientationKey == 'PORTRAIT'
  ? orientationkey == 'PORTRAIT' ? height : width
  : orientationkey == 'LANDSCAPE' ? width : height

export const demWidth = Dimensions.get('window').width
export const demHeight = Dimensions.get('window').height

export const iconImages = {
	// loginBack: require('images/loginBack.png'),
}

export const menuItems = [
	{
		icon: null,
		image: iconImages.homeIcon,
		text: 'Home',
		action: 'Main'
	},
]

export const baseUrl = 'https://www.sunclubrewards.com/en/api'

export const serverUrls = {
	// login: {url: '/user_login', method: 'POST'},
}

// list of white listed params for back end. The key of params is type of action that is used in redux
export const whiteListParams = {
	// SINGUP: ['fname', 'Mname', 'lname', 'email', 'password', 'gender', 'dob', 'apt', 'stnum', 'stname', 'address2', 'country', 'province', 'city', 'zip', 'PromoCode'],
}

// list of required params for UX
export const requiredList = {
	// register1: ['firstName', 'lastName', 'email', 'password', 'gender', 'birthday', 'country', 'province', 'city', 'zip', 'confirmPassword'],
}

// adapter params to convert key of params from client to params for back end (params from client are keys, and params for back ed are values). The key of params is type of action that is used in redux
export const adapterKeyParams = {
  SINGUP: {
    firstName: 'fname',
    middleName: 'Mname',
    lastName: 'lname',
    birthday: 'dob',
    appartmentNumber: 'apt',
    streetNumber: 'stnum',
    streetName: 'stname',
    zipCode: 'zip',
		promotionCode: 'PromoCode',
		address: 'address2'
	},
}

export const adapterValueParams = {
	// SINGUP: {
	// 	birthday: (dateString) => moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD')
	// },
}


