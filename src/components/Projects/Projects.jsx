import React from 'react'

import projects from '../../data/projects'

import {
	Intro,
	ProjectTile,
	Section
} from '../../components'

import * as styles from './_styles.module.scss'

const Projects = () => {
	return (
		<Section id="projects" header="Projects">
			<Intro>Here are some of the most recent projects I&apos;ve been a part of.</Intro>
			<div className={styles.tiles}>
				{
					projects.map((project, i) => {
						return (
							<ProjectTile
								title={project.title}
								url={project.url}
								imgName={project.imgName}
								testId={`project-${i}`}
								key={`project-${i}`} />
						)
					})
				}
			</div>
		</Section>
	)
}

export default Projects
