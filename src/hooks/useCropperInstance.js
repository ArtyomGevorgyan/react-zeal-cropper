import { useRef } from 'react';
import {
  ImageRestriction,
  createDefaultSettings,
} from 'advanced-cropper';
import { CropperInstance } from '../instance/CropperInstance';
import { useForceRerender } from './useForceRerender';
import { usePersistentFunction } from './usePersistentFunction';

export function useCropperInstance(props) {
  const rerender = useForceRerender();

  const getProps = usePersistentFunction(() => {
    const { settings, ...parameters } = props();

    const extendedSettings = {
      imageRestriction: ImageRestriction.fitArea,
      transformImage: {
        adjustStencil: true,
      },
      ...settings,
    };

    const extendedParameters = {
      transitions: true,
      ...parameters,
    };

    return {
      settings: {
        ...extendedSettings,
        ...createDefaultSettings(extendedSettings),
      },
      ...extendedParameters,
    };
  });

  const cropper = useRef(new CropperInstance(getProps, rerender));

  return cropper.current;
}
