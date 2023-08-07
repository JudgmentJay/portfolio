import React from 'react'
import renderer from 'react-test-renderer'

import { Intro } from '../'

it('Renders correctly', () => {
	const tree = renderer
		.create(<Intro>Lorem Ipsum</Intro>)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
