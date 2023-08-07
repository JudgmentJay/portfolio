import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import { Job } from '../'

beforeEach(() => {
	const mockIntersectionObserver = jest.fn()

	mockIntersectionObserver.mockReturnValue({
		observe: () => null,
		unobserve: () => null,
		disconnect: () => null
	})

	window.IntersectionObserver = mockIntersectionObserver
})

const mockData = {
	title: 'Software Engineer II',
	company: 'Saatva',
	description: 'Full-stack work on a large e-commerce platform. HTML, SASS, JavaScript, React, Node, Express, PHP, GraphQL, SQL.',
	startDate: 'November 2018',
	endDate: 'December 2020',
	img: 'job_saatva',
	testId: 'job-0',
	odd: true
}

it('Should be left-aligned if it\'s an even-numbered job', () => {
	render(<Job {...mockData} odd={false} />)

	const container = screen.getByTestId(mockData.testId)

	expect(container).toHaveClass('jobContainer--left', { exact: false })
})

it('Should be right-aligned if it\'s an odd-numbered job', () => {
	render(<Job {...mockData} />)

	const container = screen.getByTestId(mockData.testId)

	expect(container).toHaveClass('jobContainer--right', { exact: false })
})

it('Renders correctly', () => {
	const tree = renderer
		.create(<Job {...mockData} />)
		.toJSON()

	expect(tree).toMatchSnapshot()
})
