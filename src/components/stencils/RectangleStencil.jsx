import React, { forwardRef, useImperativeHandle } from 'react';
import cn from 'classnames';
import {
  getStencilCoordinates,
  createAspectRatio,
} from 'advanced-cropper';
import { SimpleLine } from '../lines/SimpleLine';
import { SimpleHandler } from '../handlers/SimpleHandler';
import { BoundingBox } from '../service/BoundingBox';
import { StencilOverlay } from '../service/StencilOverlay';
import { DraggableArea } from '../service/DraggableArea';
import { StencilWrapper } from '../service/StencilWrapper';
import { StencilGrid } from '../service/StencilGrid';

export const RectangleStencil = forwardRef(({
  cropper,
  coordinates,
  aspectRatio,
  minAspectRatio,
  maxAspectRatio,
  handlerComponent = SimpleHandler,
  handlers = {
    eastNorth: true,
    north: true,
    westNorth: true,
    west: true,
    westSouth: true,
    south: true,
    eastSouth: true,
    east: true,
  },
  handlerClassNames = {},
  handlerWrapperClassNames = {},
  lines = {
    west: true,
    north: true,
    east: true,
    south: true,
  },
  lineComponent = SimpleLine,
  lineClassNames = {},
  lineWrapperClassNames = {},
  resizable = true,
  movable = true,
  grid,
  gridClassName,
  className,
  movingClassName = '',
  resizingClassName = '',
  previewClassName,
  boundingBoxClassName,
  overlayClassName,
  draggableAreaClassName,
  disabled,
}, ref) => {
  // Add safety checks
  const safeGetState = () => {
    try {
      return typeof cropper.getState === 'function' ? cropper.getState() : null;
    } catch (e) {
      console.error('Error getting state:', e);
      return null;
    }
  };

  const safeGetTransitions = () => {
    try {
      return typeof cropper.getTransitions === 'function' ? cropper.getTransitions() : {};
    } catch (e) {
      console.error('Error getting transitions:', e);
      return {};
    }
  };

  const safeGetInteractions = () => {
    try {
      return typeof cropper.getInteractions === 'function' ? cropper.getInteractions() : {};
    } catch (e) {
      console.error('Error getting interactions:', e);
      return {};
    }
  };

  const state = safeGetState();
  const transitions = safeGetTransitions();
  const interactions = safeGetInteractions();

  const resizeAllowed = resizable && !disabled;
  const moveAllowed = movable && !disabled;

  useImperativeHandle(ref, () => ({
    aspectRatio: createAspectRatio(
      aspectRatio || {
        minimum: minAspectRatio,
        maximum: maxAspectRatio,
      },
    ),
  }));

  const onMove = (directions) => {
    if (cropper && moveAllowed && typeof cropper.moveCoordinates === 'function') {
      cropper.moveCoordinates(directions);
    }
  };

  const onMoveEnd = () => {
    if (cropper && typeof cropper.moveCoordinatesEnd === 'function') {
      cropper.moveCoordinatesEnd();
    }
  };

  const onResize = (anchor, directions, options) => {
    if (cropper && resizeAllowed && typeof cropper.resizeCoordinates === 'function') {
      cropper.resizeCoordinates(anchor, directions, options);
    }
  };

  const onResizeEnd = () => {
    if (cropper && typeof cropper.resizeCoordinatesEnd === 'function') {
      cropper.resizeCoordinatesEnd();
    }
  };

  if (!state) {
    return null;
  }

  const { width, height, left, top } = coordinates
    ? (typeof coordinates === 'function' ? coordinates(state) : coordinates)
    : getStencilCoordinates(state);

  // Make sure all interactions values are safe
  const safeInteractions = {
    moveCoordinates: interactions && interactions.moveCoordinates,
    resizeCoordinates: interactions && interactions.resizeCoordinates,
    transformImage: interactions && interactions.transformImage ? 
      { rotate: interactions.transformImage.rotate } : 
      { rotate: false }
  };

  // Check if the cropper has any interactions
  const hasInteractions = () => {
    try {
      return typeof cropper.hasInteractions === 'function' ? cropper.hasInteractions() : false;
    } catch (e) {
      console.error('Error checking interactions:', e);
      return false;
    }
  };

  return (
    <StencilWrapper
      className={cn(
        'advanced-cropper-rectangle-stencil',
        className,
        safeInteractions.moveCoordinates && movingClassName,
        safeInteractions.resizeCoordinates && resizingClassName,
        {
          'advanced-cropper-rectangle-stencil--movable': moveAllowed,
          'advanced-cropper-rectangle-stencil--moving': safeInteractions.moveCoordinates,
          'advanced-cropper-rectangle-stencil--resizable': resizeAllowed,
          'advanced-cropper-rectangle-stencil--resizing': safeInteractions.resizeCoordinates,
          'advanced-cropper-rectangle-stencil--disabled': disabled,
        },
      )}
      width={width}
      height={height}
      left={left}
      top={top}
      transitions={transitions}
    >
      <BoundingBox
        reference={state.coordinates}
        className={cn(boundingBoxClassName, 'advanced-cropper-rectangle-stencil__bounding-box')}
        handlers={handlers}
        handlerComponent={handlerComponent}
        handlerClassNames={handlerClassNames}
        handlerWrapperClassNames={handlerWrapperClassNames}
        lines={lines}
        lineComponent={lineComponent}
        lineClassNames={lineClassNames}
        lineWrapperClassNames={lineWrapperClassNames}
        onResize={onResize}
        onResizeEnd={onResizeEnd}
        disabled={!resizeAllowed}
      >
        <DraggableArea
          disabled={!moveAllowed}
          onMove={onMove}
          onMoveEnd={onMoveEnd}
          className={cn('advanced-cropper-rectangle-stencil__draggable-area', draggableAreaClassName)}
        >
          <StencilOverlay
            className={cn('advanced-cropper-rectangle-stencil__overlay', overlayClassName)}
          >
            {grid && (
              <StencilGrid
                visible={hasInteractions()}
                columns={safeInteractions.transformImage.rotate ? 9 : 3}
                rows={safeInteractions.transformImage.rotate ? 9 : 3}
                className={cn('advanced-cropper-rectangle-stencil__grid', gridClassName)}
              />
            )}
            <div className={cn('advanced-cropper-rectangle-stencil__preview', previewClassName)} />
          </StencilOverlay>
        </DraggableArea>
      </BoundingBox>
    </StencilWrapper>
  );
});

RectangleStencil.displayName = 'RectangleStencil';