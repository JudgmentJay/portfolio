import React from 'react'
import renderer from 'react-test-renderer'

import { Headers } from '../'

it('Renders correctly', () => {
	const tree = renderer
		.create(<Headers />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
