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
	movingClassName,
	resizingClassName,
	previewClassName,
	boundingBoxClassName,
	overlayClassName,
	draggableAreaClassName,
	disabled,
}, ref) => {
	const state = cropper.getState();
	const transitions = cropper.getTransitions();
	const interactions = cropper.getInteractions();

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
		if (cropper && moveAllowed) {
			cropper.moveCoordinates(directions);
		}
	};

	const onMoveEnd = () => {
		if (cropper) {
			cropper.moveCoordinatesEnd();
		}
	};

	const onResize = (anchor, directions, options) => {
		if (cropper && resizeAllowed) {
			cropper.resizeCoordinates(anchor, directions, options);
		}
	};

	const onResizeEnd = () => {
		if (cropper) {
			cropper.resizeCoordinatesEnd();
		}
	};

	const { width, height, left, top } = coordinates
		? (typeof coordinates === 'function' ? coordinates(state) : coordinates)
		: getStencilCoordinates(state);

	return (
		state && (
			<StencilWrapper
				className={cn(
					'advanced-cropper-rectangle-stencil',
					className,
					interactions.moveCoordinates && movingClassName,
					interactions.resizeCoordinates && resizingClassName,
					{
						'advanced-cropper-rectangle-stencil--movable': moveAllowed,
						'advanced-cropper-rectangle-stencil--moving': interactions.moveCoordinates,
						'advanced-cropper-rectangle-stencil--resizable': resizeAllowed,
						'advanced-cropper-rectangle-stencil--resizing': interactions.resizeCoordinates,
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
									visible={cropper.hasInteractions()}
									columns={interactions.transformImage.rotate ? 9 : 3}
									rows={interactions.transformImage.rotate ? 9 : 3}
									className={cn('advanced-cropper-rectangle-stencil__grid', gridClassName)}
								/>
							)}
							<div className={cn('advanced-cropper-rectangle-stencil__preview', previewClassName)} />
						</StencilOverlay>
					</DraggableArea>
				</BoundingBox>
			</StencilWrapper>
		)
	);
});

RectangleStencil.displayName = 'RectangleStencil';
