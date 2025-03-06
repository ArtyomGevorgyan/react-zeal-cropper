import React, { useState } from 'react';
import cn from 'classnames';
import { HandlerWrapper } from '../service/HandlerWrapper';

export const SimpleHandler = ({
    verticalPosition,
    horizontalPosition,
    hoverClassName,
    wrapperClassName,
    defaultClassName,
    wrapperStyle,
    disabled,
    onMove,
    onMoveEnd,
}) => {
    const [hover, setHover] = useState(false);

    const onEnter = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    return (
        <HandlerWrapper
            style={wrapperStyle}
            className={cn(
                'advanced-cropper-simple-handler-wrapper',
                wrapperClassName,
                verticalPosition && `advanced-cropper-simple-handler-wrapper--${verticalPosition}`,
                horizontalPosition && `advanced-cropper-simple-handler-wrapper--${horizontalPosition}`,
                horizontalPosition &&
                    verticalPosition &&
                    `advanced-cropper-simple-handler-wrapper--${horizontalPosition}-${verticalPosition}`,
                hover && 'advanced-cropper-simple-handler-wrapper--hover'
            )}
            verticalPosition={verticalPosition}
            horizontalPosition={horizontalPosition}
            disabled={disabled}
            onDrag={onMove}
            onDragEnd={onMoveEnd}
            onLeave={onLeave}
            onEnter={onEnter}
        >
            <div
                className={cn(
                    'advanced-cropper-simple-handler',
                    hover && 'advanced-cropper-simple-handler--hover',
                    defaultClassName,
                    hover && hoverClassName,
                    {
                        [`advanced-cropper-simple-handler--${verticalPosition}`]: !!verticalPosition,
                        [`advanced-cropper-simple-handler--${horizontalPosition}`]: !!horizontalPosition,
                        [`advanced-cropper-simple-handler--${horizontalPosition}-${verticalPosition}`]:
                            horizontalPosition && verticalPosition,
                    }
                )}
            />
        </HandlerWrapper>
    );
};