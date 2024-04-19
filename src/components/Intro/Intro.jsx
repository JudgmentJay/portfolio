import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as styles from './_styles.module.scss'

const Intro = ({
	modifier,
	children
}) => {
	const classes = classNames(styles.intro, {
		[styles[`intro--${modifier}`]]: Boolean(modifier)
	})

	return <p className={classes}>{children}</p>
}

Intro.propTypes = {
	modifier: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Intro
