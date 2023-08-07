import React from 'react'
import renderer from 'react-test-renderer'

import { Footer } from '../'

const now = new Date()

it('Renders correctly', () => {
	const tree = renderer
		.create(<Footer date={now} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
