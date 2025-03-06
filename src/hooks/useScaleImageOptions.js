import { useMemo } from 'react';
import { getOptions } from 'advanced-cropper';

export function useScaleImageOptions(scaleImage) {
  return useMemo(
    () =>
      getOptions(
        scaleImage,
        {
          touch: true,
          wheel: {
            ratio: 0.1,
          },
        },
        {
          touch: false,
          wheel: false,
        },
      ),
    [scaleImage],
  );
}