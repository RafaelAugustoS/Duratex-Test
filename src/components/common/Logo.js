import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

const Logo = () => {
  return(
    <View style={{ flex: 1, marginLeft: -20 }}>
      <Image 
        source={require('../../assets/images/logo.png')} 
        resizeMode="contain" 
        style={{width: 100, height: 100}} 
      />
    </View>
  )
}

export { Logo }