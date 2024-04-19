import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './_styles.module.scss'

const Section = ({
	id,
	header,
	children
}) => {
	return (
		<section id={id} className={styles.section}>
			<div className={styles.container}>
				<h3 className={styles.sectionHeader}>{header}</h3>
				{children}
			</div>
		</section>
	)
}

Section.propTypes = {
	id: PropTypes.string,
	header: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default Section
