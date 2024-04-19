import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './_styles.module.scss'

const Footer = ({ date }) => {
	const currentYear = date.getFullYear()

	return (
		<React.Fragment>
			<footer className={styles.footer}>
				&copy;2018&ndash;{currentYear} Jay Posten
			</footer>
			<script type="text/javascript" src={require('../../scripts/modernizr-custom')}></script>
		</React.Fragment>
	)
}

Footer.propTypes = {
	date: PropTypes.object.isRequired
}

export default Footer
