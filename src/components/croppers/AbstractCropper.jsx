import React, { useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import { defaultStencilConstraints } from 'advanced-cropper';
import { useAbstractCropper } from '../../hooks/useAbstractCropper';
import { StretchableBoundary } from '../service/StretchableBoundary';
import { CropperWrapper } from '../service/CropperWrapper';
import { CropperBackgroundImage } from '../service/CropperBackgroundImage';
import { CropperCanvas } from '../service/CropperCanvas';
import { RectangleStencil } from '../stencils/RectangleStencil';
import { CropperBackgroundWrapper } from '../service/CropperBackgroundWrapper';
import { createCropper } from '../../service/cropper';

const AbstractCropperComponent = (props, ref) => {
	const {
		style,
		className,
		stencilComponent = RectangleStencil,
		stencilConstraints = defaultStencilConstraints,
		stencilProps = {},
		wrapperComponent = CropperWrapper,
		wrapperProps = {},
		backgroundComponent = CropperBackgroundImage,
		backgroundProps = {},
		backgroundClassName,
		backgroundWrapperComponent = CropperBackgroundWrapper,
		backgroundWrapperProps = {},
		boundaryComponent = StretchableBoundary,
		boundaryProps,
		boundaryClassName,
		canvas = true,
		crossOrigin = true,
		disabled,
		settings,
		...parameters
	} = props;

	const stencilRef = useRef(null);

	const { cropper, image, refs } = useAbstractCropper(() => ({
		...parameters,
		crossOrigin,
		stencilProps,
		canvas,
		settings: {
			...settings,
			...stencilConstraints(settings, {
				...stencilProps,
				...stencilRef.current,
			}),
		},
	}));

	const StencilComponent = stencilComponent;
	const WrapperComponent = wrapperComponent;
	const BackgroundWrapperComponent = backgroundWrapperComponent;
	const BackgroundComponent = backgroundComponent;
	const BoundaryComponent = boundaryComponent;

	useImperativeHandle(ref, () => cropper);

	const deprecatedWrapperProps = {
		loading: cropper.isLoading(),
		loaded: cropper.isLoaded(),
	};

	return (
		<WrapperComponent
			{...wrapperProps}
			disabled={disabled}
			className={cn('advanced-cropper', className)}
			cropper={cropper}
			style={style}
			{...deprecatedWrapperProps}
		>
			<BoundaryComponent
				{...boundaryProps}
				ref={refs.boundary}
				className={cn('advanced-cropper__boundary', boundaryClassName)}
			>
				<BackgroundWrapperComponent
					{...backgroundWrapperProps}
					disabled={disabled}
					cropper={cropper}
					className={'advanced-cropper__background-wrapper'}
				>
					{cropper.getState() && (
						<BackgroundComponent
							{...backgroundProps}
							ref={refs.image}
							crossOrigin={crossOrigin}
							cropper={cropper}
							className={cn('advanced-cropper__background', backgroundClassName)}
						/>
					)}
					<StencilComponent {...stencilProps} disabled={disabled} ref={stencilRef} cropper={cropper} image={image} />
				</BackgroundWrapperComponent>
				{canvas && <CropperCanvas ref={refs.canvas} />}
			</BoundaryComponent>
		</WrapperComponent>
	);
};

export const AbstractCropper = createCropper(React.forwardRef(AbstractCropperComponent));