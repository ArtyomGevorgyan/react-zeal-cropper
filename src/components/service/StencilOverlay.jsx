import React from 'react';
import classnames from 'classnames';

export const StencilOverlay = ({ className, children }) => {
  return <div className={classnames('advanced-cropper-stencil-overlay', className)}>{children}</div>;
};