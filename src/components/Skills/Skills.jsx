import React from 'react'

import skills from '../../data/skills'

import {
	ExpBar,
	Intro,
	Section
} from '../../components'

import * as styles from './_styles.module.scss'

const Skills = () => {
	return (
		<Section id="skills" header="Technical Skills">
			<Intro>Below is a summary of the various languages, technology, and software I am able to utilize and my estimated proficiencly levels for each.</Intro>
			<div className={styles.primarySkills}>
				{
					skills.main.map((skill, i) => {
						return (
							<ExpBar
								skill={skill.skill}
								level={skill.level}
								primary={true}
								key={`primarySkill-${i}`} />
						)
					})
				}
			</div>
			<div className={styles.extras}>
				<div className={styles.secondarySkills}>
					<h4 className={styles.header}>Secondary Skills</h4>
					{
						skills.secondary.map((skill, i) => {
							return (
								<ExpBar
									skill={skill.skill}
									level={skill.level}
									key={`secondarySkill-${i}`} />
							)
						})
					}
				</div>
				<div className={styles.strengths}>
					<h4 className={styles.header}>Strengths</h4>
					<ul>
						<li>Writing efficient, modular, reusable code</li>
						<li>Always aiming for 100% test coverage</li>
						<li>High velocity without sacrificing quality</li>
						<li>Attention to detail</li>
						<li>Comfortable with AI / prompt engineering</li>
						<li>Adhering to industry/team standards</li>
						<li>Finding ways to optimize performance</li>
						<li>Avoiding/fixing cross-browser compatibility issues</li>
						<li>Staying up to date with industry trends</li>
						<li>Passionate about learning new things</li>
					</ul>
				</div>
			</div>
		</Section>
	)
}

export default Skills
