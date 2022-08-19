import React from 'react'
import { createRoot } from 'react-dom/client'

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
	const now = new Date()

	return (
		<React.Fragment>
			<Hero />
			<About date={now} />
			<Experience />
			<Skills />
			<Projects />
			<Footer date={now} />
		</React.Fragment>
	)
}

const container = document.getElementById('portfolio')
const root = createRoot(container)
root.render(<Portfolio />)
