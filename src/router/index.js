import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import Home from '../containers/Home'

const AppNavigator = createStackNavigator({
	Home
})

export default createAppContainer(AppNavigator)
