import React from 'react';
import cn from 'classnames';
import CropperFade from './CropperFade';

export const CropperWrapper = ({ cropper, children, className, style }) => {
	const state = cropper ? cropper.getState() : null;
	const loaded = cropper ? cropper.isLoaded() : false;

	return (
		<div className={cn(className, 'advanced-cropper-wrapper')} style={style}>
			<CropperFade visible={state && loaded} className={'advanced-cropper-wrapper__fade'}>
				{children}
			</CropperFade>
		</div>
	);
};