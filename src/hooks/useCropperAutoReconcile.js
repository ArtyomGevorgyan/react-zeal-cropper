import { useLayoutEffect, useState } from 'react';

export function useCropperAutoReconcile(cropper, enabled = true) {
    const [active, setActive] = useState(enabled);

    useLayoutEffect(() => {
        if (active && !cropper.hasInteractions()) {
            cropper.reconcileState();
        }
    });

    return {
        pause() {
            setActive(false);
        },
        resume() {
            setActive(true);
        },
    };
}