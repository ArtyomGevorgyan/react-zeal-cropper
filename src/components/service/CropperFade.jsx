import React from 'react';
import cn from 'classnames';

const CropperFade = ({ visible, className, style, children }) => {
	return (
		<div
			style={style}
			className={cn(className, 'advanced-cropper-fade', Boolean(visible) && 'advanced-cropper-fade--visible')}
		>
			{children}
		</div>
	);
};

export default CropperFade;