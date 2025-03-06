import { useEffect, useRef, useState } from 'react';
import { isUndefined, promiseTimeout, loadImage } from 'advanced-cropper';
import { useStateWithCallback } from "./useStateWithCallback";

export function useCropperImage(options) {
	const { src, onLoadingStart, onLoadingEnd, onError, onLoad, crossOrigin, checkOrientation, canvas, unloadTime } = options;
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useStateWithCallback(false);

	const currentSrc = useRef(null);

	useEffect(() => {
		if (currentSrc.current !== src) {
			currentSrc.current = src || null;
			setLoaded(false);
			if (src) {
				setLoading(true);
				onLoadingStart?.();
				const promises = [
					loadImage(src, {
						crossOrigin: isUndefined(crossOrigin) ? canvas : crossOrigin,
						checkOrientation,
					}),
				];

				if (loaded && unloadTime) {
					promises.push(promiseTimeout(unloadTime));
				}
				Promise.all(promises)
					.then((responses) => {
						const [image] = responses;
						if (currentSrc.current === src) {
							setImage(image);
						}
					})
					.catch(() => {
						if (currentSrc.current === src) {
							onError?.();
						}
					})
					.finally(() => {
						if (currentSrc.current === src) {
							onLoadingEnd?.();
							setLoading(false);
						}
					});
			} else {
				if (unloadTime) {
					promiseTimeout(unloadTime).then(() => {
						if (currentSrc.current === src) {
							setImage(null);
						}
					});
				} else {
					setImage(null);
				}
			}
		}
	}, [src, image]);

	useEffect(() => {
		if (image) {
			setLoaded(true, () => {
				onLoad?.(image);
			});
		}
	}, [image]);

	return {
		isLoading() {
			return loading;
		},
		isLoaded() {
			return loaded;
		},
		getImage() {
			return image;
		},
		setImage,
	};
}