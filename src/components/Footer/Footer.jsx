import React from 'react'

import styles from './_styles.module.scss'

const Footer = () => {
	const now = new Date()
	const currentYear = now.getFullYear()

	return (
		<React.Fragment>
			<footer className={styles.footer}>
				&copy;2018&ndash;{currentYear} Jay Posten
			</footer>
			<script type="text/javascript" src={require('../../scripts/modernizr-custom')}></script>
		</React.Fragment>
	)
}

export default Footer
