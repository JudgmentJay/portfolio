import React from 'react'
import renderer from 'react-test-renderer'

import { Section } from '../'

const mockData = {
	id: 'mockId',
	header: 'Mock Header'
}

it('Renders correctly', () => {
	const tree = renderer
		.create(
			<Section {...mockData}>
				<div>This is a test section</div>
			</Section>
		)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
