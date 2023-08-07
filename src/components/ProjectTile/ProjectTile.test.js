import React from 'react'
import renderer from 'react-test-renderer'

import { ProjectTile } from '../'

const mockData = {
	title: 'Flickr Image Gallery',
	url: 'https://www.jayposten.com/gallery',
	imgName: 'project_gallery',
	testId: 'project-0'
}

it('Renders correctly', () => {
	const tree = renderer
		.create(<ProjectTile {...mockData} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
