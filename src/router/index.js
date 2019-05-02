import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import Home from '../containers/Home'

const Drawer = createDrawerNavigator({
	Home
})

const AppNavigator = createStackNavigator({
	Drawer
})

export default createAppContainer(AppNavigator)
