import React from 'react';
import classnames from 'classnames';
import {
	getDirectionNames
} from 'advanced-cropper';
import { DraggableElement } from './DraggableElement';

export const HandlerWrapper = ({
	horizontalPosition,
	verticalPosition,
	className,
	disabled,
	onDrag,
	onDragEnd,
	onLeave,
	onEnter,
	children,
	style,
}) => {
	const position =
		horizontalPosition || verticalPosition
			? getDirectionNames(horizontalPosition, verticalPosition).snakeCase
			: null;

	return (
		<div
			style={style}
			className={classnames(
				className,
				'advanced-cropper-handler-wrapper',
				position && `advanced-cropper-handler-wrapper--${position}`,
				disabled && 'advanced-cropper-handler-wrapper--disabled',
			)}
		>
			<DraggableElement
				className={'advanced-cropper-handler-wrapper__draggable'}
				disabled={disabled}
				onMove={onDrag}
				onMoveEnd={onDragEnd}
				onLeave={onLeave}
				onEnter={onEnter}
				activationDistance={0}
			>
				{children}
			</DraggableElement>
		</div>
	);
};