import React from 'react'
import PropTypes from 'prop-types'

import {
	Intro,
	Picture,
	Section
} from '../../components'

import * as styles from './_styles.module.scss'

const About = ({ date }) => {
	const startDate = new Date(new Date('May 12, 2008 09:00:00').toLocaleString('en-US', { timeZone: 'America/Chicago' }))
	const millisecondsOfExperience = date - startDate
	const yearsOfExperience = Math.floor(millisecondsOfExperience / 1000 / 60 / 60 / 24 / 365)

	return (
		<Section id="about" header="About Me">
			<div className={styles.content}>
				<div className={styles.portrait}>
					<Picture
						imgName="portrait"
						alt="Photo of Jay Posten"
						widths={[460, 190, 320]} />
				</div>
				<div className={styles.intro}>
					<Intro modifier="about">I&apos;m a senior software engineer with over {yearsOfExperience} years of professional experience and I have a passion for efficient, modular, reusable code. I enjoy creating rich user experiences using modern web technologies such as HTML, CSS/SCSS, JavaScript, and React. On the backend I have experience with Node, Express.js, Next.js, GraphQL, SQL/SQLite, and MongoDB. For testing I&apos;m comfortable with Jest, Mocha, and Storybook. I&apos;m also comfortable with prompt engineering and have extensive experience with Amazon Q and Google&apos;s Gemini. I&apos;m highly organized with an eye for user experience and an obsessive attention to detail.</Intro>
					<div className={styles.contactInfo}>
						<a href="tel:3619450085" className={styles.contactLink}>
							<Picture
								imgName="icon_phone"
								fileType="png"
								alt="Phone Icon"
								widths={[16]} />
							<span className={styles.contactMethod}>361.945.0085</span>
						</a>
						<a href="mailto:jdposten@gmail.com" className={styles.contactLink}>
							<Picture
								imgName="icon_mail"
								fileType="png"
								alt="Email Icon"
								widths={[21]} />
							<span className={styles.contactMethod}>jdposten@gmail.com</span>
						</a>
						<div>
							<a href="https://github.com/JudgmentJay" target="_blank" rel="noreferrer noopener" className={styles.socialIcon}>
								<Picture
									imgName="icon_github"
									fileType="png"
									alt="GitHub Icon"
									widths={[35]} />
							</a>
							<a href="https://www.linkedin.com/in/jayposten/" target="_blank" rel="noreferrer noopener" className={styles.socialIcon}>
								<Picture
									imgName="icon_linkedin"
									fileType="png"
									alt="LinkedIn Icon"
									widths={[35]} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

About.propTypes = {
	date: PropTypes.object.isRequired
}

export default About
