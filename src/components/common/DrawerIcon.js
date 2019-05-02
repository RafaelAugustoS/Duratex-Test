import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const DrawerIcon = (props) => {
  return (
    <TouchableOpacity
			onPress={props.navigation.toggleDrawer}
		>
      <Icon 
        name="bars"
        size={18}
        color="#636466"
        style={{
          marginLeft: 20
        }}
      />
		</TouchableOpacity>
  )
}

export { DrawerIcon }