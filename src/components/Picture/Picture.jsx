import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Picture = ({
	imgName,
	fileType,
	alt,
	widths,
	lazyLoad,
	className
}) => {
	const type = fileType === 'jpg' ? 'image/jpeg' : `image/${fileType}`
	let sizes
	let srcSet

	switch (widths.length) {
		case 2: {
			sizes = `(max-width: 519px) ${widths[0]}px, ${widths[1]}px`
			srcSet = `img/${imgName}.${fileType} ${widths[0]}w, ${widths[1]}w`
			break
		}
		case 3: {
			sizes = `(max-width: 519px) ${widths[0]}px, (max-width: 739px) ${widths[1]}px, ${widths[2]}px`
			srcSet = `img/${imgName}.${fileType} ${widths[0]}w, img/${imgName}.${fileType} ${widths[1]}w, ${widths[2]}w`
		}
	}

	const imgAttributes = {
		src: `img/${imgName}.${fileType}`,
		alt
	}

	if (srcSet) {
		imgAttributes.srcSet = srcSet
		imgAttributes.sizes = sizes
	}

	if (lazyLoad) {
		imgAttributes.loading = 'lazy'
	}

	const imgClasses = classNames(className)

	return (
		<picture>
			{ Boolean(widths.length > 1) &&
				<React.Fragment>
					<source media="(max-width: 519px)" srcSet={`img/${imgName}_m.webp`} type="image/webp" />
					<source media="(max-width: 519px)" srcSet={`img/${imgName}_m.${fileType}`} type={type} />
					<source media="(max-width: 739px)" srcSet={`img/${imgName}_t.webp`} type="image/webp" />
					<source media="(max-width: 739px)" srcSet={`img/${imgName}_t.${fileType}`} type={type} />
				</React.Fragment>
			}
			<source srcSet={`img/${imgName}.webp`} type="image/webp" />
			<source srcSet={`img/${imgName}.${fileType}`} type={type} />
			<img {...imgAttributes} className={imgClasses} />
		</picture>
	)
}

Picture.propTypes = {
	imgName: PropTypes.string.isRequired,
	fileType: PropTypes.string,
	alt: PropTypes.string.isRequired,
	widths: PropTypes.array.isRequired,
	lazyLoad: PropTypes.bool,
	className: PropTypes.string
}

Picture.defaultProps = {
	fileType: 'jpg',
	lazyLoad: false
}

export default Picture
