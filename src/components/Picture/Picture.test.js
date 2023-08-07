import React from 'react'
import renderer from 'react-test-renderer'

import { Picture } from '../'

const mockData = {
	imgName: 'job_saatva',
	fileType: 'jpg',
	alt: 'Software Engineer II',
	widths: [460, 100, 125],
	lazyLoad: false,
	className: 'mockClass'
}

it('Renders correctly', () => {
	const tree = renderer
		.create(<Picture {...mockData} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
