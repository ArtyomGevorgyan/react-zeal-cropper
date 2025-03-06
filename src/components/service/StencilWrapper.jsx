import React from 'react';
import classnames from 'classnames';
import ArtificialTransition from './ArtificialTransition';

export const StencilWrapper = ({ className, transitions, width, height, left, top, children }) => {
  return (
    <ArtificialTransition
      className={classnames('advanced-cropper-stencil-wrapper', className)}
      transitions={transitions}
      width={width}
      height={height}
      top={top}
      left={left}
    >
      {children}
    </ArtificialTransition>
  );
};