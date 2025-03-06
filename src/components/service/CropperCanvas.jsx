import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { drawCroppedArea } from 'advanced-cropper';

export const CropperCanvas = forwardRef((_, ref) => {
    const canvasRef = useRef(null);
    const spareCanvasRef = useRef(null);

    useImperativeHandle(ref, () => ({
        draw: (state, image, options = {}) => {
            if (image && canvasRef.current && spareCanvasRef.current) {
                return drawCroppedArea(
                    state,
                    image,
                    canvasRef.current,
                    spareCanvasRef.current,
                    options
                );
            } else {
                return null;
            }
        },
    }));

    return (
        <>
            <canvas className="advanced-cropper-canvas" ref={canvasRef} />
            <canvas className="advanced-cropper-canvas" ref={spareCanvasRef} />
        </>
    );
});

CropperCanvas.displayName = 'CropperCanvas';