import {
	AbstractCropperInstance,
	getEmptyInteractions,
} from 'advanced-cropper';

export class CropperInstance extends AbstractCropperInstance {
	constructor(props, onChange) {
		super();
		this.props = props;
		this.notify = onChange;
		this.data = {
			state: null,
			transitions: false,
			interactions: getEmptyInteractions(),
		};
	}

	getProps() {
		return this.props();
	}

	setData(data) {
		this.data = data;
		this.notify();
	}

	getData() {
		return this.data;
	}
}