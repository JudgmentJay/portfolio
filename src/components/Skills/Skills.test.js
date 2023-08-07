import React from 'react'
import renderer from 'react-test-renderer'

import { Skills } from '../'

it('Renders correctly', () => {
	const tree = renderer
		.create(<Skills />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
