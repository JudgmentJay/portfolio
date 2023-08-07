import React from 'react'
import renderer from 'react-test-renderer'

import { Hero } from '../'

it('Renders correctly', () => {
	const tree = renderer
		.create(<Hero />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
