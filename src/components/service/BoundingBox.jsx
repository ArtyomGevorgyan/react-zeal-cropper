import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import {
	getDirectionNames,
	isCardinalDirection,
	isObject,
} from 'advanced-cropper';
import { SimpleLine } from '../lines/SimpleLine';
import { SimpleHandler } from '../handlers/SimpleHandler';

const HORIZONTAL_DIRECTIONS = ['east', 'west', null];
const VERTICAL_DIRECTIONS = ['south', 'north', null];

export const BoundingBox = ({
	style,
	className,
	children,
	onResize,
	onResizeEnd,
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
	disabled = false,
	reference = null,
}) => {
	const [lastReference, setLastReference] = useState(null);

	const points = useMemo(() => {
		const result = [];
		HORIZONTAL_DIRECTIONS.forEach((hDirection) => {
			VERTICAL_DIRECTIONS.forEach((vDirection) => {
				if (hDirection !== vDirection) {
					let { snakeCase, camelCase } = getDirectionNames(hDirection, vDirection);
					if (snakeCase && camelCase) {
						result.push({
							name: camelCase,
							className: snakeCase,
							verticalPosition: vDirection,
							horizontalPosition: hDirection,
						});
					}
				}
			});
		});
		return result;
	}, []);

	const lineNodes = useMemo(() => {
		const result = [];
		points.forEach((point) => {
			if (isCardinalDirection(point.name) && (isObject(lines) ? lines[point.name] : lines)) {
				result.push({
					name: point.name,
					component: lineComponent,
					className: cn(
						lineClassNames.default,
						lineClassNames[point.name],
						disabled && lineClassNames.disabled
					),
					wrapperClassName: cn(
						`advanced-cropper-bounding-box__line`,
						`advanced-cropper-bounding-box__line--${point.name}`,
						lineWrapperClassNames.default,
						lineWrapperClassNames[point.name],
						disabled && lineWrapperClassNames.disabled
					),
					hoverClassName: lineClassNames.hover,
					verticalPosition: point.verticalPosition,
					horizontalPosition: point.horizontalPosition,
					disabled,
				});
			}
		});
		return result;
	}, [points, lines, lineComponent, lineClassNames, lineWrapperClassNames, disabled]);

	const handlerNodes = useMemo(() => {
		const result = [];
		points.forEach((point) => {
			if (isObject(handlers) ? handlers[point.name] : handlers) {
				result.push({
					name: point.name,
					component: handlerComponent,
					className: cn(handlerClassNames.default, handlerClassNames[point.name]),
					containerClassName: cn(
						`advanced-cropper-bounding-box__handler-wrapper`,
						`advanced-cropper-bounding-box__handler-wrapper--${point.className}`
					),
					wrapperClassName: cn(
						`advanced-cropper-bounding-box__handler`,
						`advanced-cropper-bounding-box__handler--${point.className}`,
						handlerWrapperClassNames.default,
						handlerWrapperClassNames[point.name]
					),
					hoverClassName: handlerClassNames.hover,
					verticalPosition: point.verticalPosition,
					horizontalPosition: point.horizontalPosition,
					disabled,
				});
			}
		});
		return result;
	}, [points, handlers, handlerComponent, handlerClassNames, handlerWrapperClassNames, disabled]);

	const onHandlerMove =
		(horizontalPosition, verticalPosition) =>
		({ left, top }, nativeEvent) => {
			const directions = {
				left,
				top,
			};

			let respectDirection;
			if (!verticalPosition && horizontalPosition) {
				respectDirection = 'width';
			} else if (verticalPosition && !horizontalPosition) {
				respectDirection = 'height';
			}

			if (!disabled) {
				if (onResize) {
					const anchor = getDirectionNames(horizontalPosition, verticalPosition).camelCase;
					if (anchor) {
						onResize(anchor, directions, {
							reference: lastReference || reference,
							preserveAspectRatio: nativeEvent && nativeEvent.shiftKey,
							respectDirection,
							compensate: true,
						});
					}
				}
				if (!lastReference) {
					setLastReference(reference);
				}
			}
		};

	const onHandlerMoveEnd = () => {
		onResizeEnd?.();
		setLastReference(null);
	};

	return (
		<div className={cn('advanced-cropper-bounding-box', className)} style={style}>
			{children}
			<div>
				{lineNodes.map((line) => (
					<line.component
						key={line.name}
						defaultClassName={line.className}
						hoverClassName={line.hoverClassName}
						wrapperClassName={line.wrapperClassName}
						position={line.name}
						disabled={line.disabled}
						onMove={onHandlerMove(line.horizontalPosition, line.verticalPosition)}
						onMoveEnd={onHandlerMoveEnd}
					/>
				))}
			</div>
			<div>
				{handlerNodes.map((handler) => {
					const handlerElement = (
						<handler.component
							defaultClassName={handler.className}
							hoverClassName={handler.hoverClassName}
							wrapperClassName={handler.wrapperClassName}
							horizontalPosition={handler.horizontalPosition}
							verticalPosition={handler.verticalPosition}
							disabled={handler.disabled}
							onMove={onHandlerMove(handler.horizontalPosition, handler.verticalPosition)}
							onMoveEnd={onHandlerMoveEnd}
						/>
					);

					return (
						<div key={handler.name} className={handler.containerClassName}>
							{handlerElement}
						</div>
					);
				})}
			</div>
		</div>
	);
};