import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import {
	stretchCropperBoundary,
	fillBoundary,
} from 'advanced-cropper';

export const StretchableBoundary = forwardRef((
	{
		className,
		style,
		stretcherClassName,
		contentClassName,
		stretchAlgorithm = stretchCropperBoundary,
		sizeAlgorithm = fillBoundary,
		children,
	},
	ref
) => {
	const stretcherRef = useRef(null);
	const boundaryRef = useRef(null);

	useImperativeHandle(ref, () => ({
		reset: () => {
			const stretcher = stretcherRef.current;
			if (stretcher) {
				stretcher.style.height = '';
				stretcher.style.width = '';
			}
		},
		stretchTo: (size) => {
			const stretcher = stretcherRef.current;
			const boundary = boundaryRef.current;

			if (size?.width && size?.height && stretcher && boundary) {
				stretchAlgorithm(boundary, stretcher, size);
				const result = sizeAlgorithm(boundary, size);
				return Promise.resolve(result.width && result.height ? result : null);
			} else {
				if (stretcher) {
					stretcher.style.height = '';
					stretcher.style.width = '';
				}
				return Promise.resolve(null);
			}
		},
	}));

	return (
		<div ref={boundaryRef} style={style} className={cn('advanced-cropper-boundary', className)}>
			<div ref={stretcherRef} className={cn('advanced-cropper-boundary__stretcher', stretcherClassName)} />
			<div className={cn('advanced-cropper-boundary__content', contentClassName)}>{children}</div>
		</div>
	);
});

StretchableBoundary.displayName = 'StretchableBoundary';