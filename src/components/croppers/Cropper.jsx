import React, { forwardRef } from 'react';
import { AbstractCropper } from './AbstractCropper';
import { useAbstractCropperProps } from '../../hooks/useAbstractCropperProps';

const Cropper = forwardRef((props, ref) => {
    const cropperProps = useAbstractCropperProps(props);
    const intrinsicProps = cropperProps.props;

    const { ...actualSettings } = cropperProps.settings;

    return <AbstractCropper {...intrinsicProps} ref={ref} settings={actualSettings} />;
});

Cropper.displayName = 'CropperComponent';

export default Cropper;