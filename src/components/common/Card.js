import React from 'react'
import { 
	View, 
	Image, 
	Text, 
	StyleSheet,
	Dimensions
} from 'react-native'
import * as funcCalc from '../utils/calc'

const WIDTH = Dimensions.get('window').width

const Card = (props) => {
	const { title, image, description } = props
	return(
		<View style={styles.Card}>
			<Image 
				source={{uri: image}}
				style={styles.Image}
				resizeMode="cover"
			/>
			<Text style={styles.Title}>{ title }</Text>
			<Text style={styles.Description}>{ description }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	Card: {
		width: funcCalc.CalcPercentage(WIDTH, 70),
		marginLeft: 10
	},
	Image: {
		width: '100%',
		height: 150,
		borderRadius: 10
	},
	Title: {
		color: '#4D4D4D',
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 17
	},
	Description: {
		marginTop: 9,
		color: '#4D4D4D',
		fontSize: 16
	}
})

Card.proTypes = {

}

export { Card }