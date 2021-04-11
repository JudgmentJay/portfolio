import React from 'react'

import styles from './_styles.module.scss'

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<a href="#about" className={styles.link}>About</a>
			<a href="#experience" className={styles.link}>Experience</a>
			<a href="#skills" className={styles.link}>Skills</a>
			<a href="#projects" className={styles.link}>Projects</a>
		</nav>
	)
}

export default Nav
