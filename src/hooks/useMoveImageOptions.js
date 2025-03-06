import { useMemo } from 'react';
import { getOptions } from 'advanced-cropper';

export function useMoveImageOptions(moveImage) {
  return useMemo(
    () =>
      getOptions(
        moveImage,
        {
          touch: true,
          mouse: true,
        },
        {
          touch: false,
          mouse: false,
        },
      ),
    [moveImage],
  );
}