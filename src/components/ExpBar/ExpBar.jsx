import React from 'react'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as styles from './_styles.module.scss'

const ExpBar = ({
	skill,
	primary,
	level
}) => {
	const { ref, inView } = useInView({
		threshold: 1,
		triggerOnce: true
	})

	const skillNameClasses = classNames(styles.skillName, {
		[styles['skillName--small']]: !primary
	})

	const fillStyles = {
		width: inView ? `${level}%` : '25%'
	}

	return (
		<div className={styles.skill}>
			<span className={skillNameClasses}>{skill}</span>
			<div className={styles.bar} ref={ref}>
				<div className={styles.fill} style={fillStyles}>{level}%</div>
			</div>
		</div>
	)
}

ExpBar.propTypes = {
	skill: PropTypes.string.isRequired,
	primary: PropTypes.bool,
	level: PropTypes.number.isRequired
}

ExpBar.defaultProps = {
	primary: false
}

export default ExpBar
