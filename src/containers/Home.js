import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import Section from '../components/Section/Section'
import Banner from '../components/Section/Banner'
import * as apiMethods from '../services'
import Reactotron from 'reactotron-react-native'

const Home = () => {
	const [section, setSection] = useState([])

	const handleCall = async () => {
		try{
			const res = await apiMethods.section.call()
			setSection(res.data.sections)
		}catch(e){
			Reactotron.log('Erro')
		}
	}
	
	useEffect(() => {
		handleCall()
	}, [])


	return(
  	<ScrollView>
			<Banner />
			{
				section && section.map(item => 
					<Section 
						key={item.id} 
						name={item.name}
						cards={item.cards}
					/>
				)
			}
		</ScrollView>
	)
}

export default Home