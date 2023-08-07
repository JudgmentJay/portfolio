import React from 'react'
import renderer from 'react-test-renderer'

import { ExpBar } from '../'

const mockData = {
	skill: 'react',
	level: 85
}

it('Renders correctly', () => {
	const tree = renderer
		.create(<ExpBar {...mockData} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
