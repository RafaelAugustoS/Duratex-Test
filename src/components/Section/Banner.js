import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const Banner = (props) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      resizeMode="cover"
      style={styles.Bg}
    >
      <View style={styles.Transparent}>
        <Text style={styles.Title}>Faça parte do clube.</Text>
        <Text style={styles.Desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae turpis elementum, ultrices elit dignissim, gravida augue.</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  Bg: {
    width: '100%',
    height: 350,
    marginBottom: 20
  },
  Transparent: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%'
  },
  Title: {
    fontSize: 40,
    marginTop: 70,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20
  },
  Desc: {
    color: '#fff',
    marginLeft: 20,
    fontSize: 18,
    marginTop: 40
  }
})

export default Banner