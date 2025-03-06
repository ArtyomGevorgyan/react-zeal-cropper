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
    boundaryProps = {},
    boundaryClassName,
    canvas = true,
    crossOrigin = true,
    disabled,
    settings = {},
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
        ...(stencilRef.current || {}),
      }),
    },
  }));

  const StencilComponent = stencilComponent;
  const WrapperComponent = wrapperComponent;
  const BackgroundWrapperComponent = backgroundWrapperComponent;
  const BackgroundComponent = backgroundComponent;
  const BoundaryComponent = boundaryComponent;

  useImperativeHandle(ref, () => cropper);

  // Add safety checks for all methods
  const safeGetState = () => {
    try {
      return typeof cropper.getState === 'function' ? cropper.getState() : null;
    } catch (e) {
      console.error('Error getting state:', e);
      return null;
    }
  };

  const safeIsLoading = () => {
    try {
      return typeof cropper.isLoading === 'function' ? cropper.isLoading() : false;
    } catch (e) {
      console.error('Error checking loading state:', e);
      return false;
    }
  };

  const safeIsLoaded = () => {
    try {
      return typeof cropper.isLoaded === 'function' ? cropper.isLoaded() : false;
    } catch (e) {
      console.error('Error checking loaded state:', e);
      return false;
    }
  };

  const state = safeGetState();

  const deprecatedWrapperProps = {
    loading: safeIsLoading(),
    loaded: safeIsLoaded(),
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
      {BoundaryComponent && (
        <BoundaryComponent
          {...boundaryProps}
          ref={refs.boundary}
          className={cn('advanced-cropper__boundary', boundaryClassName)}
        >
          {BackgroundWrapperComponent && (
            <BackgroundWrapperComponent
              {...backgroundWrapperProps}
              disabled={disabled}
              cropper={cropper}
              className={'advanced-cropper__background-wrapper'}
            >
              {state && BackgroundComponent && (
                <BackgroundComponent
                  {...backgroundProps}
                  ref={refs.image}
                  crossOrigin={crossOrigin}
                  cropper={cropper}
                  className={cn('advanced-cropper__background', backgroundClassName)}
                />
              )}
              {StencilComponent && (
                <StencilComponent 
                  {...stencilProps} 
                  disabled={disabled} 
                  ref={stencilRef} 
                  cropper={cropper} 
                  image={image} 
                />
              )}
            </BackgroundWrapperComponent>
          )}
          {canvas && <CropperCanvas ref={refs.canvas} />}
        </BoundaryComponent>
      )}
    </WrapperComponent>
  );
};

export const AbstractCropper = createCropper(AbstractCropperComponent);