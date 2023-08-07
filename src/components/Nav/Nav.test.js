import React from 'react'
import renderer from 'react-test-renderer'

import { Nav } from '../'

it('Renders correctly', () => {
	const tree = renderer
		.create(<Nav />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
