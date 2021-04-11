import React from 'react'

import jobs from '../../data/jobs'

import {
	Intro,
	Section,
	Job
} from '../../components'

import styles from './_styles.module.scss'

const Experience = () => {
	return (
		<Section id="experience" header="My Experience">
			<Intro>Experience is important, and I&apos;ve got lots of it! Below is a timeline of my professional history.</Intro>
			<div className={styles.timeline}>
				{
					jobs.map((job, i) => {
						return (
							<Job
								title={job.title}
								company={job.company}
								description={job.description}
								date={job.date}
								img={job.img}
								odd={i % 2 !== 0}
								key={`job-${i}`} />
						)
					})
				}
			</div>
		</Section>
	)
}

export default Experience
