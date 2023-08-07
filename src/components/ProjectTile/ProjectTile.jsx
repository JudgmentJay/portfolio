import React from 'react'
import PropTypes from 'prop-types'

import { Picture } from '../../components'

import styles from './_styles.module.scss'

const ProjectTile = ({
	title,
	url,
	imgName,
	testId
}) => {
	return (
		<div className={styles.tile} data-testid={testId}>
			<Picture
				imgName={imgName}
				alt={title}
				widths={[460, 210, 348]}
				lazyLoad={true}
				className={styles.image} />
			<h4 className={styles.title}>{title}</h4>
			<a href={url} target="_blank" aria-label={title} rel="noreferrer noopener nofollow" className={styles.link}></a>
		</div>
	)
}

ProjectTile.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	imgName: PropTypes.string.isRequired,
	testId: PropTypes.string.isRequired
}

export default ProjectTile
