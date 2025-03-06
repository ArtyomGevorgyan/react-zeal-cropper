import React from 'react';
import cn from 'classnames';
import { DraggableElement } from './DraggableElement';

export const LineWrapper = ({
	position,
	className,
	disabled,
	onDrag,
	onDragEnd,
	onLeave,
	onEnter,
	children,
}) => {
	return (
		<DraggableElement
			className={cn([
				'advanced-cropper-line-wrapper',
				position && `advanced-cropper-line-wrapper--${position}`,
				disabled && `advanced-cropper-line-wrapper--disabled`,
				className,
			])}
			disabled={disabled}
			onMove={onDrag}
			onMoveEnd={onDragEnd}
			onLeave={onLeave}
			onEnter={onEnter}
			activationDistance={0}
		>
			<div
				className={cn([
					'advanced-cropper-line-wrapper__content',
					position && `advanced-cropper-line-wrapper__content--${position}`,
				])}
			>
				{children}
			</div>
		</DraggableElement>
	);
};