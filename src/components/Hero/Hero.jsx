import React from 'react'

import {
	Headers,
	Nav
} from '../../components'

import styles from './_styles.module.scss'

const Hero = () => {
	return (
		<header className={styles.hero}>
			<div className={styles.heroContent}>
				<Headers />
				<Nav />
			</div>
		</header>
	)
}

export default Hero
