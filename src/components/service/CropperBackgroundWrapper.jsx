import React from 'react';
import { useScaleImageOptions } from '../../hooks/useScaleImageOptions';
import { useMoveImageOptions } from '../../hooks/useMoveImageOptions';
import { TransformableImage } from './TransformableImage';

export const CropperBackgroundWrapper = ({
  scaleImage = true,
  moveImage = true,
  children,
  className,
  style,
  cropper,
  timeout,
  disabled
}) => {
  const transitions = cropper.getTransitions();

  const scaleImageOptions = useScaleImageOptions(scaleImage);
  const moveImageOptions = useMoveImageOptions(moveImage);

  return (
    <TransformableImage
      className={className}
      style={style}
      onTransform={cropper.transformImage}
      onTransformEnd={cropper.transformImageEnd}
      touchMove={moveImageOptions.touch}
      mouseMove={moveImageOptions.mouse}
      touchScale={scaleImageOptions.touch}
      wheelScale={scaleImageOptions.wheel}
      disabled={transitions.active || disabled}
      preventDefault={!disabled}
      timeout={timeout}
    >
      {children}
    </TransformableImage>
  );
};