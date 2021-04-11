import React from 'react'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Picture } from '../../components'

import styles from './_styles.module.scss'

const Job = ({
	title,
	company,
	description,
	date,
	img,
	odd
}) => {
	const { ref, inView } = useInView({
		threshold: 1,
		triggerOnce: true
	})

	const jobContainerClasses = classNames(styles.jobContainer, {
		[styles['jobContainer--left']]: !odd,
		[styles['jobContainer--right']]: odd
	})

	const jobClasses = classNames(styles.job, {
		[styles['is-visible']]: inView
	})

	return (
		<div className={jobContainerClasses}>
			<div className={jobClasses} ref={ref}>
				<div className={styles.imgContainer}>
					<Picture
						imgName={img}
						alt={title}
						widths={[460, 100, 125]}
						lazyLoad={true} />
				</div>
				<div className={styles.content}>
					<span className={styles.date}>{date}</span>
					<h4 className={styles.title}>{title}</h4>
					<h5 className={styles.subtitle}>{company}</h5>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</div>
	)
}

Job.propTypes = {
	title: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	odd: PropTypes.bool
}

export default Job
