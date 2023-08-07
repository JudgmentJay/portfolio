import React from 'react'
import renderer from 'react-test-renderer'

import { About } from '../'

it('Renders correctly', () => {
	const tree = renderer
		.create(<About date={new Date()} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
