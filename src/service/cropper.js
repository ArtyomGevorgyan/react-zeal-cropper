import { forwardRef } from 'react';

export function createCropper(render) {
  return forwardRef(render);
}