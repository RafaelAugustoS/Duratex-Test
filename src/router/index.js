import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../containers/Home/Home'

const AppNavigator = createStackNavigator({
	Home
})

export default createAppContainer(AppNavigator)
