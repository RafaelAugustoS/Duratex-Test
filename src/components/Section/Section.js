import React from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { Card } from '../common'

const Section = (props) => {
  const { name, cards } = props

  return (
    <View>
      <Text style={styles.Title}>
        { name }
      </Text>

      <ScrollView 
        horizontal
        style={styles.Section}
        showsHorizontalScrollIndicator={false}
      >
        {
          cards && cards.map(item => 
            <Card 
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          )
        }
      </ScrollView>
    </View>
  )
} 

const styles = StyleSheet.create({
  Section: {
    paddingLeft: 10,
    marginBottom: 45
  },
  Title: {
    marginLeft: 20,
    fontSize: 24,
    color: '#4D4D4D',
    fontWeight: 'bold',
    marginBottom: 15
  }
})

export default Section