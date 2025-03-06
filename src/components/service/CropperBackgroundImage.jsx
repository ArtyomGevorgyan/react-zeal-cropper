import React, { forwardRef } from 'react';
import cn from 'classnames';
import { getBackgroundStyle } from 'advanced-cropper';
import { preventDefault } from '../../service/events';

export const CropperBackgroundImage = forwardRef(
  ({ className, style, cropper, crossOrigin = true }, ref) => {
    const state = cropper.getState();
    const transitions = cropper.getTransitions();
    const image = cropper.getImage();
    const transformStyles = image && state ? getBackgroundStyle(image, state, transitions) : {};
    const src = image ? image.src : undefined;
    return src ? (
      <img
        key={src}
        ref={ref}
        className={cn('advanced-cropper-background-image', className)}
        src={src}
        crossOrigin={crossOrigin === true ? 'anonymous' : crossOrigin || undefined}
        style={{
          ...transformStyles,
          ...style,
        }}
        onMouseDown={preventDefault}
      />
    ) : null;
  }
);

CropperBackgroundImage.displayName = 'CropperBackgroundImage';