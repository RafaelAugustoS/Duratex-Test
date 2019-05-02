import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { createStackNavigator, createDrawerNavigator, createAppContainer, NavigationActions } from 'react-navigation'
import { DrawerIcon, Logo } from '../components/common'
import Home from '../containers/Home'

const Drawer = createDrawerNavigator({
	Home
})

const AppNavigator = createStackNavigator({
	Home: {
		screen: Drawer,
		navigationOptions: ({ navigation }) => ({
			headerLeft: <DrawerIcon navigation={navigation} />,
			headerTitle: <Logo />
		})
	}
})



export default createAppContainer(AppNavigator)
