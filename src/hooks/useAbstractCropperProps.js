import { defaultSettings } from '../service/constants';

export function useAbstractCropperProps(props, settings = defaultSettings) {
    const result = { settings: {}, props: {} };

    Object.keys(props).forEach((key) => {
        if (settings.some((setting) => setting === key)) {
            result.settings[key] = props[key];
        } else {
            result.props[key] = props[key];
        }
    });

    return result;
}
