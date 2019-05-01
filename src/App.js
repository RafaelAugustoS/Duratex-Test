import React from 'react'
import Router from './router'
if(__DEV__){
	import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => {
	return(
		<Router />
	)
}

export default App