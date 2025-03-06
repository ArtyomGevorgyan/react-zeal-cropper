import { useImperativeHandle, useRef } from 'react';
import { useStateWithCallback } from './useStateWithCallback';
import { useCropperInstance } from './useCropperInstance';
import { useCropperImage } from './useCropperImage';
import { useWindowResize } from './useWindowResize';
import { useUpdateEffect } from './useUpdateEffect';
import { useCropperAutoReconcile } from './useCropperAutoReconcile';

export function useAbstractCropper(props) {
	const {
		src,
		onReady,
		onError,
		onUpdate,
		canvas = true,
		unloadTime = 500,
		crossOrigin = true,
		checkOrientation = true,
		autoReconcileState = true,
	} = props();

	const imageRef = useRef(null);
	const boundaryRef = useRef(null);
	const canvasRef = useRef(null);
	const cropperRef = useRef(null);

	const [currentImage, setCurrentImage] = useStateWithCallback(null);

	const cropper = useCropperInstance(() => ({
		...props(),
		getInstance: () => cropperRef.current,
	}));

	const cropperImage = useCropperImage({
		src,
		crossOrigin,
		checkOrientation,
		unloadTime,
		canvas,
		onError: () => {
			if (cropperRef.current) {
				onError?.(cropperRef.current);
			}
		},
	});

	const autoReconcile = useCropperAutoReconcile(cropper, autoReconcileState);

	const resetCropper = async () => {
		if (boundaryRef.current) {
			autoReconcile.pause();
			const image = cropperImage.getImage();
			const boundary = await boundaryRef.current?.stretchTo(image);
			setCurrentImage(image, () => {
				if (boundary && image) {
					cropper.reset(boundary, image);
				} else {
					cropper.clear();
				}
			});
			autoReconcile.resume();
		}
	};

	const refreshCropper = async () => {
		if (boundaryRef.current) {
			autoReconcile.pause();
			const image = cropperImage.getImage();
			const boundary = await boundaryRef.current?.stretchTo(image);
			if (boundary && image) {
				const state = cropper.getState();
				if (state) {
					if (boundary.width !== state.boundary.width || boundary.height !== state.boundary.height) {
						cropper.setBoundary(boundary);
						cropper.reconcileState();
					}
				} else {
					cropper.reset(boundary, image);
				}
			} else {
				cropper.clear();
			}
			autoReconcile.resume();
		}
	};

	const cropperInterface = {
		reset: resetCropper,
		refresh: refreshCropper,
		setImage: setCurrentImage,
		reconcileState: cropper.reconcileState,
		moveCoordinates: cropper.moveCoordinates,
		moveCoordinatesEnd: cropper.moveCoordinatesEnd,
		resizeCoordinates: cropper.resizeCoordinates,
		clear: cropper.clear,
		resizeCoordinatesEnd: cropper.resizeCoordinatesEnd,
		moveImage: cropper.moveImage,
		flipImage: cropper.flipImage,
		zoomImage: cropper.zoomImage,
		rotateImage: cropper.rotateImage,
		transformImage: cropper.transformImage,
		transformImageEnd: cropper.transformImageEnd,
		setCoordinates: cropper.setCoordinates,
		setVisibleArea: cropper.setVisibleArea,
		startTransitions: cropper.startTransitions,
		setState: cropper.setState,
		hasInteractions: cropper.hasInteractions,
		getStencilCoordinates: cropper.getStencilCoordinates,
		getCoordinates: cropper.getCoordinates,
		getVisibleArea: cropper.getVisibleArea,
		getTransforms: cropper.getTransforms,
		getTransitions: cropper.getTransitions,
		getInteractions: cropper.getInteractions,
		getSettings: cropper.getSettings,
		getState: cropper.getState,
		getDefaultState: () => {
			const state = cropper.getState();
			const image = cropperImage.getImage();
			return state && image ? cropper.createDefaultState(state.boundary, image) : null;
		},
		getCanvas: (options) => {
			const state = cropper.getState();
			return imageRef.current && canvasRef.current && state ? canvasRef.current.draw(state, imageRef.current, options) : null;
		},
		getImage: () => (currentImage ? { ...currentImage } : null),
		isLoading: cropperImage.isLoading,
		isLoaded: cropperImage.isLoaded,
	};

	useWindowResize(refreshCropper);
	useUpdateEffect(resetCropper, [cropperImage.getImage()]);
	useUpdateEffect(() => {
		if (cropperRef.current && currentImage) {
			onReady?.(cropperRef.current);
		}
	}, [currentImage]);
	useUpdateEffect(() => {
		if (cropperRef.current) {
			onUpdate?.(cropperRef.current);
		}
	}, [cropperImage.isLoaded(), cropperImage.isLoading()]);

	useImperativeHandle(cropperRef, () => cropperInterface);

	return {
		cropper: cropperInterface,
		refs: {
			image: imageRef,
			boundary: boundaryRef,
			canvas: canvasRef,
		},
		image: currentImage,
	};
}