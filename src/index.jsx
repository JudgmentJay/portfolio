import React from 'react'
import ReactDOM from 'react-dom'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

import './scss/globals.scss'

import {
	Hero,
	About,
	Experience,
	Skills,
	Projects,
	Footer
} from './components'

const Portfolio = () => {
	return (
		<React.Fragment>
			<Hero />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Footer />
		</React.Fragment>
	)
}

ReactDOM.render(<Portfolio />, document.getElementById('portfolio'))
